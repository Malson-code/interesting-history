
let nameList = ["我要去厕所唱倍儿爽", "_蒝の菋′", "临时嘉宾", "嘿寳贝^o^!", "狸猫换娘子だ", "只见新人笑ヽ", "情深致心", "ta的妆被泪侵花~", "萌能量女王", "莫扎特丶Loney", "学神叼炸天i", "離卟幵伱〃铱籟", "假面孔。", "如果小新没了蜡笔╰", "疼了就再也不碰爱情", "唔咽", "我媳妇她怕黑！ 我老公怕没我！", "拈花把酒", "病τàī式愛情~﹏", "梦七年", "影子不孤单", "＂╰+秋意浓メo", "硕哩哎沃、、、", "安若少年初入梦、", "萌萌的爱", "丶幼稚完了么゛", "|▍想这样″简简单单", "暖心少年", "祖国滴粑粑花°", "我不发光谁发光i", "﹎ゞ没有信任的爱情/╱°", "人鱼烛ヽ", "↘只为在此丶深爱一人♀", "彈壹麯丶偏嗳", "先生、帮我画脸花好不好。", "迷梦-", "空虚沸腾！", "醉者", "梦战苍穹", "我的笑已经陪嫁给了你°", "寻鱼水之欢", "软妹串", "一脸沧桑、", "宣示对你的爱", "醉看风拂袖", "时间风干了我们的悲伤", "入冬已天短夜长", "少假惺惺的、演戏给谁看", "Kimi没我萌", "あ浅浅の嘚僾", "最殇々不过人心", "招尸墓想", "逗逼", "青春真不靠谱", "Little fool 〆", "雷霆★天界", "●．.|`緈箙", "樱花*雪", "只为一句话", "々曦之情殇♂", "灬菰獨菂情書︿", "巴黎的余音", "过去的回忆︶都已成为浮云", "在俄的世界，俄就是神丶", "＂共尒偶yμ", "じ☆浪荡⒈个κù野撩", "猎 影ㄈ组织", "Green Arrow", "﹏酒,畅饮ゝ", "我要的未来未必来°", "┈┾荒年", "用实力征服。", "安静的离开了", "爱我很难", "温柔的(放肆)", "生来不讨喜", "懵智", "九黎", "淡忘 那段情…", "就是这么拽!", "〓 Fetters羁绊", "最后的吻安", "瑾色ら残年", "我是神人！", "做涐鍾噫亽", "灬 流光易断、", "薄荷微凉", "懂即是愛", "眼泪何必固执", "℡伪装丶止不住的心跳", "快跑他要装逼了i", "爱上你的假", "好生俊俏", "我虽学渣却是情霸@", "锁哥", "①点小任性", "寂寞散掉、凋零为止丶", "劳资女王范*", "_°死寂。"];
let userList = [];
nameList.map(item => {
    let obj = {
        name: item,
        points: parseInt(Math.random() * 253)
    }
    userList.push(obj)
})
module.exports = userList;