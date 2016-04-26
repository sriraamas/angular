import {StaticReflectorHost, StaticType} from 'angular2/src/compiler/static_reflector';
import * as ts from 'typescript';
import {MetadataCollector, ModuleMetadata} from 'ts-metadata-collector';
import * as fs from 'fs';

const EXTS = ['', '.ts', '.d.ts', '.js', '.jsx', '.tsx'];
const DTS = /\.d\.ts$/;

export class NodeReflectorHost implements StaticReflectorHost {
  constructor(private program: ts.Program, private metadataCollector: MetadataCollector,
              private compilerHost: ts.CompilerHost) {}

  resolveModule(moduleId: string, containingFile: string) {
    if (!containingFile || !containingFile.length) {
      containingFile = 'index.ts';
    }
    return this.compilerHost.resolveModuleNames([moduleId], containingFile)[0].resolvedFileName;
  }

  getMetadataFor(filePath: string): ModuleMetadata {
    if (DTS.test(filePath)) {
      const metadataPath = filePath.replace(DTS, '.metadata.json');
      if (fs.existsSync(metadataPath)) {
        return this.readMetadata(metadataPath);
      }
    }

    let sf = this.program.getSourceFile(filePath);
    if (!sf) {
      throw new Error(`Source file ${filePath} not present in program.`);
    }
    const metadata =  this.metadataCollector.getMetadata(sf, this.program.getTypeChecker());
    console.log(JSON.stringify(metadata));
    return metadata;
  }

  readMetadata(filePath: string) {
    try {
      return JSON.parse(fs.readFileSync(filePath, {encoding: 'utf-8'}));
    } catch (e) {
      console.error(`Failed to read JSON file ${filePath}`);
      throw e;
    }
  }

  writeMetadata(emitFilePath: string, sourceFile: ts.SourceFile) {
    if (DTS.test(emitFilePath)) {
      const path = emitFilePath.replace(DTS, '.metadata.json');
      const metadata =
          this.metadataCollector.getMetadata(sourceFile, this.program.getTypeChecker());
      if (metadata && metadata.metadata) {
        const metadataText = JSON.stringify(metadata);
        fs.writeFileSync(path, metadataText, {encoding: 'utf-8'});
      }
    }
  }
}
