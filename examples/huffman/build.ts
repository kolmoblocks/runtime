import * as gulp from "gulp";
import { Service, project } from "@wasm/studio-utils";

gulp.task("build", async () => {
  const data = await Service.compileFile(project.getFile("src/huffman2.c"), "c", "wasm", "-g -O3");
  const outWasm = project.newFile("out/huffman2.wasm", "wasm", true);
  outWasm.setData(data);
});

gulp.task("default", ["build"], async () => {});
