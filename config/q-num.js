/*
    数字规律
*/
module.exports = [
    {
        uuid: "uQoN7yMxjS6qhBcnVuk9he",
        points: 1,
        answer: 7,
        type: 'num',
        contentList: [
            { type: 'text', content: '1, 3, 5, ___, 9, 11' },
        ],
        tips: [
            { type: 'text', content: '规律：奇数排列' },
            { type: 'text', content: '答案：7' },
        ]
    },
    {
        uuid: "uuacT5vgXQjoZGJ8YqeL34",
        points: 2,
        answer: 92,
        type: 'num',
        contentList: [
            { type: 'text', content: '16 * 5 + 12 = ?' },
        ],
        tips: [
            { type: 'text', content: '规律：正常计算值' },
            { type: 'text', content: '答案：92' },
        ]
    },
    {
        uuid: "uPx5NsWuxO0cRgdpABhCFk",
        points: 3,
        answer: 64,
        type: 'num',
        contentList: [
            { type: 'text', content: '2 —— 4' },
            { type: 'text', content: '4 —— 16' },
            { type: 'text', content: '5 —— 25' },
            { type: 'text', content: '8 —— ？' },
        ],
        tips: [
            { type: 'text', content: '规律：右边数值为左边数值的平方' },
            { type: 'text', content: '答案：64' },
        ]
    },
    {
        uuid: "uqZQVhFzpS9uw0sJzKh97f",
        points: 3,
        answer: 162,
        type: 'num',
        contentList: [
            { type: 'text', content: '2, 6, 18, 54, ___?' },
        ],
        tips: [
            { type: 'text', content: '规律：相连为3的倍数' },
            { type: 'text', content: '答案：162' },
        ]
    },
    {
        uuid: "ufE5UttorvLJ1rXUOOI99P",
        points: 4,
        answer: 20,
        type: 'num',
        contentList: [
            { type: 'text', content: '3 - 6' },
            { type: 'text', content: '8 - 56' },
            { type: 'text', content: '12 - 132' },
            { type: 'text', content: '5 - ?' }
        ],
        tips: [
            { type: 'text', content: '规律：等号后的数字等于前面数字乘以数字减一。例：' },
            { type: 'text', content: '6 = 3 * (3-1)' },
            { type: 'text', content: '56 = 8 * (8-1)' },
            { type: 'text', content: '右边 = 左边 * (左边-1)' },
            { type: 'text', content: '答案：20' },
        ]
    },
    {
        uuid: "uh5riZg9qC1bGdlQEXV5b8",
        points: 3,
        answer: 89,
        type: 'num',
        contentList: [
            { type: 'text', content: '第10个数是多少？' },
            { type: 'text', content: '1, 2, 3, 5, 8, 13, 21, ...' },
        ],
        tips: [
            {
                type: 'text', content: '规律：从第3个数开始 3 = 2 + 1'
            },
            { type: 'text', content: '3 = 2 + 1' },
            { type: 'text', content: '5 = 3 + 2' },
            { type: 'text', content: '规律：后面数字等于前面2个数字之和' },
            { type: 'text', content: '答案：89' },
        ]
    },
    {
        uuid: "uoRmGrzyNin6Is1371c6wB",
        points: 4,
        answer: 125.64,
        type: 'num',
        contentList: [
            { type: 'text', content: '1.16, 8.25, 27.36, 64.49, ___?' },
        ],
        tips: [
            { type: 'text', content: '规律：M = (n^3).(n+3)^2' },
            { type: 'text', content: '1.16 = (1^3).(1+3)^2' },
            { type: 'text', content: '8.25= (2^3).(2+3)^2' },
            { type: 'text', content: '答案：125.64' },
        ]
    },
    {
        uuid: "u4ZPdpggcpgIsKrw4aqvKU",
        points: 5,
        answer: 5.9,
        type: 'num',
        contentList: [
            { type: 'text', content: '2.1, 3.4, ___?, 8.16, 13.25, ...' },
        ],
        tips: [
            {
                type: 'text', content: '规律：第一个数 2,3,5,8,13'
            },
            { type: 'text', content: '第二个数 1^2, 2^2, 3^2, 4^4' },
            { type: 'text', content: '答案：5.9' },
        ]
    },
    {
        uuid: "ufWcRu1Da8nrF3paXuCtr6",
        points: 5,
        answer: 5954,
        type: 'num',
        contentList: [
            { type: 'text', content: '1514, 2624, 3734, 4844, ___?' },
        ],
        tips: [
            { type: 'text', content: '本题为深圳市公务员考试真题' },
            { type: 'text', content: '规律：第一个数依次加1' },
            { type: 'text', content: '第二个数依次加1' },
            { type: 'text', content: '15-14=1; 26-24=2; 37-34=3;48-44=4;' },
            { type: 'text', content: '答案：5954' },
        ]
    },
    {
        uuid: "uWC64b69CSUssRy1z0gWMP",
        points: 5,
        answer: 2170,
        type: 'num',
        contentList: [
            { type: 'text', content: '10 + 14 + 18 + ... + 130 = ？' },
        ],
        tips: [
            { type: 'text', content: '规律：数值依次增加 4' },
            { type: 'text', content: '可以发现此为一个等差数列' },
            { type: 'text', content: '等差数列求和公式为：' },
            { type: 'text', content: 'S = n*a1+n(n-1)*d/2' },
            { type: 'text', content: '答案：2170' },
        ]
    },
    {
        uuid: "uKi8fOC1NcxnMEc05BSNGo",
        points: 6,
        answer: 196,
        type: 'num',
        contentList: [
            { type: 'text', content: '2, 3, 10, 26, 72, ___?' },
        ],
        tips: [
            { type: 'text', content: '本题为浙江公务员考试真题' },
            { type: 'text', content: '10 = (2 + 3) *2' },
            { type: 'text', content: '26 = (10 + 3) *2' },
            { type: 'text', content: '...' },
            { type: 'text', content: '答案：196' },
        ]
    },
    {
        uuid: "udF9KM2sOWPv6ndgk3kEIN",
        points: 6,
        answer: 47,
        type: 'num',
        contentList: [
            { type: 'text', content: '10, 12, 13, 22, 25, 35, ___?' },
        ],
        tips: [
            { type: 'text', content: '本题为江苏公务员考试真题' },
            { type: 'text', content: '22 = 10 + 12' },
            { type: 'text', content: '25 = 12 + 13' },
            { type: 'text', content: '...' },
            { type: 'text', content: '答案：47' },
        ]
    },
    {
        uuid: "uI6Asb22eLnBTPG9JGYb81",
        points: 7,
        answer: 34,
        type: 'num',
        contentList: [
            { type: 'text', content: '第100个数字是多少？' },
            { type: 'text', content: '123234345456567...' },
        ],
        tips: [
            { type: 'text', content: '规律：简单可见数字3个位一组，每组开头数字按阿拉伯数字排列' },
            { type: 'text', content: '例：123  234  345 ...' },
            { type: 'text', content: '那么第99个数字为第33组(33 34 35)' },
            { type: 'text', content: '答案：34' },
        ]
    },
    {
        uuid: "uCu7XpO9sMh9lRWsQ2sq9e",
        points: 7,
        answer: 9,
        type: 'num',
        contentList: [
            { type: 'text', content: '4, 12, 8, 10, ___?' },
        ],
        tips: [
            { type: 'text', content: '规律：如下' },
            { type: 'text', content: '8 = (4 + 12) / 2' },
            { type: 'text', content: '10 = (12 + 8) / 2' },
            { type: 'text', content: '答案：9' },
        ]
    },
    {
        uuid: "uuFQD6X5t8kzH9s8KxjCyC",
        points: 8,
        answer: 55,
        type: 'num',
        contentList: [
            { type: 'img', content: 'num-1.svg' },
        ],
        tips: [
            { type: 'text', content: '规律：六边形对边大数字为n，小数字为m，n = (m^2)+(n-1)' },
            { type: 'text', content: '例：71 = 8^2 + (8-1)' },
            { type: 'text', content: '例：41 = 6^2 + (6-1)' },
            { type: 'text', content: '答案：55' },
        ]
    },
    {
        uuid: "uf7fNZgu9WEpVsWUQMMnhq",
        points: 8,
        answer: 466,
        type: 'num',
        contentList: [
            { type: 'text', content: '4, 7, 10, 16, 34, 106, ___?' },
        ],
        tips: [
            { type: 'text', content: '本题为2018浙江省公务员真题' },
            { type: 'text', content: '规律：7-4=3' },
            { type: 'text', content: '10 - 7 = 3 = 1 * 3' },
            { type: 'text', content: '16 - 10 = 6 = 2 * 3' },
            { type: 'text', content: '34 - 16 = 18 = 3 * 6' },
            { type: 'text', content: '106 - 34 = 72 = 4 * 18' },
            { type: 'text', content: '？- 106 =  ？ = 5 * 72' },
            { type: 'text', content: '答案：466' },
        ]
    },
    {
        uuid: "uuesUMcg8DlkZr5vXhe3WJ",
        points: 8,
        answer: 36,
        type: 'num',
        contentList: [
            { type: 'img', content: 'num-2.svg' },
        ],
        tips: [
            { type: 'text', content: '规律：每组图形左上角为x，右上角为y，底部为z' },
            { type: 'text', content: '那么 z = 根号 x * y' },
            { type: 'text', content: '答案：36' },
        ]
    },
    {
        uuid: "uOYXIuv6GecHstblkCwWAo",
        points: 8,
        answer: 67,
        type: 'num',
        contentList: [
            { type: 'text', content: '3, 11, 13, 29, 31, 55, 35, ___?' },
        ],
        tips: [
            { type: 'text', content: '本题为天津公务员考试真题' },
            { type: 'text', content: '规律：每两个数为一组形成规律，第一组(3&11)，第二组(13&29)...' },
            { type: 'text', content: '例：11 - 3 = 8 = 8 * 1' },
            { type: 'text', content: '例：29 - 13 = 16 = 8 * 2' },
            { type: 'text', content: '例：55 - 31 = 24 = 8 * 3' },
            { type: 'text', content: '答案：67' },
        ]
    },
    {
        uuid: "u3aWHhvoicGEUUnNT2841B",
        points: 8,
        answer: 90,
        type: 'num',
        contentList: [
            { type: 'text', content: '2, 12, 30, 56, ___?' },
        ],
        tips: [
            { type: 'text', content: '规律：如下' },
            { type: 'text', content: '2 = 1 * 2' },
            { type: 'text', content: '12 = 3 * 4' },
            { type: 'text', content: '30 = 5 * 6' },
            { type: 'text', content: '56 = 7 * 8' },
            { type: 'text', content: '答案：90' },
        ]
    },
    {
        uuid: "ureH6cdu0EdeSWmgry89mp",
        points: 8,
        answer: 61,
        type: 'num',
        contentList: [
            { type: 'text', content: '20, 22, 25, 30, 37, 48, ___?' },
        ],
        tips: [
            { type: 'text', content: '规律：两两之间相差值分别为 2, 3, 5, 7, 11, ...为标准的质数排列，下一个质数为13' },
            { type: 'text', content: '答案：61' },
        ]
    },
    {
        uuid: "u7QgRflduLVgCbzC3Nc7bL",
        points: 10,
        answer: 305,
        type: 'num',
        contentList: [
            { type: 'text', content: '256, 269, 286, 302, ___?' },
        ],
        tips: [
            { type: 'text', content: '规律：下一位数字等于它前一位数字的值+前一位数字每位数的和' },
            { type: 'text', content: '例：269 = 256 + (2+5+6)' },
            { type: 'text', content: '例：282 = 269 + (2+6+9)' },
            { type: 'text', content: '答案：305' },
        ]
    },
    {
        uuid: "uJjMCZxj8BNglFfnp2sQ83",
        points: 10,
        answer: 69,
        type: 'num',
        contentList: [
            { type: 'text', content: '2, 5, 10, 19, 36, ___?' },
        ],
        tips: [
            { type: 'text', content: '规律：两两之间相差值分别为 3, 5, 9, 17, ...' },
            { type: 'text', content: '由以上差值可以推算出下一个差值等于前一个差值乘以2再减1' },
            { type: 'text', content: '例：5 = 3 * 2 -1' },
            { type: 'text', content: '例：9 = 5 * 2 -1' },
            { type: 'text', content: '例：17 = 9 * 2 -1' },
            { type: 'text', content: '答案：69' },
        ]
    },
    {
        uuid: "uNxWlOespeQhxF3dJ3DuR6",
        points: 10,
        answer: 94,
        type: 'num',
        contentList: [
            { type: 'text', content: '2, 6, 14, 28, 52, ___?' },
        ],
        tips: [
            { type: 'text', content: '规律：s = (2 ^ n) + n(n - 1)' },
            { type: 'text', content: '答案：94' },
        ]
    },
    {
        uuid: "ujdw0TvoYZNnBOYhUGCgFs",
        points: 12,
        answer: 69,
        type: 'num',
        contentList: [
            { type: 'text', content: '2, 5, 10, 19, 36, ___?' },
        ],
        tips: [
            { type: 'text', content: '规律：两两之间相差值分别为 3, 5, 9, 17, ...' },
            { type: 'text', content: '由以上差值可以推算出下一个差值等于前一个差值乘以2再减1' },
            { type: 'text', content: '例：5 = 3 * 2 -1' },
            { type: 'text', content: '例：9 = 5 * 2 -1' },
            { type: 'text', content: '例：17 = 9 * 2 -1' },
            { type: 'text', content: '答案：69' },
        ]
    },
    {
        uuid: "uXwPN3AIR6iAYgIb9h1KM5",
        points: 12,
        answer: 128,
        type: 'num',
        contentList: [
            { type: 'text', content: '4, 11, 30, 67, ___?' },
        ],
        tips: [
            { type: 'text', content: '规律：此题相对还是有点难度的，如下例子' },
            { type: 'text', content: '4 = (1^3) + 3' },
            { type: 'text', content: '11 = (2^3) + 3' },
            { type: 'text', content: '30 = (3^3) + 3' },
            { type: 'text', content: '67 = (4^3) + 3' },
            { type: 'text', content: '答案：128' },
        ]
    },
]