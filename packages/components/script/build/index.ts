import delPath from "../utils/delpath";
import { series, parallel, src, dest, TaskFunction } from "gulp";
import { pkgPath, componentPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";

export const removeDist = () => {
  return delPath(`${pkgPath}/easy`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/easy/lib/src`))
    .pipe(dest(`${pkgPath}/easy/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

//同步执行series函数
const buildTasks: TaskFunction[] = [
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  ),
];

const defaultExport: TaskFunction = series(...buildTasks);
export default defaultExport;
