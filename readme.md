我们设置 "modules": false ，否则 Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS ，导致 Rollup 的一些处理失败。

我们将 .babelrc 文件放在 src 中，而不是根目录下。 这允许我们对于不同的任务有不同的 .babelrc 配置，比如像测试，如果我们以后需要的话 - 通常为单独的任务单独配置会更好。