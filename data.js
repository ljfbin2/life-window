const lifeData = [
  {
    "dimensionId": "health",
    "dimensionName": "身体发育与健康",
    "windows": [
      {
        "name": "免疫系统初始构建",
        "openAge": 0,
        "goldenAgeEnd": 3,
        "countdownEnd": 6,
        "isIrreversible": true,
        "maxIntensity": 90,
        "remedyCost": "无可挽回",
        "desc": "幼年期从母体脱离后构建自身免疫力的最关键期。"
      },
      {
        "name": "大脑基础神经元修剪",
        "openAge": 0,
        "goldenAgeEnd": 6,
        "countdownEnd": 12,
        "isIrreversible": true,
        "maxIntensity": 95,
        "remedyCost": "无可挽回",
        "desc": "大脑用进废退，基础神经突触连接的黄金窗口。"
      },
      {
        "name": "视力发育与保护期",
        "openAge": 3,
        "goldenAgeEnd": 12,
        "countdownEnd": 18,
        "isIrreversible": true,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "眼轴定型前保护期，错过易导致真性近视甚至高度近视。"
      },
      {
        "name": "牙齿正畸黄金期",
        "openAge": 10,
        "goldenAgeEnd": 14,
        "countdownEnd": 25,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "高",
        "desc": "青少年颌骨发育期可塑性强，成年后矫正时间翻倍且易反弹。"
      },
      {
        "name": "身高突破红利期",
        "openAge": 11,
        "goldenAgeEnd": 16,
        "countdownEnd": 20,
        "isIrreversible": true,
        "maxIntensity": 100,
        "remedyCost": "无可挽回",
        "desc": "骨骺线闭合前的冲刺期，营养与骨骼拉伸不可逆。"
      },
      {
        "name": "脊柱形态塑造期",
        "openAge": 6,
        "goldenAgeEnd": 18,
        "countdownEnd": 25,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "预防脊柱侧弯与塑形的关键期，定型后干预极其痛苦。"
      },
      {
        "name": "体质基础打造期",
        "openAge": 12,
        "goldenAgeEnd": 22,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 65,
        "remedyCost": "中",
        "desc": "青春期及大学期间的体能累积，决定一生的体质底色。"
      },
      {
        "name": "熬夜透支极速恢复期",
        "openAge": 16,
        "goldenAgeEnd": 25,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "身体新陈代谢巅峰，能够快速修复疲劳；25岁后断崖式下降。"
      },
      {
        "name": "女性生育最佳窗口",
        "openAge": 24,
        "goldenAgeEnd": 29,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 95,
        "remedyCost": "高",
        "desc": "卵子质量与母体恢复能力的双峰期，35岁后生育风险显著升高。"
      },
      {
        "name": "男性生育优生窗口",
        "openAge": 25,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "精子DNA碎片率随年龄增长而增加，影响下一代健康。"
      },
      {
        "name": "基础代谢旺盛期",
        "openAge": 18,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "不用控制饮食也不易发胖的时期，随后易出现发福。"
      },
      {
        "name": "慢性病早期逆转期",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "脂肪肝、高尿酸等代谢异常初现，及时干预可完全逆转。"
      },
      {
        "name": "心血管弹性维护期",
        "openAge": 25,
        "goldenAgeEnd": 45,
        "countdownEnd": 60,
        "isIrreversible": true,
        "maxIntensity": 90,
        "remedyCost": "无可挽回",
        "desc": "血管由软变硬的过程，早期运动可大幅推迟衰竭年龄。"
      },
      {
        "name": "更年期平稳过渡期",
        "openAge": 45,
        "goldenAgeEnd": 50,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "中",
        "desc": "性激素断崖式下降的适应期，决定晚年精神与骨骼状态。"
      },
      {
        "name": "肌少症预防最后窗口",
        "openAge": 40,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": true,
        "maxIntensity": 95,
        "remedyCost": "无可挽回",
        "desc": "老年肌肉流失前囤积肌肉的最后机会，决定能否长期自理。"
      },
      {
        "name": "骨密度最高峰锁定期",
        "openAge": 20,
        "goldenAgeEnd": 30,
        "countdownEnd": 40,
        "isIrreversible": true,
        "maxIntensity": 90,
        "remedyCost": "无可挽回",
        "desc": "人体骨量在30岁左右达峰，其后主要靠峰值吃老本。"
      },
      {
        "name": "抗衰老干预最佳期",
        "openAge": 30,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "面部筋膜松弛和细胞级衰老的节点，越早通过生活方式干预越好。"
      },
      {
        "name": "器官功能实质性衰退准备期",
        "openAge": 50,
        "goldenAgeEnd": 60,
        "countdownEnd": 70,
        "isIrreversible": true,
        "maxIntensity": 90,
        "remedyCost": "无可挽回",
        "desc": "接受机能下降，从“增强”转向“极力延缓”的认知转折点。"
      },
      {
        "name": "听力高频损失预防期",
        "openAge": 15,
        "goldenAgeEnd": 30,
        "countdownEnd": 45,
        "isIrreversible": true,
        "maxIntensity": 95,
        "remedyCost": "无可挽回",
        "desc": "长时间戴耳机对耳蜗毛细胞的不可逆损伤期。"
      },
      {
        "name": "脱发可控黄金干预窗口",
        "openAge": 22,
        "goldenAgeEnd": 30,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "毛囊尚未完全萎缩坏死前进行干预，晚了只能植发。"
      },
      {
        "name": "癌症早期基因筛查期",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 60,
        "isIrreversible": true,
        "maxIntensity": 100,
        "remedyCost": "无可挽回",
        "desc": "遗传性或器官早衰癌变的早筛期，错过可能直接面对晚期。"
      },
      {
        "name": "深睡眠稳态期",
        "openAge": 18,
        "goldenAgeEnd": 35,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "高",
        "desc": "神经系统分泌褪黑素最旺盛期，之后睡眠逐渐变浅。"
      },
      {
        "name": "绝经后骨折高危期干预",
        "openAge": 50,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "女性绝经后五年内流失极快，通过药物及负重训练干预。"
      },
      {
        "name": "中风等急症前兆识别期",
        "openAge": 45,
        "goldenAgeEnd": 60,
        "countdownEnd": 75,
        "isIrreversible": true,
        "maxIntensity": 95,
        "remedyCost": "无可挽回",
        "desc": "学习急救知识、掌握自己生命最后自救通道的年龄。"
      },
      {
        "name": "带病生存心理建设期",
        "openAge": 55,
        "goldenAgeEnd": 65,
        "countdownEnd": 75,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "接纳各类慢性病伴随的心理转折期。"
      }
    ]
  },
  {
    "dimensionId": "learning",
    "dimensionName": "学习成长",
    "windows": [
      {
        "name": "母语语言习得期",
        "openAge": 0,
        "goldenAgeEnd": 7,
        "countdownEnd": 12,
        "isIrreversible": true,
        "maxIntensity": 100,
        "remedyCost": "无可挽回",
        "desc": "绝对音感和自然习得母语的红利期。"
      },
      {
        "name": "第二外语黄金突击期",
        "openAge": 3,
        "goldenAgeEnd": 15,
        "countdownEnd": 22,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "自然吸收和发音地道化的最后窗口。成年后需要海量刻意练习。"
      },
      {
        "name": "具象思维向抽象转化",
        "openAge": 9,
        "goldenAgeEnd": 12,
        "countdownEnd": 15,
        "isIrreversible": true,
        "maxIntensity": 80,
        "remedyCost": "无可挽回",
        "desc": "理解代数、哲学等抽象事物的认知跳跃期。"
      },
      {
        "name": "集中注意力耐受度建立",
        "openAge": 6,
        "goldenAgeEnd": 12,
        "countdownEnd": 18,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "通过阅读等建立长程注意力的窗口，被短视频毁掉后极难修复。"
      },
      {
        "name": "阅读成瘾习惯塑成",
        "openAge": 5,
        "goldenAgeEnd": 15,
        "countdownEnd": 25,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "建立通过文字获取深层快感的回路。"
      },
      {
        "name": "数理逻辑启蒙与深化",
        "openAge": 8,
        "goldenAgeEnd": 16,
        "countdownEnd": 20,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "塑造理科强脑的阶段，错过会产生永久或长期的数学恐惧。"
      },
      {
        "name": "机械记忆力巅峰期",
        "openAge": 10,
        "goldenAgeEnd": 18,
        "countdownEnd": 25,
        "isIrreversible": true,
        "maxIntensity": 85,
        "remedyCost": "无可挽回",
        "desc": "背诵海量无逻辑知识（外语单词、法条）效率最高的时候。"
      },
      {
        "name": "世界观基础闭环期",
        "openAge": 14,
        "goldenAgeEnd": 22,
        "countdownEnd": 28,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "对社会运行逻辑形成自己第一套自洽理论的时期。"
      },
      {
        "name": "系统性通识教育窗口",
        "openAge": 18,
        "goldenAgeEnd": 24,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 65,
        "remedyCost": "中",
        "desc": "拥有大块完整时间接受多学科系统教育的最后阶段。"
      },
      {
        "name": "第一学历终极跃迁",
        "openAge": 18,
        "goldenAgeEnd": 23,
        "countdownEnd": 26,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "通过高考和首次考研洗白履历的窗口，此后多为在职，认可度打折。"
      },
      {
        "name": "跨界学习最低成本期",
        "openAge": 20,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "沉没成本低，可以轻易放弃原专业转向全新领域。"
      },
      {
        "name": "独立深度思考能力成型",
        "openAge": 22,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "摆脱父母与学校灌输，形成批判性思维的窗口。"
      },
      {
        "name": "知识架构实用化重组期",
        "openAge": 25,
        "goldenAgeEnd": 32,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "将校园知识与商业社会规则融合，形成自己赚取利润的体系。"
      },
      {
        "name": "复杂信息降维解析能力",
        "openAge": 28,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "处理社会极其复杂的人事理信息的顶峰。"
      },
      {
        "name": "海外留学无缝融入期",
        "openAge": 18,
        "goldenAgeEnd": 26,
        "countdownEnd": 32,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "能在异国建立深度人脉和深层文化认同的年龄段。"
      },
      {
        "name": "软技能(演讲/沟通)狂飙期",
        "openAge": 20,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 45,
        "remedyCost": "中",
        "desc": "在错误成本较低的环境下历练表达能力。"
      },
      {
        "name": "理解力与经验黄金交叉",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 0,
        "remedyCost": "低",
        "desc": "阅读经典不再觉得枯燥，能与作者产生深度共鸣的最佳时期。"
      },
      {
        "name": "学习新工具(如AI)敏锐期",
        "openAge": 10,
        "goldenAgeEnd": 30,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 55,
        "remedyCost": "中",
        "desc": "对新技术保持天然好奇和本能接纳，之后易产生路径依赖。"
      },
      {
        "name": "认知框架痛苦重塑期",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "推翻曾经深信不疑但已失效的认知，跨越中产陷阱必经之路。"
      },
      {
        "name": "输出倒逼输入体系建立",
        "openAge": 25,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "从被动学习转向写文章、做视频等主动输出的质变点。"
      },
      {
        "name": "对导师级人物的天然吸引力",
        "openAge": 18,
        "goldenAgeEnd": 25,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "因为年轻、具备可塑性且无利益冲突，最容易获得大佬无私指点。"
      },
      {
        "name": "自我怀疑与重建周期",
        "openAge": 20,
        "goldenAgeEnd": 30,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 30,
        "remedyCost": "低",
        "desc": "心理弹性的扩张期，失败后能迅速自愈。"
      },
      {
        "name": "对宏大叙事脱敏与祛魅",
        "openAge": 25,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "开始关注具体的人和事，是认知成熟的重要标志。"
      },
      {
        "name": "晚年大脑退化抵抗期",
        "openAge": 60,
        "goldenAgeEnd": 70,
        "countdownEnd": 80,
        "isIrreversible": true,
        "maxIntensity": 95,
        "remedyCost": "无可挽回",
        "desc": "通过学习新技能（如乐器、外语）来延缓阿尔茨海默症。"
      },
      {
        "name": "智慧经验总结传承期",
        "openAge": 55,
        "goldenAgeEnd": 65,
        "countdownEnd": 75,
        "isIrreversible": false,
        "maxIntensity": 30,
        "remedyCost": "低",
        "desc": "将一生所学转化为书籍、家训或系统的体系分享给下一代。"
      }
    ]
  },
  {
    "dimensionId": "career",
    "dimensionName": "职业发展",
    "windows": [
      {
        "name": "名企应届生校招绿通道",
        "openAge": 21,
        "goldenAgeEnd": 24,
        "countdownEnd": 26,
        "isIrreversible": true,
        "maxIntensity": 95,
        "remedyCost": "无可挽回",
        "desc": "大厂管培生、国企体制内专属盲签窗口。一旦失去应届身份终生补救无门。"
      },
      {
        "name": "体制内考公考编红线",
        "openAge": 22,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": true,
        "maxIntensity": 100,
        "remedyCost": "无可挽回",
        "desc": "超过35周岁（硕博40岁），公职系统的大门彻底焊死。"
      },
      {
        "name": "基层业务疯狂试错期",
        "openAge": 22,
        "goldenAgeEnd": 26,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "高",
        "desc": "无家庭负担，每天工作14小时不觉得累，迅速积累手感的时期。"
      },
      {
        "name": "职业赛道核心方向锚定",
        "openAge": 25,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "必须在这一时期确定一生深耕的赛道，35岁后再转行犹如登天。"
      },
      {
        "name": "第一桶金原始积累期",
        "openAge": 26,
        "goldenAgeEnd": 32,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "体力和脑力结合最紧密，通过高强度加班或副业存下第一笔大几万。"
      },
      {
        "name": "职场首次向上管理晋升",
        "openAge": 27,
        "goldenAgeEnd": 32,
        "countdownEnd": 36,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "从大头兵到带人小主管的跨越，如果在此时没有成功，后续易被边缘化。"
      },
      {
        "name": "跨城/跨国迁移低成本窗口",
        "openAge": 18,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "单身无娃无房贷，带着行李箱就能去另一个国家的黄金期。"
      },
      {
        "name": "核心圈层与人脉建立期",
        "openAge": 28,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "你有价值了，才能交换到有价值的人脉。是对圈层固化前的最后流动窗口。"
      },
      {
        "name": "高风险创业窗口时间",
        "openAge": 25,
        "goldenAgeEnd": 32,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "失败大不了打工，40岁后带着房贷和孩子创业失败即倾家荡产。"
      },
      {
        "name": "大厂35岁危机分水岭",
        "openAge": 30,
        "goldenAgeEnd": 33,
        "countdownEnd": 35,
        "isIrreversible": true,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "如果不进入高管或掌握不可替代技术，极易被更便宜的应届生淘汰。"
      },
      {
        "name": "第二增长曲线探索期",
        "openAge": 32,
        "goldenAgeEnd": 38,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "主业到达天花板前，利用业余时间测试副业和第二职业的时期。"
      },
      {
        "name": "职业壁垒彻底成型期",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "你的名字等同于某个领域的权威，拥有议价权。"
      },
      {
        "name": "女性职场生育中断危机",
        "openAge": 26,
        "goldenAgeEnd": 32,
        "countdownEnd": 38,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "生育极大可能中断连贯的晋升通道，是很多优秀女性的职场重创。"
      },
      {
        "name": "被动收入超越主动收入拐点",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "理财和资产性收入超过打工收入，实现初步财富自由的关键。"
      },
      {
        "name": "资源整合与操盘手跃迁",
        "openAge": 38,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "从“做事的人”变成“分钱和组局的人”。"
      },
      {
        "name": "职场关系断舍离窗口",
        "openAge": 40,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 30,
        "remedyCost": "低",
        "desc": "不再需要讨好所有人，可以果断拒绝无用社交的从容期。"
      },
      {
        "name": "降维打击变现窗口",
        "openAge": 45,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "利用半生经验，去二三线市场或更小的平台进行经验变现。"
      },
      {
        "name": "提前退休财务达标期",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "决定后半生是含饴弄孙还是继续被迫打工的定案窗口。"
      },
      {
        "name": "终身顾问角色转型",
        "openAge": 55,
        "goldenAgeEnd": 60,
        "countdownEnd": 65,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "退出一线肉搏，靠脑力、关系网拿分红的高级形态。"
      },
      {
        "name": "副业转正的最后红利",
        "openAge": 35,
        "goldenAgeEnd": 40,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "高",
        "desc": "如果不满主业，此时是被迫离职强行转副业的极度阵痛期。"
      },
      {
        "name": "专业执业资格考取(硬门槛)",
        "openAge": 22,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "法考、CPA、绝大多数高难度证件，35岁后记忆力极难支撑考过。"
      },
      {
        "name": "从追求上限转为夯实下限",
        "openAge": 40,
        "goldenAgeEnd": 45,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "防守策略优于进攻策略，不再追求翻倍而追求稳健保本。"
      },
      {
        "name": "对新商业模式的体感保持",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "如果不刻意训练，这一时期极易成为时代弃儿，看不懂新生意。"
      },
      {
        "name": "接纳自身平庸的重组期",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "大部分人会认清自己一生只是个普通人的窗口。"
      },
      {
        "name": "体力型劳动者的彻底退役",
        "openAge": 45,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": true,
        "maxIntensity": 95,
        "remedyCost": "无可挽回",
        "desc": "凭借身体赚钱的工种，机能下降意味着直接断绝收入。"
      }
    ]
  },
  {
    "dimensionId": "life",
    "dimensionName": "生活选择",
    "windows": [
      {
        "name": "深度体验世界的空白期",
        "openAge": 18,
        "goldenAgeEnd": 24,
        "countdownEnd": 28,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "背包穷游、睡大街也不觉得惨的纯粹浪漫主义窗口。"
      },
      {
        "name": "同龄人朋友圈洗牌期",
        "openAge": 22,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "从按照“兴趣”交友过渡到按“阶层和利益”交友的极速收敛期。"
      },
      {
        "name": "定居城市终局选择",
        "openAge": 25,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "户口、社保、买房一旦落地，连根拔起的成本将呈几何倍增。"
      },
      {
        "name": "核心兴趣爱好长效锁定",
        "openAge": 20,
        "goldenAgeEnd": 30,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "钓鱼、滑雪、阅读等能陪伴一生的长效多巴胺获取方式。"
      },
      {
        "name": "独立居住抗孤独训练",
        "openAge": 22,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "学会一个人面对深宵，不依赖他人的独立心理构建。"
      },
      {
        "name": "原生家庭羁绊切割期",
        "openAge": 20,
        "goldenAgeEnd": 25,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "在经济和心理上杀死对父母的依赖，完成真正的成人礼。"
      },
      {
        "name": "第一套房产上车红利",
        "openAge": 25,
        "goldenAgeEnd": 32,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "杠杆和首套房名额的使用，极大影响后续20年的抗风险能力。"
      },
      {
        "name": "理想主义向现实主义妥协",
        "openAge": 25,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "被社会毒打后，放弃“改变世界”转为“养家糊口”的关键转变。"
      },
      {
        "name": "生活品质断层性提升窗口",
        "openAge": 28,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "从吃大排档升级到追求极简高级感、注重食材本身健康。"
      },
      {
        "name": "婚内生活模式定型期",
        "openAge": 26,
        "goldenAgeEnd": 35,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "与伴侣的相处模式在头几年固定后，几十年极难改变。"
      },
      {
        "name": "生活圈子从扩大转为收缩",
        "openAge": 35,
        "goldenAgeEnd": 40,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "不再逢场作戏，只和最核心的三五个知己往来。"
      },
      {
        "name": "极端运动/探险最后尝试期",
        "openAge": 25,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": true,
        "maxIntensity": 90,
        "remedyCost": "无可挽回",
        "desc": "跳伞、深潜等不仅需要体力更需要勇气的活动。"
      },
      {
        "name": "二手经验转为一手感悟",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "从纸上谈兵到“确实是这么回事”的切肤之痛期。"
      },
      {
        "name": "对名牌外在的脱敏期",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 30,
        "remedyCost": "低",
        "desc": "不再需要用奢侈品武装自己，转为追求舒适的纯棉衣物。"
      },
      {
        "name": "数字资产遗嘱建立窗口",
        "openAge": 50,
        "goldenAgeEnd": 60,
        "countdownEnd": 70,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "虚拟货币、重要账号、云端照片的继承安排规划。"
      },
      {
        "name": "返璞归真田园梦实施期",
        "openAge": 45,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "厌恶城市喧嚣，真正有资本和心态回乡隐居的时期。"
      },
      {
        "name": "个人传记/人生走马灯回忆",
        "openAge": 60,
        "goldenAgeEnd": 70,
        "countdownEnd": 80,
        "isIrreversible": false,
        "maxIntensity": 30,
        "remedyCost": "低",
        "desc": "开始频繁回忆过去，寻求人生的最终意义与自我和解。"
      },
      {
        "name": "对生死话题的平视期",
        "openAge": 50,
        "goldenAgeEnd": 60,
        "countdownEnd": 70,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "伴随身边同龄人的离去，不再恐惧而是坦然面对谢幕。"
      },
      {
        "name": "建立极简主义生活方式",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 45,
        "remedyCost": "中",
        "desc": "意识到物品占用精力，大规模丢弃执念的窗口。"
      },
      {
        "name": "自我原谅窗口期",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "原谅年轻时犯下的愚蠢错误，不再自我设限和内耗。"
      },
      {
        "name": "重度游戏/动漫退坑点",
        "openAge": 25,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "由于精力跟不上、现实压力大，突然对虚拟快感丧失兴趣。"
      },
      {
        "name": "接纳孤独成为常态",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "人类的悲欢并不相通，最终享受一个人的绝对宁静。"
      },
      {
        "name": "寻找信仰与超自然寄托",
        "openAge": 45,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "人力穷尽处，更容易转向哲学或宗教学寻求慰藉。"
      },
      {
        "name": "安排自己的最终归宿",
        "openAge": 65,
        "goldenAgeEnd": 75,
        "countdownEnd": 85,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "高",
        "desc": "医疗决定代签、墓地选择、是否有尊严离去的终极抉择。"
      },
      {
        "name": "将宠物视为唯一灵魂伴侣",
        "openAge": 35,
        "goldenAgeEnd": 55,
        "countdownEnd": 75,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "尤其是独居者，宠物提供情绪价值的地位可能超过亲人。"
      }
    ]
  },
  {
    "dimensionId": "mind",
    "dimensionName": "身心状态",
    "windows": [
      {
        "name": "抗压心智弹力培养期",
        "openAge": 15,
        "goldenAgeEnd": 22,
        "countdownEnd": 28,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "形成乐观与坚韧底色的时期，抑郁倾向往往在此期埋下伏笔。"
      },
      {
        "name": "情绪表达与控制习得",
        "openAge": 12,
        "goldenAgeEnd": 18,
        "countdownEnd": 25,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "学会不乱发脾气，也不过度压抑，形成成年人的体面。"
      },
      {
        "name": "无条件快乐丧失拐点",
        "openAge": 22,
        "goldenAgeEnd": 26,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 90,
        "remedyCost": "无可挽回",
        "desc": "再也无法像小时候那样因为一颗糖或放假傻乐了。"
      },
      {
        "name": "重度内耗峰值期",
        "openAge": 25,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "理想与现实撕裂最大，自我逼迫最严重的痛苦期。"
      },
      {
        "name": "“去中心化”自我认知开悟",
        "openAge": 30,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "突然明白自己根本不是世界中心，别人根本不在乎你。"
      },
      {
        "name": "中年危机情绪坍塌高发",
        "openAge": 38,
        "goldenAgeEnd": 45,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "房贷、父母病重、工作瓶颈三座大山压顶的极度危险期。"
      },
      {
        "name": "荷尔蒙决定论减弱",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 65,
        "remedyCost": "中",
        "desc": "终于不再被性欲和繁殖本能支配大脑，达到四十不惑的生理基础。"
      },
      {
        "name": "松弛感彻底降临期",
        "openAge": 45,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "破罐子破摔后反而产生的绝佳从容态。"
      },
      {
        "name": "对抗焦虑的个人哲学建立",
        "openAge": 28,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "有人靠运动，有人靠看透，必须在这个时期建立防线。"
      },
      {
        "name": "深度抑郁干预黄金期",
        "openAge": 18,
        "goldenAgeEnd": 28,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "长期的低落一旦固化为神经递质的病变，后半生极难调理。"
      },
      {
        "name": "外貌焦虑和解点",
        "openAge": 30,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "眼角出现细纹，不再无谓对抗衰老，接受自然法则。"
      },
      {
        "name": "多巴胺转内啡肽驱动圈",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "从追求短平快的刺激，转向需要痛苦延迟满足的长效快乐。"
      },
      {
        "name": "心智原动力枯竭前兆",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "觉得什么都“不过如此”，丧失进取心和好奇心的危险信号。"
      },
      {
        "name": "对死亡的恐惧高峰",
        "openAge": 38,
        "goldenAgeEnd": 48,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "身体机能衰退初现，父母开始老去，真切感受到终点的逼近。"
      },
      {
        "name": "情绪价值自给自足期",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "彻底放弃从伴侣、外界索取情绪安抚，自我圆满。"
      },
      {
        "name": "顿感力大成期",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "面对批评、嘲讽能够一笑了之，不再敏感内耗。"
      },
      {
        "name": "中年叛逆释放期",
        "openAge": 45,
        "goldenAgeEnd": 50,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "前半生听话懂事，突然追寻真实自我的狂暴期。"
      },
      {
        "name": "长期压力下植物神经紊乱高发",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "心悸、莫名出汗、失眠濒死感爆雷期。"
      },
      {
        "name": "重新找回对童心事物热爱的",
        "openAge": 55,
        "goldenAgeEnd": 65,
        "countdownEnd": 75,
        "isIrreversible": false,
        "maxIntensity": 30,
        "remedyCost": "低",
        "desc": "隔代亲，或者重新喜欢各种幼稚玩具的老顽童时期。"
      },
      {
        "name": "大脑灰质变薄注意力涣散",
        "openAge": 50,
        "goldenAgeEnd": 60,
        "countdownEnd": 70,
        "isIrreversible": true,
        "maxIntensity": 85,
        "remedyCost": "无可挽回",
        "desc": "看长文容易走神，这是生理性的退化。"
      },
      {
        "name": "睡眠结构断崖破裂期",
        "openAge": 45,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "起夜增多，凌晨4点醒来后再也睡不着的常态化。"
      },
      {
        "name": "同理心与慈悲心爆发期",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "看透世态炎凉后，对弱者产生的非功利性的悲悯。"
      },
      {
        "name": "心流状态门槛变高",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "很难再进入那种废寝忘食全身心投入一件事的忘我境界。"
      },
      {
        "name": "承认能力有限的释怀点",
        "openAge": 40,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 45,
        "remedyCost": "中",
        "desc": "放弃无意义的卷，只做自己真正能做好的事。"
      },
      {
        "name": "终极豁达与宁静体验",
        "openAge": 60,
        "goldenAgeEnd": 70,
        "countdownEnd": 80,
        "isIrreversible": false,
        "maxIntensity": 20,
        "remedyCost": "低",
        "desc": "回首向来萧瑟处，也无风雨也无晴的最终心境。"
      }
    ]
  },
  {
    "dimensionId": "finance",
    "dimensionName": "财务规划",
    "windows": [
      {
        "name": "财商底层逻辑启蒙",
        "openAge": 12,
        "goldenAgeEnd": 18,
        "countdownEnd": 24,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "明白复利、负债、资产等概念的区别，穷富思维的分水岭。"
      },
      {
        "name": "无节制消费陷阱高发期",
        "openAge": 18,
        "goldenAgeEnd": 25,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "网贷、消费主义洗脑，背绝望负债的最高危年龄段。"
      },
      {
        "name": "信用额度暴力积累期",
        "openAge": 22,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "中",
        "desc": "信用卡、公积金、房贷额度堆积，这笔隐含钱能用来救命。"
      },
      {
        "name": "抗风险备用金强制存底",
        "openAge": 25,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "必须存够6-12个月生活费的救命钱。"
      },
      {
        "name": "个人破产可修复底线",
        "openAge": 22,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": true,
        "maxIntensity": 95,
        "remedyCost": "无可挽回",
        "desc": "35岁前破产还能打工翻身，45岁后破产基本告别主流社会。"
      },
      {
        "name": "重疾险配置最低成本期",
        "openAge": 22,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "身体健康时买最便宜，40岁后不但贵且大概率被拒保。"
      },
      {
        "name": "被动收入池搭建起步",
        "openAge": 25,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "定投指数基金、收租、版权费等管道收入的漫长积累起点。"
      },
      {
        "name": "结婚彩礼/婚房极大压榨期",
        "openAge": 25,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 90,
        "remedyCost": "无可挽回",
        "desc": "两代家人财富的极致转移，往往掏空多个钱包。"
      },
      {
        "name": "养老金顶层设计规划",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "算出未来50年通胀，提前准备数百万养老底仓。"
      },
      {
        "name": "子女教育资金洪峰",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "学区房、补习班、出国留学的大额刚性兑付窗口。"
      },
      {
        "name": "加杠杆借债绝对红线期",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 50,
        "isIrreversible": true,
        "maxIntensity": 100,
        "remedyCost": "无可挽回",
        "desc": "四十不惑的首要原则：绝对不要用高杠杆试图翻盘！"
      },
      {
        "name": "资产防守保底策略配置期",
        "openAge": 45,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "将高收益高风险转为大额存单、国债等无风险底座。"
      },
      {
        "name": "财富代际安全传承窗口",
        "openAge": 55,
        "goldenAgeEnd": 65,
        "countdownEnd": 75,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "家族信托、保险金信托、赠与，隔离生前风险。"
      },
      {
        "name": "大额医疗无底洞危机期",
        "openAge": 55,
        "goldenAgeEnd": 65,
        "countdownEnd": 80,
        "isIrreversible": false,
        "maxIntensity": 95,
        "remedyCost": "无可挽回",
        "desc": "ICU一天一万，没有保险或充足底仓，中产瞬间返贫。"
      },
      {
        "name": "消费降频但升质转换点",
        "openAge": 30,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "不买一堆破烂，只买一件耐用极品的好物。"
      },
      {
        "name": "通货膨胀残酪收割感知期",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "真切发现存在银行的十万块购买力大幅缩水的刺痛。"
      },
      {
        "name": "家庭财务大权交接期",
        "openAge": 60,
        "goldenAgeEnd": 70,
        "countdownEnd": 80,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "父母渐老防诈骗能力减弱，子女开始介入上一代储蓄管理。"
      },
      {
        "name": "意外险必配防线",
        "openAge": 18,
        "goldenAgeEnd": 30,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "中",
        "desc": "尤其对家庭顶梁柱，防范猝死、车祸致家破人亡的绝对底线。"
      },
      {
        "name": "副业收入超越利息里程碑",
        "openAge": 28,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "标志着你有了除了出卖时间和资本增值外的第三引擎。"
      },
      {
        "name": "认识到“不亏就是赚”周期",
        "openAge": 35,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "中",
        "desc": "经历牛熊市毒打，认清复利的首要前提是不发生大回撤。"
      },
      {
        "name": "花钱买时间的效率拐点",
        "openAge": 30,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "自己的时薪变高，懂得请保洁、打车来节约精力的转折点。"
      },
      {
        "name": "从追求拥有转为追求体验权",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 45,
        "remedyCost": "中",
        "desc": "不买豪车改租车，不买别墅改住酒店的轻资产觉悟。"
      },
      {
        "name": "税务筹划黄金期",
        "openAge": 50,
        "goldenAgeEnd": 60,
        "countdownEnd": 70,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "在高净值人群中避开未来的高昂暗税。"
      },
      {
        "name": "对金钱概念彻底脱敏期",
        "openAge": 70,
        "goldenAgeEnd": 80,
        "countdownEnd": 90,
        "isIrreversible": false,
        "maxIntensity": 30,
        "remedyCost": "低",
        "desc": "钱不过是买药的数字，吃不下花不动也带不走。"
      },
      {
        "name": "退休后无缝衔接现金流建立",
        "openAge": 45,
        "goldenAgeEnd": 55,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "确保60岁停下工作的那一刻，每个月依然有足够的活钱进来。"
      }
    ]
  },
  {
    "dimensionId": "ability",
    "dimensionName": "能力积累",
    "windows": [
      {
        "name": "时间管理系统构建期",
        "openAge": 18,
        "goldenAgeEnd": 25,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "学会规划一天24小时，终结严重拖延症的窗口。"
      },
      {
        "name": "核心技术栈一万小时成型",
        "openAge": 22,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "在某个细分领域成为专家的必经沉淀，35岁后难有这种长周期。"
      },
      {
        "name": "高强度抗干扰专注力窗口",
        "openAge": 15,
        "goldenAgeEnd": 25,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "能在吵闹环境中迅速进入深度思考的能力，年纪大了极易切断心流。"
      },
      {
        "name": "信息搜集与溯源辨伪能力",
        "openAge": 18,
        "goldenAgeEnd": 25,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "中",
        "desc": "在错综复杂信息中寻找真理，不被洗脑的基础核心能力。"
      },
      {
        "name": "说服术与谈判能力顿悟",
        "openAge": 25,
        "goldenAgeEnd": 32,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 65,
        "remedyCost": "高",
        "desc": "理解人性趋利避害，能够把自己的目标包装成他人的利益。"
      },
      {
        "name": "底层商业逻辑体感塑造",
        "openAge": 22,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "看到一个路边摊就能推算出其毛利和选址逻辑的商业直觉。"
      },
      {
        "name": "英语/AI作为基础生产力固化",
        "openAge": 20,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "不再把它们当成学科，而是吃饭喝水一样习惯性使用的工具。"
      },
      {
        "name": "逆境极速复盘能力",
        "openAge": 25,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "失败后不内耗，而是无情剖析错误并迭代的能力。"
      },
      {
        "name": "公文/逻辑性写作能力",
        "openAge": 22,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 65,
        "remedyCost": "中",
        "desc": "能用极简语言一句话把复杂问题说清楚，高级管理者的必需。"
      },
      {
        "name": "资源置换与撮合能力",
        "openAge": 30,
        "goldenAgeEnd": 38,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "在没有自身资本的情况下，借力打力的能力。"
      },
      {
        "name": "面对权威的不卑不亢感",
        "openAge": 25,
        "goldenAgeEnd": 30,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "摘下心理滤镜，把权威当成有弱点的普通人来平视对抗。"
      },
      {
        "name": "跨学科融会贯通节点交叉",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "把不同学科原理运用在一起，产生降维打击的能力。"
      },
      {
        "name": "识人与看透人性的X光眼",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "几顿饭就能摸底一个人的本质，过滤掉职场吸血鬼。"
      },
      {
        "name": "体脑结合的高效输出上限",
        "openAge": 30,
        "goldenAgeEnd": 35,
        "countdownEnd": 40,
        "isIrreversible": true,
        "maxIntensity": 85,
        "remedyCost": "无可挽回",
        "desc": "连续通宵写方案还能保持高质量的体能绝唱。"
      },
      {
        "name": "舍弃细枝末节的抓大放小力",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "领导力核心：容忍犯小错，只把控生死存亡的战略。"
      },
      {
        "name": "构建闭环系统的能力",
        "openAge": 28,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "一个人就是一支团队，能完成从获客到交付全流程。"
      },
      {
        "name": "自我推销与打造个人IP期",
        "openAge": 25,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 65,
        "remedyCost": "高",
        "desc": "在超级个体时代，把自己变成一家公司的盈利中心能力。"
      },
      {
        "name": "应对黑天鹅的决策力",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "灾难、裁员降临时，手不抖心不慌的铁血判断力。"
      },
      {
        "name": "精力管理大于时间管理感悟",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "中",
        "desc": "认清人类每天高光时刻有限，好钢用在刀刃上。"
      },
      {
        "name": "极简有效的人情世故库",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "这层社会运行的底层窗户纸捅破的时间窗。"
      },
      {
        "name": "对抗同质化内卷的差异力",
        "openAge": 28,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "懂得转换赛道降维打击，而不是在一个坑里死卷。"
      },
      {
        "name": "合法合规的避坑防御力",
        "openAge": 25,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "熟悉劳动法、合同法，不被坑签保密竞业或背锅。"
      },
      {
        "name": "美学鉴赏与品味红利",
        "openAge": 15,
        "goldenAgeEnd": 25,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "设计感能带来溢价，网感和审美品味需要年轻浸泡。"
      },
      {
        "name": "钝刀子割肉的止损魄力",
        "openAge": 30,
        "goldenAgeEnd": 40,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "面对错误的婚姻、错的项目，能挥剑斩情丝壮士断腕。"
      },
      {
        "name": "从学会加法到领悟减法",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "能力越强，做的事情越少越精的最终形态。"
      }
    ]
  },
  {
    "dimensionId": "family",
    "dimensionName": "家庭关系",
    "windows": [
      {
        "name": "核心价值观与父母对齐期",
        "openAge": 18,
        "goldenAgeEnd": 24,
        "countdownEnd": 30,
        "isIrreversible": false,
        "maxIntensity": 75,
        "remedyCost": "高",
        "desc": "决定与原生家庭是互相成就，还是相爱相杀一辈子的定局点。"
      },
      {
        "name": "婚恋高匹配度寻觅窗口",
        "openAge": 20,
        "goldenAgeEnd": 28,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "择偶池最大、状态最兼容的阶段，错过极易陷入大龄相亲泥潭。"
      },
      {
        "name": "高龄单身固化适应期",
        "openAge": 35,
        "goldenAgeEnd": 40,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "超过此年龄未婚，大概率形成单身极度舒适圈，极难再容纳他人。"
      },
      {
        "name": "最佳优生优育伴侣试假期",
        "openAge": 24,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "通过旅行同居看清对方是否是合适的共同抚育战友。"
      },
      {
        "name": "产后夫妻情感危机高发期",
        "openAge": 26,
        "goldenAgeEnd": 32,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 85,
        "remedyCost": "高",
        "desc": "因带娃劳累、婆媳矛盾集中爆发的离婚第一高危期。"
      },
      {
        "name": "建立核心家庭护城河",
        "openAge": 28,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "如果没有建立共同利益结界，极易被外界诱惑击穿。"
      },
      {
        "name": "陪伴子女童年不可复制期",
        "openAge": 30,
        "goldenAgeEnd": 38,
        "countdownEnd": 45,
        "isIrreversible": true,
        "maxIntensity": 100,
        "remedyCost": "无可挽回",
        "desc": "0-6岁父母是他的神，错过这一期，他骨子里就不会深层依恋你。"
      },
      {
        "name": "子女青春期对抗与引导期",
        "openAge": 40,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "必须从居高临下的掌控者转变为平视的顾问。"
      },
      {
        "name": "子女离巢空巢危机适应",
        "openAge": 45,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "中",
        "desc": "孩子上大学离家，夫妻重新四目相对的阵痛期。"
      },
      {
        "name": "父母机能断崖式健康危机",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 95,
        "remedyCost": "无可挽回",
        "desc": "父母身体突然崩溃的时期，真正理解什么是“生离死别”在逼近。"
      },
      {
        "name": "中年核心顶梁柱形态成型",
        "openAge": 38,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "上有老病倒，下有学步小，对成年人抗压能力的终极地狱测试。"
      },
      {
        "name": "尽孝长线陪伴窗口关闭期",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": true,
        "maxIntensity": 100,
        "remedyCost": "无可挽回",
        "desc": "趁父母还能走动带他们旅行，等他们坐轮椅时你只有绝望。"
      },
      {
        "name": "七年之痒变亲人之痒",
        "openAge": 35,
        "goldenAgeEnd": 42,
        "countdownEnd": 50,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "爱情荷尔蒙消退，考验利益深度绑定与责任的窗口。"
      },
      {
        "name": "离异重组寻觅良机期",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 65,
        "remedyCost": "高",
        "desc": "重组融合的最佳包容期，晚了多半是互相防备搭伙过日子。"
      },
      {
        "name": "原生家庭财务无底洞止损",
        "openAge": 25,
        "goldenAgeEnd": 35,
        "countdownEnd": 45,
        "isIrreversible": false,
        "maxIntensity": 90,
        "remedyCost": "无可挽回",
        "desc": "面对拖垮家庭的恶习亲戚，必须强行切割的续命期。"
      },
      {
        "name": "家庭重大事件容错巅峰",
        "openAge": 25,
        "goldenAgeEnd": 30,
        "countdownEnd": 35,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "此时离婚或大破产，年轻的身板还能硬扛着再爬起来一次。"
      },
      {
        "name": "丧偶式育儿觉醒崩盘期",
        "openAge": 30,
        "goldenAgeEnd": 35,
        "countdownEnd": 40,
        "isIrreversible": false,
        "maxIntensity": 80,
        "remedyCost": "高",
        "desc": "一方完全不参与育儿导致的积怨，会引发毁灭性摊牌。"
      },
      {
        "name": "和解：接纳伴侣的绝对缺点",
        "openAge": 35,
        "goldenAgeEnd": 45,
        "countdownEnd": 55,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "不再试图改变对方，达成凑合过还能忍的平衡哲学。"
      },
      {
        "name": "长辈角色认知接纳期",
        "openAge": 50,
        "goldenAgeEnd": 60,
        "countdownEnd": 70,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "中",
        "desc": "承认自己已经成为家族中的“老一辈”。"
      },
      {
        "name": "带孙辈填补空虚的蜜月期",
        "openAge": 55,
        "goldenAgeEnd": 65,
        "countdownEnd": 70,
        "isIrreversible": false,
        "maxIntensity": 50,
        "remedyCost": "中",
        "desc": "不用承担主责，带孙辈比带自己儿女更容易产生纯粹快乐。"
      },
      {
        "name": "家族老一辈集体凋零期",
        "openAge": 45,
        "goldenAgeEnd": 55,
        "countdownEnd": 65,
        "isIrreversible": true,
        "maxIntensity": 100,
        "remedyCost": "无可挽回",
        "desc": "上一代的大树倒下，你成为了直面死亡第一排的人。"
      },
      {
        "name": "低效亲戚关系的断舍离",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 40,
        "remedyCost": "中",
        "desc": "不再进行无效走动，缩减至只维系核心直系亲属。"
      },
      {
        "name": "遗产分配及财产争持高发期",
        "openAge": 50,
        "goldenAgeEnd": 60,
        "countdownEnd": 70,
        "isIrreversible": false,
        "maxIntensity": 90,
        "remedyCost": "无可挽回",
        "desc": "多子女家庭由于老人离去，因财产反目成仇的高发。"
      },
      {
        "name": "坦然接受没有后代理念",
        "openAge": 40,
        "goldenAgeEnd": 50,
        "countdownEnd": 60,
        "isIrreversible": false,
        "maxIntensity": 70,
        "remedyCost": "高",
        "desc": "丁克人群对孤老终生做好终极心理和财务建设。"
      },
      {
        "name": "老伴相依为命的依靠期",
        "openAge": 70,
        "goldenAgeEnd": 80,
        "countdownEnd": 90,
        "isIrreversible": false,
        "maxIntensity": 60,
        "remedyCost": "高",
        "desc": "朋友多已逝去，唯一能说上话的只有身边这个人。"
      }
    ]
  }
];
