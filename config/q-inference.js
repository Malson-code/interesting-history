/*
    逻辑推理
*/
/*
    uuid 
    points 分值
    content 题目内容
    answer  答案
    tips     答案解析
    type    所属类型  'inference'
*/
module.exports = [
    {
        uuid: "upM8AnTlZjtk8wnBwKuNeT",
        points: 4,
        answer: 1920,
        type: 'inference',
        contentList: [
            { type: 'text', content: '工厂现有一批螺丝需要拧，已知熟练的老员工需要10天时间拧完，每天报酬200元；初级员工需要15天时间拧完，每天报酬120元，由于场地限制，最多可安排12名员工，若要求必须在一天内完成任务，则最少支付的报酬为___?' }
        ],
        tips: [
            { type: 'text', content: '1/10 * x + 1/15 * y = 1' },
            { type: 'text', content: 'x + y <=12' },
            { type: 'text', content: 'x = y = 6' },
            { type: 'text', content: '答案：200*6 + 120*6 = 1920' },
        ]
    },
    {
        uuid: "ukf2CZUedC4zfmQCTQxZQG",
        points: 4,
        answer: 10231024,
        type: 'inference',
        contentList: [
            { type: 'text', content: '1/2 + 1/4 + 1/8 + ... + 1/1024 = ？(若答案为分数，将分子分母连写，如1/2为12)' }
        ],
        tips: [
            { type: 'text', content: '值为 1023/1024' },
            { type: 'text', content: '答案为 10231024' },
        ]
    },
    {
        uuid: "udsuwBzJQxt5TQn4eQ3pZc",
        points: 6,
        answer: 142857,
        type: 'inference',
        contentList: [
            { type: 'text', content: '有一个奇妙的6位数，左边第一位数字是1，把该数字乘以3，结果值只要把最左边第一位的数字1移动到最右边，而其他5个数字依次左移一位就可以了，问：这个数字是多少？' }
        ],
        tips: [
            { type: 'text', content: '假设这个6位数为100000+x，那么' },
            { type: 'text', content: '10x+1 = 3*(100000+x)' },
            { type: 'text', content: '7x = 299999 ' },
            { type: 'text', content: 'x = 42857 ' },
            { type: 'text', content: '那么这个6位数为142857 ' },
        ]
    },
    {
        uuid: "uoq5lYKQxNyJYrcxrDASgm",
        points: 6,
        answer: 54454.5,
        type: 'inference',
        contentList: [
            { type: 'text', content: 'A、B、C三人的年龄一直是一个秘密。将A的年龄数字的位置对调一下，就是B的年龄；C的年龄的两倍是A与B两个年龄的差数；而B的年龄是C的10倍。请问：A、B、C三人的年龄各是多少？（答案连写即可）' }
        ],
        tips: [
            { type: 'text', content: '假设这A的年龄数字的位置对调一下,就是B的年龄,AB两个年龄的差数=9 C的年龄段两倍是A与B两个年龄的差数 C=4.5(4岁半)个6位数为100000+x，那么' },
            { type: 'text', content: '而B的年龄是C的10倍 B=45' },
            { type: 'text', content: '所以A=54' },
            { type: 'text', content: '答案：54454.5' },
        ]
    },
    {
        uuid: "uS5eOiAjliTSxQ7WhKh58E",
        points: 8,
        answer: 12,
        type: 'inference',
        contentList: [
            { type: 'text', content: '有一个牧场，牧场内草坪的草每天均匀生长，知道这片牧场可供27头牛吃6天，可供23头牛吃9天，问可供21头牛吃___天？' }
        ],
        tips: [
            { type: 'text', content: '假设1头牛一天吃1份草' },
            { type: 'text', content: '27 * 6 = 162份' },
            { type: 'text', content: '23 * 9 = 207份' },
            { type: 'text', content: '那么每天增长的草的量为(207-162)/(9-6) = 15份' },
            { type: 'text', content: '那么原有草量为72份' },
            { type: 'text', content: '72/(21-15) = 12天' },
        ]
    },
]
