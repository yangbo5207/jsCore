// 队列分析，数字表示右侧代码行数
queue = [4]
// 已经知道了 回调 4 的返回结果为 undefined，所以 18 也可以入列了
queue = [8, 18] // 4 出列、8、18入列，

// 执行 8，输出1，得知了 8 的返回结果为 undefined，11也可以入列
queue = [18, 11]

// 执行 18，输出 1.1，23 可直接入列，同时能得知 18 的返回结果，37入列
queue = [11, 23, 37]

// 执行 11，输出 2，得到11的返回结果，14可入列
queue = [23, 37, 14]

// 执行 23，27可直接入列，同时得到 23 的返回结果，33可直接入列
queue = [37, 14, 27, 33]

// 执行 37，输出 3
queue = [14, 27, 33]

// 执行 14，输出3.1
queue = [27, 33]

// 执行 27，输出 4，得到27的返回结果，30可直接入列
queue = [33, 30]

// 执行 33，输出 5
queue = [30]

// 执行 30，输出 6
queue = []

// 输出结果
// 0
// 1
// 1.1
// 2
// 3
// 3.1
// 4
// 5
// 6