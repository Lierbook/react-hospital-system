var express = require('express');
var router = express.Router();

//用户信息暂存数组
var userLogined = {
    userName: "未登录",
    userIcon: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3500492910,245029864&fm=26&gp=0.jpg",
    userNumber: "",
    booking: [],
};


//当前在线用户信息
router.get("/userdata", function (req, res) {
    res.json(
        userLogined
    );
});

//订单录入接口
router.post("/form", function (req, res) {
    // console.log(req.body);
    const { keshi, date, time, type, doctor } = req.body;
    if (keshi && date && time && type && doctor) {
        let userNow = user.filter((item) => {
            return item.userName === userLogined.userName
        })
        userNow[0].booking.splice(-1, 0, req.body)
        console.log(userNow[0].booking);
        res.json("提交成功");
    }
    else {
        res.json("提交失败");
    }
})


router.get("/orderform", function (req, res) {
    let userNow = user.filter((item) => {
        return item.userName === userLogined.userName
    })
    console.log(userNow[0].booking);
    res.json(userNow[0].booking);
})






//科室介绍接口
router.get('/keshi', function (req, res) {
    console.log(req.session.user)
    res.json({
        title: "科室介绍",
        tabs: [
            { title: '内科' },
            { title: '外科' },
            { title: '妇产科' },
            { title: '儿科' },
            { title: '中医科' },
            { title: '感染科' },
            { title: '老年病科' },
            { title: '眼科' },
            { title: '耳鼻喉科' },
            { title: '神经内科' },
            { title: '肿瘤中心' },
        ],
        introduce: [
            "1980年，我院建立了内科消化专业组，床位数30张，组长李宇权教授，医生10人。1981年，我科成为中国医科大学第一批博士学位授予学科，李宇权教授被聘为博士生导师。同年消化内科实验室成立。1994年消化内科正式成立，床位数45张，主任孙素云教授，副主任李岩教授，医生15人。1998年李岩教授接任消化内科主任。2007年成立滑翔院区消化病房，设定床位数20张，消化科总床位数增至60张，医生数为17人。2008年滑翔院区成立第二消化内科病房。消化内科在历任主任及副主任的带领下，不断的发展壮大，截至2013年，消化内科南湖院区床位数增至65张，滑翔院区床位数增至100张，目前病房共开放床位数165张。年门诊量达8万余人次，年出院患者3000余人次，住院患者中危重病例比例达30%以上。2008年消化内科被评为辽宁省重点学科，同时为国家临床药理基地、住院医师规范化培训基地、中华医学会及中国医师协会胃肠动力研究中心暨培训基地。第一消化内科病房：位于盛京医院南湖院区，主任李岩教授，副主任王孟春教授及田丰教授。现有医生17人，护士30人。其中博士研究生导师1人，硕士研究生导师2人，博士10人，硕士7人，主任医师3人，副主任医师4人，主治医师6人，住院医师4人。",
            "中国医科大学附属盛京医院心脏外科成立于1981年，目前心脏外科是一个技术力量雄厚，经验丰富，设备先进的科室，大规模的开展了成人冠脉搭桥手术、瓣膜置换及修复手术、大血管手术以及小儿先心病的手术治疗，特别是近年来开展的低体重先心病婴幼儿的外科治疗，使得1月龄以上的极低体重先心病婴幼儿均能得到及时的手术治疗，取得了极好的救治效果。我科近年来同时开展了微创心脏外科手术，采用胸骨下段小切口及右腋下小切口，对患者损伤小。心外科共有医生9人，其中5人为博士，学科带头人为李东玉主任。医生中正教授2名，副教授3名，讲师3名，住院医1名，护士12人，护师4名。现我科的婴幼儿心脏外科和冠心病及瓣膜外科治疗水平居国内前列。科室长期开展的先天性心脏病包括：动脉导管未闭、房间隔缺损、室间隔缺损、法乐氏四联症、右室双出口、心内膜垫缺损、肺静脉异位引流。后天性心脏病包括：冠心病、瓣膜病、马凡综合征、胸主动脉瘤等，均获得了良好的救治效果，深受患者及家属的欢迎。",
            "病房现有教授2人，副教授1人，讲师5人，其中，博士生导师2名，硕士生导师1名。病房主任杜鹃教授（博士生导师），副主任李辉教授（博士生导师）、夏亚军副教授（硕士生导师），病房全体医护人员坚持“以人为本，以患者为中心”的服务理念，以精湛的医术和高质量的服务赢得广大患者的好评及信任。多年来，病房在对妊娠合并症和并发症的诊治，特别是对复杂的妊娠合并症和并发症的诊治，对高危孕产妇、孕产期急重症的监护和管理、对胎儿先天畸形的产前诊断方面形成系统化、规范化模式。病房通过强化孕妇的营养与体重干预对妊娠期糖尿病、妊娠期高血压疾病的防治、先兆流产和先兆早产的防治卓有成效。在给患者提供优质服务的同时，第一产科病房更注重学科的建设和发展。病房在孕期营养的综合管理、先天畸形的产前诊断、妊娠期高血压疾病的系统治疗及遗传疾病的诊断处理等领域都取得一定的研究成果，承担国家级和部省级科研课题十余项，获得辽宁省级科技进步二等奖三项，三等奖多项，在国内外权威杂志发表科研论文百余篇，培养博士研究生和硕士研究生几十名。第一产科病房科掌握国际先进的科研动态，勇于探索，不断创新，其临床和科研学术地位在全国处于先进水平。“健康所系、性命相托”，第一产科病房全体医护人员将继续竭诚为广大孕产妇服务。产科急重症的抢救与治疗：妊娠期高血压疾病的防治、重度子痫前期的监护与抢救、妊娠期糖尿病和甲状腺疾病的防治、妊娠期急性脂肪肝、妊娠期急性胰腺炎、产科大出血和休克、胎盘早剥、前置胎盘和多器官功能衰竭等方面具有丰富的抢救和管理经验；对先兆流产和先兆早产、宫颈松弛症、习惯性流产具有丰富的治疗管理经验。",
            "中国医科大学附属盛京医院儿科PICU成立于1982年，是我国首批建立的儿科急救中心之一，2009年获得小儿急诊急救专业博士学位授权点，2010年成为卫生部首批国家级临床重点专科。小儿急诊急救专业急诊量600-800人/日，重症监护病房现拥有床位35张，每年收治危重患儿1000余人。能开展包括机械通气、呼吸末 CO2监测、血液净化、床旁纤维支气管镜、床旁超声心动图、床旁脑电监测、PiCCO等各种有创无创检查在内的多种危重病急救监护技术，其中小儿连续动静脉血液滤过治疗急性肾功能衰竭及多脏器衰竭为全国儿科较早开展。此外还开展了高频机械通气、无创机械通气、NO吸入等新的人工通气技术。小儿重症肺炎的诊治被卫生部评为十年百项推广项目在全国推广。在突发公共卫生事件中发挥重要作用，多次受卫生部委派派出医疗专家组指导手足口病的救治工作，近年来收治的危重手足口病患儿抢救成功率较高。2009年创造了抢救小儿甲流危重症患儿又一个“零”死亡的记录。",
            "中国医科大学附属盛京医院中医科是一个集医疗、教学、科研为一体的综合性科室。2005年获硕士学位授权点。现有医生14人，其中教授3人、副教授3人。设有中西医结合门诊，进行中医中药和针灸、电磁疗、按摩等治疗。同时有中西医结合病房，床位30余张。采用中西医结合手段，进行特色医疗。中西医结合病房采用中药内服外用、药物熏蒸及西药内服等疗法，治疗周围血管疾病为本科的医疗特色之一，10余年来已治疗深静脉血栓形成、血栓性静脉炎、动脉硬化闭塞症、脉管炎、大动脉炎、雷诺氏综合征等千余例，有独特疗效。中医科还承担中国医科大学的普通本科、七年制、英语班、成人教育等多层次多轨道的教学实习任务，开展多项科研课题研究工作。全科医护全心全意为广大患者服务，多次获得医疗先进科室、精神文明优秀科室、先进党支部等荣誉称号。",
            "第一感染性疾病、肝病病房以各种肝病、其他病毒与细菌等感染性疾病、寄生虫病为主要诊疗项目，尤其在暴发性肝功能衰竭与各种原因所致终末期肝病的救治、慢性乙丙型肝炎抗病毒治疗以及耐药与不良反应的处理、各种发热性疾病等疑难重症的诊治等方面具有独到之处。曾多次参加重大突发公共卫生事件的医疗工作，如传染性非典型肺炎、手足口病、甲型H1N1流感等，获多项省市荣誉称号。伴随本科室医疗特色专长的深入开展，先后承担多项国家及省部级课题的研究项目，其中国家自然基金1项、省级课题8项、市级课题1项、光辉基金资助项目1项。曾获国家及省市科技进步奖4项，已达国际先进水平。5年来发表在国内外重要学术刊物论文80余篇。多年来承担着中国医科大学各专业教学和省市周边地区的医师培训工作，为本地区培养了大量本专业医学人才。第一感染性疾病、肝病病房拥有床位50张，医生8人，其中教授2人，副教授1人，医学博士7人，硕士1人，同时具有一支高素质的护理队伍。该技术团队秉持以病人为中心，以质量为核心的服务理念，将以饱满的热情、精湛的技术、人文化的关心为广大患者热忱服务。",
            "盛京医院老年病科始建于1970年，至今已有40多年的历史，历经几代人的努力，目前已初具规模。现设三个门诊诊室，三个病房，床位已达136张，分布于南湖、滑翔两个院区。科室现有医护人员80余人， 25名医生均为硕士研究生以上学历，博士学位占16名。医生中教授5人，副教授10人，讲师9人，医师1人。博士生导师2人，硕士生导师7人。老年病科下设老年呼吸、循环、消化、血液、内分泌及代谢、风湿免疫及神经等内科多个专业，可收治非手术治疗的各种病症，目前年门诊量2.5万余人次，年收治各种老年疾病住院患者2600余人次，目前老年急重症患者包括重症肺炎、肺梗死、呼吸衰竭、急性冠脉综合征、重度心力衰竭、脑卒中、糖尿病、尿毒症、消化道出血等500多人次，抢救成功率达到国内先进水平。老年病科科研实力强，老年难治性感染、老年恶性肿瘤、老年动脉硬化及老年痴呆是科室的主要研究方向，目前承担着1项国家973课题，4项国家自然科学基金课题，18项省市级科研课题，各项课题经费总和达500多万元；获辽宁省科技进步奖2项，市科技进步奖1项。5年来发表在国内外重要学术刊物论文100余篇，其中被SCI收录论文20余篇。",
            "中国医科大学附属盛京医院眼科，已有131年的历史，在几代人的努力下，现如今已发展成为人才资源雄厚、仪器设备先进、医疗技术精湛、集教学、科研、临床为一体的省内外知名专业学科。全科共有医护人员及技师共67人，其中教授6人，副教授9人，讲师10人，助教4人，在职的29名医生全部获得硕士、博士学位，其中博士14人。下设眼底病、青光眼、白内障、眼外伤、飞秒激光治疗近视、眼眶病、斜视等多个专业学组。开展各种外路视网膜脱离复位术，玻璃体视网膜手术治疗视网膜脱离手术、复杂及二次视网膜脱离手术、黄斑裂孔性视网膜脱离手术等；各种糖尿病性视网膜病变的手术治疗；各种眼内异物伤的诊断与治疗；各种严重的角巩膜破裂伤手术及治疗；各种严重眼内炎的手术及治疗；各种抗青光眼显微手术及难治性青光眼的手术，如外路小梁切开术及非穿透性小梁手术、青光眼阀植入术；超声乳化小切口白内障吸出折叠式人工晶体植入术及各类复杂白内障手术；板层和穿透性角膜移植术、羊膜移植；眼眶骨折修复术、眼眶肿瘤手术、眼睑畸形整形修复术、水平及垂直斜视；新鲜及陈旧性泪小管断裂吻合术等及激光治疗的眼前节和眼底疾病，如青光眼、后发性白内障及糖尿病视网膜病变；全飞秒及准分子激光治疗近视和近视散光（PRK、LASIK及EK等）、后巩膜加固术及人工晶体植入治疗高度近视等。",
            "耳鼻咽喉科是博士和硕士学位授予单位，是卫生部批准的耳鼻咽喉头颈外科专科医师培训基地。1992年成为“辽宁省嗓音喉病研治中心”，2004年成为“全国嗓音言语医学研究中心”。现科室设有耳科、鼻科、咽喉头颈外科3个专业组，配备听力检测、前庭功能检查、喉功能检查、 内窥镜检查及多导睡眠检查5个检查室，配备手术显微镜、鼻内镜系统、耳鼻喉动力系统、CO2激光治疗机等一批先进诊疗设备，病房位于南湖院区1号楼B座20楼和滑翔院区2号楼6楼，编制床位共计100张。年门急诊患者量近10万人次，年住院3500余人次，年手术3000余例，学科综合实力位于国内先进行列。科室现有医护技人员60人，其中医生28名，包括教授5名，副教授8名；护理系列人员27名；技师系列人员5名。有博士研究生导师4人，硕士研究生导师13人。科室先后承担国家及以下各类课题三十余项，获国家及以下各类科研成果奖励二十余项，发表论文两百余篇，主编及参编专著10余部。科室始终坚持“以病人为中心、以医疗质量为核心”的工作理念，时刻把握专业领域最先进的诊疗技术，以诚心、精心、细心、耐心的工作作风，全心全意服务于患者。",
            "第一神经内科集医疗、教学、科研、康复和预防一体的重点临床科室。第一神经内科病房规模大、科室人员配置强大、医疗技术力量雄厚，医疗诊治水平居国内先进水平。现有医生25人，正教授3人，副教授6人，主治医师10人，2位博士生研究生导师，5名硕士研究生导师。病房位于南湖院区1号楼A座15层，现开放床位85张。门诊设有著名专家诊室1个，位于南湖院区B座4层；普通门诊诊室4个，位于南湖院区1号楼A座5层；专病门诊7个，位于南湖院区1号楼A座5层。病房每年收治住院患者2500余人，门诊每年诊治患者45000余人/次。主要诊治疾病：①脑血管疾病包括各种类型脑梗死、脑供血不足、脑出血等；②头痛、眩晕、耳鸣；③各种类型癫痫；④面神经炎和手足麻木无力为主症的周围神经病变；脊髓疾病；⑤脱髓鞘病如多发性硬化；重症肌无力，肌病；⑥震颤；帕金森病；⑦记忆障碍和老年性痴呆；⑧脑炎，神经系统感染性疾病；⑨睡眠障碍；⑩不自主运动、斜颈、面肌痉挛等肌张力障碍疾病。",
            "肿瘤中心整合肿瘤外科和肿瘤内科及放疗的优势资源，打造全方位、一体化的肿瘤治疗中心和临床科研教学基地。中心位于沈阳市铁西区中国医科大学附属盛京医院滑翔院区，是目前东北地区最大的集手术、放疗、化疗、靶向等治疗为一体的综合性肿瘤治疗中心。中心目前共有床位460张，下设肿瘤外科（乳腺肿瘤外科）、乳腺肿瘤内科、头颈胸部肿瘤内科、消化肿瘤内科、儿科肿瘤及泌尿系骨肿瘤内科、放射治疗病房以及肿瘤研究中心。同时作为国家肿瘤药物临床药理基地，承接多项国际多中心临床研究和国内多中心临床研究。 肿瘤中心目前有医护人员300多名，各亚专业人员配备完整，其中医生高级职称占比达42%，中级职称占比达40%，人才梯队建设完善。肿瘤中心是中国医科大学肿瘤专业博士后、博士、硕士学位授予点，博士生导师3名，硕士生导师22人，目前医生团队博士学历占总人数60%以上，其余均为硕士学历，在多个国际、国家级学术团体及杂志任职，承担多项国家级和省级科研课题，每年发表多篇SCI论文及核心期刊论文。",
        ]
    }

    );
});


//临床专科接口
router.get('/linchuang', function (req, res) {
    console.log(req.session.user)
    res.json({
        title: "临床专科",
        tabs: [
            { title: '急诊医学科' },
            { title: '普通外科' },
            { title: '感染病科' },
            { title: '妇科' },
            { title: '产科' },
            { title: '儿科重症' },
            { title: '小儿外科' },
            { title: '中西医结合' },
            { title: '医学影像科' },
            { title: '病理科' },
            { title: '临床药学' },
        ],
        introduce: [
            "我院急诊医学科是集临床医疗、教学及科研为一体的综合性科室，2012年成为国家临床重点专科建设项目单位，是中国医科大学临床重点专科，辽宁省中毒诊治中心，中国医师协会急诊分会副会长单位。科室具有宽敞明亮的急诊急救诊疗大厅，有抢救设备完善的抢救室、重症监护室、中毒病房、日间病房、缝合室、治疗室、洗胃室和急诊手术室等，配有各种大型急救设备，包括呼吸机、除颤仪、有创及无创临时起搏器、床旁彩超、CRRT机、临时起搏器、血液灌流机、PICCO 和床旁纤维支气管镜等先进的治疗设备。 在心肺脑复苏、急危重症的诊治、急性中毒的救治、各种外伤等方面形成了自己的特色和优势。年接诊量达20余万人次。近三年，每年撰写论文30余篇，其中SCI收录近25篇。目前，已获得国家自然科学基金课题3项，省级及市科委级课题13项等。科室目前共有医生39人（100%硕士学历，30%博士学历），教授2人，副教授5人，主治医师20人，护士158人。",
            "我院普通外科2012年成为国家临床重点专科建设项目单位。科室现有医护人员320人，其中医生113人，护士207人，高级职称占43%，中级职称占42%，初级职称15%；医学博士81%，医学硕士19%.目前已形成了第一普通外科 胰腺、甲状腺外科病房；第二普通外科 胆道、整形美容外科病房；第三普通外科 胃肠、营养、减肥外科病房；第四普通外科 结直肠肿瘤外科病房；第五普通外科 肝胆脾外科病房；第六普通外科 胆道、血管外科病房；第七普通外科 乳腺外科病房；第八普通外科 结直肠、肛门病外科病房；第九普通外科 胰腺、乳腺外科病房；第十普通外科病房；第十一普通外科 结直肠、疝微创外科病房11个构建完善的普通外科独立专业病房，开放床位479张，年手术量达14000余例。学术带头人：吴硕东 教授 博士生研究生导师，国务院特殊津贴获得者，卫生部有突出贡献中青年专家。中华医学会外科学分会胆道外科学组副组长，辽宁省医学会外科学分会副主任委员。中国医科大学微创外科创始人。以第一完成人多次获得国家及省部级科技奖励。担任十余种国内外专业杂志编委。发表论文300余篇、专著8部，《普通外科腹腔镜手术图解》、《单孔腹腔镜手术操作技术》等多部著作由人民卫生出版社出版发行，并主编多部相关视听教材。",
            "1953年盛京医院感染病科在我国著名传染病学家董祥稼教授带领下创建，是东北地区最早的集教学、科研和医疗为一体的传染病和肝病诊断、治疗和研究中心。经过近60年几代人的不懈努力，目前是感染病科国家临床重点专科、卫生部国家肝病新药临床试验基地、辽宁省传染病重点学科，辽宁省传染病医学中心、辽宁省肝病研究治疗中心、中国肝病规范化诊疗项目示范基地、辽宁省重大传染病（肝病）转化医学中心、乙肝母婴零传播工程示范基地。负责东北三省及内蒙古地区重症传染病的会诊及救治工作，同时担负新发重大传染病及突发公共卫生事件的救治工作。感染科为独立的门急诊病房楼，设立独立的门急诊和3个感染性疾病、肝病病房，床位150张，收治所有的法定传染病、全身感染性疾病和各种肝病，特别是原因不明性发热及黄疸等疾病。感染病科现有医生31人，护士46人，研究人员2人，其中教授、副教授12人，博士生导师3名，硕士生导师4名。在国内及省内重大传染病流行及突发公共卫生事件的控制及诊治过程中，作为领衔的医疗诊治团队，为传染病控制、突发公共卫生事件的妥善处理及病人的救治做出了突出贡献。先后荣获国家级青年文明号，全国巾帼建功示范岗，辽宁省三八红旗集体，沈阳市五一先锋号等荣誉称号。",
            "妇科一直是盛京医院的传统优势学科，在医疗、教学、科研全面发展的基础上，学科建设及整体医疗水平也得到可持续发展。妇科现有8个病房，床位数570张，构成合理，人才济济，梯队整齐，目前，妇科共有医生186人，其中教授14人、副教授21人、博导8人，硕导26人，著名专家9人。妇科的各个亚学科也不断得到补充与完善，处于全国妇科领域各个亚学科的前沿水平。2005年被辽宁省卫生厅批准为妇科疾病质量控制中心；2007年被卫生部批准为内镜诊疗技术培训基地；2009年获批辽宁省人类辅助生殖技术及人类精子库质量控制中心；2010年被卫生部批准为全国首批卫生部四级妇科内镜手术培训基地；同年被卫生部批准为首批卫生部国家临床重点专科，真正体现我院妇科进入全国妇科领域领先行列；2011年被省卫生厅批准为盆底疾病诊治中心；2016年获批辽宁省妇科内镜诊疗技术质量控制中心。妇科在全面夯实妇科基础医疗技术外，重点发展特色技术，逐渐确立了“病房有特色、个人有专长”的医疗发展方向，目前主要医疗优势为：亚学科全面、实力均衡、具有以微创技术为先导的全面妇科技术。腔镜微创手术、阴式微创手术、盆底功能障碍手术、恶性肿瘤手术、恶性肿瘤非手术综合治疗等均达到全国先进水平。",
            "我院产科历史悠久，底蕴丰厚。目前无论是产科的床位数还是分娩量都是位居全国大学综合性医院前列，产科一直是我院的优势科室。在多年的人才、设备、学术的积累下，目前拥有辽宁省孕产妇危重症抢救中心、辽宁省产前诊断中心和辽宁省母胎医学中心，为辽沈地区高危胎儿筛查、诊治中心。此外我院产科还是卫生部围产营养项目中心、中国DoHaD联盟孕期营养监测中心、卫生部中国妇女盆底功能障碍产后康复中心、卫生部围产人性化服务项目单位、全国妊娠高血压疾病协作组的副组长单位、辽宁省中华医学会辽宁省妇产科学会主任委员单位、辽宁省围产学会主任委员单位。1978年获硕士学位授权点，2000年获博士学位授权点，现有博士导师5人，硕士导师12人。获得国家级、省级科技进步奖9项，获得市级科技进步奖5项。2008年被评为辽宁省重点学科，2008年获国家级精品课程。我院产科于2010年成功申请并获得卫生部首批临床国家重点专科建设项目资助。2013年联合国内十家医科大学附属医院并作为项目负责单位（常见高危胎儿诊治技术标准及规范的建立与优化），同年获批辽宁省转化医学研究中心（产科疾病领域）。近5年共承担国家级、省、市级科研项目50余项，科研项目经费2000余万。",
            "中国医科大学附属盛京医院儿科PICU成立于1982年，是我国首批建立的儿科急救中心之一，儿科重症医学专业在几代人的努力下已成为在国内有一定影响力的专业科室，2008年在原有PICU的基础上成立了包括小儿内科急诊在内的小儿急诊急救内科，2009年获得小儿急诊急救专业博士学位授权点，2010年成为卫生部首批国家级临床重点专科。2013年成立了第二小儿重症监护病房。小儿急诊急救内科主任、学科带头人刘春峰教授为留日博士，博士研究生导师，担任中华医学会儿科分会急救学组副组长，中华急诊医学分会儿科学组副组长，中国医师协会儿科重症医师分会副会长，中国医疗保健国际交流促进会儿科分会常委、中国医学救援学会儿科救援分会常委，中国实用儿科杂志及中国小儿急救医学杂志副主编，卫生部合理用药专业委员会儿科用药专业组委员等，为国内著名儿科专家。从90年代中期开始全身炎症反应综合征（脓毒症）及多脏器功能障碍的临床及基础研究，获得国家及省部科研基金资助12项，其中国家自然基金面上项目2项，发表文章100余篇，其中SCI论文5篇，主编副主编专著10余部，获得辽宁省科技进步奖6项，其中2010年获得“吴阶平-杨森医学研究奖”，为当年儿科唯一获奖者。",
            "中国医科大学附属盛京医院小儿外科创建于1956年，是全国几所著名医科大学较早设立的小儿外科专业之一，是东北地区首家集科研、教学、医疗为一体的小儿外科专业单位，是第一批国务院硕士研究生授权点，1978年开始招收硕士生,1990年被批准为博士学位授权点，1996年被评为辽宁省重点学科，同时建立 了卫生部小儿先天畸形重点实验室。小儿外科现有床位175张，下设小儿普外、小儿胸外科、新生儿外科、小儿泌尿外科、小儿骨外科等三级学科，并设有小儿消化道功能检测室和生物反馈治疗室。现 有医护人员80余人，其中医生40人（教授10人，副教授12人，博士生导师7名，硕士生导师18名）。小儿外科年门诊量达6万余人次，年手术量6000 余例，可完成小儿外科各种常规及疑难和复杂的手术。以先天性消化道畸形、泌尿系畸形和四肢、脊柱畸形为重点，其中先天性肛门直肠畸形、发育性髋脱位等疾病 诊治均为国际先进水平，并于国内率先开展了胎儿产时外科，其不开腹巨结肠根治术，生物反馈治疗尿便障碍、脊柱侧弯矫形及小儿肾积水的诊治均独具特色，处于 国内领先地位。并开展了腹腔镜、胸腔镜、结肠镜、关节镜等微创手术，治疗效果显著。",
            "我院中医科始建于1960年，经过几代人的努力，现已发展成为集医疗、教学、科研为一体的综合性科室。现为国家中医药管理局中西医结合临床重点学科；卫生部国家中医药管理局脾胃病临床重点专科；国家中医药管理局“十一·五”脾胃病重点专科；全国肠结病(不完全性肠梗阻)诊疗方案及临床路径制定牵头单位；辽宁省中医药管理局中西医结合临床重点学科；中国医科大学临床重点（培育）学科；中国医科大学中西医结合临床专业硕士学位授予点；辽宁省首家全国综合医院中医药工作示范单位；所授《中医学》为辽宁省精品课程、辽宁省精品资源共享课；2013年成功申报了国家名老中医工作室。科室目前参与及承担国家、省级课题10余项，市级课题1项，获资金资助100余万元，发表相关学术论文100余篇，参编教材及著作4本。中医科病房现拥有床位60张，门诊设有11个诊室，能开展中医各种特色治疗。在中医脾胃病（消化系统疾病）、心病（心血管疾病）、中风后遗症（脑血管疾病）及股肿、脱疽（周围血管疾病）、软组织损伤等中西医结合治疗方面具有较高、较全面的临床诊治和学术研究水平。",
            "我院医学影像科是中国医科大学医学影像系所在，本专科下设放射科（含介入病房）、超声科和核医学科三个亚专科，均为二级学科建制，合称为影像医学与核医学专业。1981年和1996年分别获得硕士学位、博士学位授予权，2002年被辽宁省教育厅批准成为辽宁省重点学科，2004年获准为辽宁省高校重点实验室，2006年被批准为辽宁省医学影像质量控制中心、辽宁省产前诊断中心，2007年被批准为国家级重点（培育）学科，2010年被批准为辽宁省医学影像中心，2013年被批准为国家临床重点专科。近年来，科室在科学研究方面取得多项成果，荣获国家发明专利3项，获国家实用新型专利2项；荣获辽宁省科技进步奖承担科研课题46项，其中包括“重大新药创制”等国家科技重大专项及子课题项目5项，国家自然科学基金课题17项等重点项目，在研课题资助总计约2150余万元。我院年门急诊量366.4万余人次，影像科检查量以每年15%的速度增长。科室已形成以腹部影像诊断、神经系统影像诊断、骨关节影像诊断、介入放射学、小儿影像诊断、胸部及乳腺疾病影像诊断和数字影像研究为骨干的多分支科研体系，特别是在肝胆肿瘤影像诊断、乳腺癌的综合影像诊断、儿科影像诊断、胎儿影像诊断、妇科影像诊断、超声声学造影等方面达国内领先水平。",
            "中国医科大学附属盛京医院病理科承担本院的组织病理学检查、细胞学检查及尸体解剖检查及省内外病理会诊工作等。为卫生部批准的病理专科医师培训基地。2014年获批国家临床重点专科建设项目。科室现有医技人员40余人，其中教授5人、副教授3人；医师中博士学位66%人、硕士学位100%人；博士生导师1人、硕士生导师3人。分别担任中华医学会 病理学分会儿科学组、细胞学组、心脏学组委员，中华医学会辽宁省病理学会副主任委员，辽宁省抗癌协会细胞学专业委员会主任委员，辽宁省抗癌协会肿瘤病理专 业委员会、肿瘤标志专业委员会副主任委员，辽宁省及沈阳市医疗事故技术鉴定专家库成员等。每年承担组织病理学检查6万余例，细胞学检查5万余例、外来会诊5000余例。诊断疾病种类齐全，尤其是妇科病理、儿科病理的病例数量及诊断规范化居国内领 先地位。免疫组织化学及特殊染色检查设备先进、种类齐全，为淋巴瘤等疑难病例的诊断和规范提供帮助。采用国际先进的细胞学计算机辅助阅片，保证了细胞学诊 断质量。",
            "中国医科大学附属盛京医院药学部现有职工近300人，其中教授、副教授15人，博士、硕士生导师人名。多年来，在几代药学人的努力下，在学科建设、人才培 养、科研能力、药学服务水平、自动化和信息化建设等领域都取得了优异的成绩，是卫计委临床药师培训基地和临床药师制试点单位。学科带头人菅凌燕教授任中华医学会临床药学分会常委，《实用药物与临床杂志》副主编，中国医科大学药学院副院长；副主任肇丽梅教授现任中国药学会医院药学专业委员会副主任委员、中国药理学会药物临床试验专业委员会常委、治疗药物监测与研究专业委员会常委等。2013年获得国家临床药学重点专科建设项目，并确立了培养多层次临床药学人才，建立用药安全评价体系，开展临床药学技术服务及相关基础研究，建设信息化网络平台等明确的专科发展方向，相信依托医院先进的管理理念、科研条件和人才优势，我们一定会做得更好！近五年，药学部员工在国内外核心期刊发表文章200余篇。其中，11篇被SCI收录。承担国家自然科学基金课题资助3项，作为子课题负责人承担国家重大专项研究课题4项，获得获省基金资助9项、市基金资助1项。目前，累计资助经费500余万元。",
        ]
    }
    );
});


//医疗中心接口
router.get('/zhongxin', function (req, res) {
    console.log(req.session.user)
    res.json({
        title: "医疗中心",
        tabs: [
            { title: '肿瘤中心' },
            { title: '儿童听力障碍诊治中心' },
            { title: '嗓音喉病研治中心' },
            { title: '妇科腔镜中心' },
            { title: '內镜诊治中心' },
            { title: '肝病研究治疗中心' },
            { title: '医学影像质量控制中心' },
            { title: '产前诊断中心' },
            { title: '康复医学中心' },
        ],
        introduce: [
            "中国医科大学附属盛京医院肿瘤中心整合肿瘤外科和肿瘤内科及放疗的优势资源，打造全方位、一体化的肿瘤治疗中心和临床科研教学基地。中心位于沈阳市铁西区中国医科大学附属盛京医院滑翔院区，是目前东北地区最大的集手术、放疗、化疗、靶向等治疗为一体的综合性肿瘤治疗中心。中心目前共有床位460张，下设肿瘤外科（乳腺肿瘤外科）、乳腺肿瘤内科、头颈胸部肿瘤内科、消化肿瘤内科、儿科肿瘤及泌尿系骨肿瘤内科、放射治疗病房以及肿瘤研究中心。同时作为国家肿瘤药物临床药理基地，承接多项国际多中心临床研究和国内多中心临床研究。肿瘤中心目前有医护人员300多名，各亚专业人员配备完整，其中医生高级职称占比达42%，中级职称占比达40%，人才梯队建设完善。肿瘤中心是中国医科大学肿瘤专业博士后、博士、硕士学位授予点，博士生导师3名，硕士生导师22人，目前医生团队博士学历占总人数60%以上，其余均为硕士学历，在多个国际、国家级学术团体及杂志任职，承担多项国家级和省级科研课题，每年发表多篇SCI论文及核心期刊论文。",
            "中国医科大学附属盛京医院耳科是富有活力、发展迅速的学科，是博士和硕士学位授予单位，是耳鼻咽喉头颈外科专科医师培训基地，是辽宁省儿童听力障碍诊治中心，沈阳市听力康复技术指导中心，卫生部、辽宁省、沈阳市三级人工耳蜗治疗中心。耳科立足专业领域最前沿，以耳外科、耳内科、临床听力学为重点，全面深入地开展了耳显微外科、耳神经外科、侧颅底外科、耳内科、临床听力诊断、听力康复指导与聋病防治、以及小儿耳鼻咽喉科工作，学科综合实力位于国内先进行列，部分领域已进入国内领先行列。盛京耳科目前有医护技人员27人，其中医生11人，包括教授和副教授4人，博士研究生导师1人，硕士研究生导师2人，听力师和护理系列人员16人。另外每年还有研究生和进修医生近10人。盛京耳科人始终以病人第一、质量第一为准则，以最先进的专业技术为手段，以一流的诊疗设备为基础，严谨、细致、负责地悉心治疗每一位患者。",
            "辽宁省嗓音喉病研治中心于1988年 由辽宁省卫生厅批准在我院成立。中心成立二十多年来，为全国和东北地区嗓音喉病患者的诊断和治疗做出了积极的贡献，在相关疾病的应用基础与临床研究方面取 得了丰硕的成果。从喉形态学、电生理学、病理学着手，由动物实验到人体解剖，从检测不同年龄组正常嗓音及喉形态学特征到研究各种病态嗓音及喉病，在喉癌、 下咽癌外科治疗中采用激光和多种手术方式保留喉功能，使患者在保留生存率的前提下，保留喉功能，提高患者嗓音质量，从而提高患者生存质量。多年来形成了自 己的研究和治疗体系。在嗓音及喉发音功能研究方面先后承担国家自然科学基金课题3项、卫生部及省部级科研课题27项，获国家及卫生部、文化部、省市科技进步奖14项，在国内外核心期刊上发表论文百余篇。先后有10多人去美国、瑞典、加拿大、日本研修，并进行国际间合作，相关研究居国内领先、部分达到国际先进水平。",
            "辽宁省妇科腔镜中心设于中国医科大学附属盛京医院，于1997年 由辽宁省卫生厅审批成立，依托于盛京医院综合学科整体实力的支撑及我院妇产科国家重点临床专科的强大综合实力，该中心承担辽宁省妇科腔镜技术质量控制，妇 科腔镜医师标准化培训与考核，东北地区妇科腔镜技术相关的疑难病例及并发症的会诊工作，同时进行辽宁地区的妇科内镜微创技术推广工作。　中心拥有以腔镜和微创技术为特色的3个专业化病房，固定床位170张，年均完成各类微创手术5000余例，其中腔镜手术占70%之上。拥有教授、副教授10余名，其中博士生导师2名，硕士生导师6名。技 术力量雄厚，人才结构合理，拥有如杨清教授、王永来教授、赵福杰教授、马晓欣教授、刘贵鹏副教授等一批国内、省内著名的妇科腔镜专家及中青年业务骨干。中 心负责人杨清教授担任中华医学会妇产科分会腔镜学组委员，中国医师协会内镜医师分会常委，辽宁省医学会妇产科分会腔镜学组组长，中华医学会计划生育学分会 委员，辽宁省医学会计划生育分会主任委员等职务。",
            "盛京医院内镜诊治中心于2002年5月被辽宁省卫生厅批准成为辽宁省内镜诊治中心，是一家国际知名的、具备先进诊疗技术的大型现代化内镜中心。现为卫计委四级内镜手术培训基地、中华医学会消化内镜分会常委单位。中心技术力量雄厚，人才结构合理，拥有一批著名专家及中青年骨干力量，中心主任孙思予教授系国际知名内镜专家、国家有突出贡献中青年专家，百千万人才工程国 家级人选，卫计委有突出贡献中青年专家，卫计委四级手术培训基地评审专家组成员，中华医学会消化内镜专业委员会常委。内镜中心主要研究方向为消化内镜微创治疗技术，超声内镜诊断和微创介入技术。中心孙思予主任在国际上率先开展的黏膜下肿瘤结扎及超声内镜引导下胰腺癌组织间放射治疗等技术，为多种疾病提出了创新性微创治疗手段，并逐渐成为国际内镜领域标准术式。",
            "辽宁省肝病治疗中心是2002年辽宁省卫生厅批准的、以我院感染科为中心并整合消化内科、肝胆外科、放射介入等科室形成的集各种肝病（包括肝癌）诊断及综合治疗的临床中心。中心主要负责东北三省及内蒙古地区重症传染病和肝病的会诊及救治工作，同时担负新发重大传染病及突发公共卫生事件的救治工作。该中心自成立以来秉承多学科合作、优势互补的原则，为广大肝病患者提供优质、全面及先进的服务。学科带头人窦晓光教授目前是中华医学会肝病学分会副主任委员，辽宁省肝病学会主任委员，辽宁省感染病学会副主任委员。李智伟教授目前是中华医学会感染病分会 常委，辽宁省感染病学会主任委员，辽宁省肝病学会副主任委员。冯国和教授目前担任中华医学会感染病分会学组委员，辽宁省感染病和肝病学会常委。",
            "2004年12月，经辽宁省卫生厅批准，辽宁省医学影像质量控制中心落户我院。主任委员由中国医科大学副校长、中国医科大学附属盛京医院医院集团董事长、总院长、附属盛京医院院长、放射科主任郭启勇教授担任，委员会由辽宁省各市24位医学影像专家组成。在辽宁省卫生厅的正确领导下，多年来质控中心发挥了极大的带头作用，先后对全省36家三级甲等西医院和6家三级甲等中医院进行检查指导，针对存在的问题提出整改措施。对医学影像基础质量与医学影像诊断质量达标的24家 单位实行影像诊断报告互认制度，不但统一了全省影像诊断标准，又解决了患者重复检查的弊端。另外，质控中心每年举办一次医学影像质量控制培训班，对各医院 放射科主任、副主任、技师长进行培训，规范医学影像学科的完整性、科学性和可操作性，努力提高全省各三甲医院医学影像诊断质量和诊断水平。",
            "2005年 12月，辽宁省卫生厅正式批准我院成立辽宁省产前诊断中心。中心成立以来，逐步开展和完善了各项产前诊断技术，其中包括：影像学诊断；超声系统、胎儿心 脏、孕早期NT测量、异常胎儿的超声诊断；胎儿MRI诊断。胎儿磁共振检查对于胎儿颅内病变的诊断更准确，对部分胎儿疾病性质、与周围组织的关系判断更明 显，尤其对于需要进行产时外科手术的胎儿宫内状态的评估具有重要的作用。介入性产前诊断技术：包括绒毛、羊水穿刺、脐血穿刺。遗传学诊断：包括细胞遗传 学、STR、FISH、分子、基因以及部分单基因遗传病的分子遗传学诊断，临床遗传咨询。为降低出生缺陷率和出生缺陷胎儿的产时和宫内治疗提供保障，优质 的产前诊断服务可以提高围产保健质量，减少严重出生缺陷患儿的出生数量，从而减轻社会的疾病负担。其中，先天性心脏病产前诊断和部分遗传病基因诊断已达国 内先进水平，其诊断技术国内领先。",
            "我院康复中心成立于2004年，也是中国医科大学康复医学中心所在地。2006年12月，我院康复中心通过了国家康复医学科医师培训基地的评审，成为辽宁省首家康复医师培训基地。2009年1月被辽宁省卫生厅批准为辽宁省康复医学中心。每年承办国家及省级继续医学教育项目。聘请日本、英国、挪威等国专家长期合作，开展各种康复治疗新技术培训班，为推广康复治疗技术做出卓越贡献。多渠道与国外康复治疗及研究机构建立了长期合作关系，使我康复中心的发展逐步与世界接轨。",
        ]
    }

    );
});


router.get('/class', function (req, res) {
    res.json([{
        "name": "手术查询",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/shoushuchaxun@2x.png",
        "rank": 1,
        "groupId": 2,
        "groupName": "住院",
        "tokenFlag": 1,
        "useStatus": 0,
        "target": 0
    }, {
        "name": "健康百科",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/jiankangbaike@2x.png",
        "url": "/pages/comprehensive/health_baike/health_baike",
        "rank": 1,
        "groupId": 4,
        "groupName": "其他",
        "tokenFlag": 0,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "当日挂号",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/dangriguahao@2x.png",
        "url": "/pages/appointment/hospital_branch/hospital_branch?isCurrent\u003dtrue",
        "rank": 1,
        "groupId": 1,
        "groupName": "门诊",
        "tokenFlag": 0,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "体检预约",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/tijianyuyue@2x.png",
        "rank": 1,
        "groupId": 3,
        "groupName": "体检",
        "tokenFlag": 0,
        "useStatus": 0,
        "target": 0
    }, {
        "name": "预约挂号",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/yuyueguahao@2x.png",
        "url": "/pages/appointment/hospital_branch/hospital_branch",
        "rank": 2,
        "groupId": 1,
        "groupName": "门诊",
        "tokenFlag": 0,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "住院管理",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/zhuyuanguanli@2x.png",
        "rank": 2,
        "groupId": 2,
        "groupName": "住院",
        "tokenFlag": 0,
        "useStatus": 0,
        "target": 0
    }, {
        "name": "帮助与反馈",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/bangzhufankui@2x.png",
        "url": "/pages/personal_center/help_list/help_list",
        "rank": 2,
        "groupId": 4,
        "groupName": "其他",
        "tokenFlag": 0,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "体检报告",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/tijianbaogao@2x.png",
        "rank": 2,
        "groupId": 3,
        "groupName": "体检",
        "tokenFlag": 0,
        "useStatus": 0,
        "target": 0
    }, {
        "name": "体检问卷",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/tijianwenjuan@2x.png",
        "rank": 3,
        "groupId": 3,
        "groupName": "体检",
        "tokenFlag": 0,
        "useStatus": 0,
        "target": 0
    }, {
        "name": "自助核酸检测",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/hesuanjiance@2x.png",
        "url": "/pages/subPackages/comprehensive/pages/nucleicAcid/select_nucleic_acid/selectNucleicAcid",
        "rank": 3,
        "groupId": 1,
        "groupName": "门诊",
        "tokenFlag": 1,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "报告查询",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/baogaochaxun@2x.png",
        "url": "/pages/comprehensive/report/report",
        "rank": 4,
        "groupId": 1,
        "groupName": "门诊",
        "tokenFlag": 1,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "体检订单",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/tijiandingdan@2x.png",
        "rank": 4,
        "groupId": 3,
        "groupName": "体检",
        "tokenFlag": 0,
        "useStatus": 0,
        "target": 0
    }, {
        "name": "院内导航",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/yndh@2x.png",
        "url": "yndh",
        "rank": 4,
        "groupId": 4,
        "groupName": "其他",
        "tokenFlag": 0,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "病历复印",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/blfy.png",
        "url": "blfy",
        "rank": 4,
        "groupId": 2,
        "groupName": "住院",
        "tokenFlag": 0,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "门诊缴费",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/menzhenjiaofei@2x.png",
        "url": "/pages/comprehensive/outpatient_pay/pay_list/pay_list",
        "rank": 5,
        "groupId": 1,
        "groupName": "门诊",
        "tokenFlag": 1,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "电子发票",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/dzfp@2x.png",
        "rank": 5,
        "groupId": 4,
        "groupName": "其他",
        "tokenFlag": 1,
        "useStatus": 0,
        "target": 0
    }, {
        "name": "候诊排队",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/houzhenpaidui@2x.png",
        "url": "/pages/comprehensive/waiting/waiting",
        "rank": 6,
        "groupId": 1,
        "groupName": "门诊",
        "tokenFlag": 1,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "智能导诊\r\n",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/zhinengdaozhen@2x.png",
        "url": "result",
        "rank": 7,
        "groupId": 1,
        "groupName": "门诊",
        "tokenFlag": 0,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "预约记录",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/yuyuejilu@2x.png",
        "url": "/orderform",
        "rank": 8,
        "groupId": 1,
        "groupName": "门诊",
        "tokenFlag": 1,
        "useStatus": 1,
        "target": 0
    }, {
        "name": "处方流转",
        "pic": "http://sjoss.daxiang91.com/sj_mini/images/home/icon_cflz@2x.png",
        "url": "/pages/subPackages/comprehensive/pages/PresCircule/selectPatient/selectPatient",
        "rank": 12,
        "groupId": 1,
        "groupName": "门诊",
        "tokenFlag": 1,
        "useStatus": 1,
        "target": 0
    }]);
});



router.get('/info', function (req, res) {
    res.json({
        "level": "三级",
        "name": "中国医科大学附属盛京医院",
        "hospStaticMap": "http://sjres.daxiang91.com/071a5c7c9b190d8ebb1628b70ce42025",
        "hospLogo": "http://sjres.daxiang91.com/elho/M00/00/00/rBBCa1s0s0KAb5t0AACTZSs9A9Y189.png",
        "hospImg": "http://sjres.daxiang91.com/elho/M00/00/00/rBBCa1s0szaAVldGAAEi-7uvZe0358.png",
        desc: "中国医科大学附属盛京医院是一所大型综合性现代化数字化大学附属医院。目前，医院共有三个院区和一个教育研发基地。医院南湖院区位于辽宁省沈阳市和平区三好街，滑翔院区位于辽宁省沈阳市铁西区滑翔路，总占地面积13万平方米，总建筑面积54万平方米。沈北院区位于沈阳市沈北新区蒲河大道，总占地面积23.5万平方米。盛京医院医药研究教育发展基地位于辽宁省本溪市高新区“中国药都”，总占地面积62.58万平方米。2014年，“盛京医院 SHENGJING HOSPITAL”成功申请为“中国驰名商标”，盛京医院成为国内第一家拥有中国驰名商标的综合性医院。",
        "patientCount": "5003025",
        "dailyVisitCount": "15000",
        "address": "中国辽宁省沈阳市和平区三好街36号（南湖院区）中国辽宁省沈阳市铁西区滑翔路39号（滑翔院区）",
        "contactNo": "024-96615",
        "serviceCode": "4077311",
        "lng": "123.426630000000",
        "lat": "41.773370000000",
        "phoneNos": [{
            "phoneNo": "024-96615"
        }],
        "hospType": "综合",
        "evaluation": "2.9"
    });
});


router.get('/carousel', function (req, res) {
    res.json([{
        "banId": "28",
        "banType": 1,
        "link": "http://www.sj-hospital.org/",
        "funcCode": "0",
        "image": "http://sjres.daxiang91.com/elho/M00/00/00/rBzrtV1o9pOAEnGbAAXbUDexMFg374.png",
        "bizId": ""
    }, {
        "banId": "32",
        "banType": 1,
        "link": "http://www.sj-hospital.org/",
        "funcCode": "0",
        "image": "http://sjres.daxiang91.com/elho/M00/00/00/rBzrtV1o9x6AaMeNAASN0Wmsvzg607.png",
        "bizId": ""
    }]);
});


router.get("/student/:id", function (req, res) {
    var id = req.params["id"];
    var reg = /^[\d]{6}$/;   //正则验证
    if (reg.test(id)) {
        res.send(id);
    } else {
        res.send("请检查格式");
    }
});

//用户数组
var user = [
    {
        userName: "张三",
        passWord: "123456",
        userIcon: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1070262793,3560015859&fm=26&gp=0.jpg",
        userNumber: "159****4256",
        booking: [],
    },
    {
        userName: "李四",
        passWord: "123456",
        userIcon: "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/pic/item/95eef01f3a292df59a8b9707b3315c6034a87353.jpg",
        userNumber: "150****4009",
        booking: [],
    }
]


//登录验证接口
//获取post请求参数，使用body-parser中间件
router.post("/login", function (req, res) {
    console.log(req.body);
    const { userName, passWord } = req.body;
    // user.find(item => {
    //     if (userName == item.userName && passWord == item.passWord) {
    //         // req.session.user = req.body;
    //         res.json({
    //             zhaungtai: 1,
    //             userName: item.userName
    //         });
    //         userLogined = item;
    //         console.log(userLogined, "55555555555555555555")
    //     }
    //     else {
    //         res.json({
    //             zhaungtai: 0
    //         })
    //     }
    // })

    let thisname = user.filter((item) => {
        return item.userName === userName
    })
    console.log(thisname, '999')
    if (thisname[0] != undefined) {
        if (thisname[0].passWord === passWord) {
            // loginperson(userName)
            res.json({
                zhaungtai: 1,
                userName: thisname[0].userName
            });
            //创建会话
            req.session.user = req.body;
            //覆盖在线用户信息数组
            userLogined = thisname[0];
        }
        //密码错误
        else {
            res.json({
                zhaungtai: 2,
            });
        }
    }
    //无用户
    else {
        res.json({
            zhaungtai: 3,
        });
    }


})


router.get('/logout', function (req, res) {
    req.session.user = null;
    res.json("退出登录成功");
});


//资讯接口
router.get('/news/:page', function (req, res) {
    console.log(req.params.page, "当前页");
    res.json({
        status: 0,
        hasMore: true,
        data: [
            {
                title: "想看病，到底应不应该去医院？互联网医院给你答案",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/sK0tuq61PO9gjU6ENNvBjg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/0D/rBzrtV49bleAfBeoAAcJrk9OesE618.png",
                publishDate: "20200207",
                newsType: "1",
                readAmount: 16861,
                stick: 1,
                newId: 364,
                newsTypeName: "好文"
            }, {
                title: "您有新的“快递”——请查收！！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/FbfcvE-zLxoq23n_UHflPg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4X8h-ANOuQAAsvUWR3WTI624.png",
                publishDate: "20200110",
                newsType: "2",
                readAmount: 4985,
                stick: 1,
                newId: 362,
                newsTypeName: "好看"
            }, {
                title: "2019年南湖院区第十期临床病例讨论会摘编",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/zSxnyYlvfhINFBmdYuN4lQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4X8lGAbAFbAARFehxQO9Q743.png",
                publishDate: "20200110",
                newsType: "4",
                readAmount: 2615,
                stick: 1,
                newId: 361,
                newsTypeName: "好术"
            }, {
                title: "声音嘶哑！千万别大意",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/aRE4DPteecAF2psTV6Vg8Q",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4X8o2AJzsUAAmkebI2zNc120.png",
                publishDate: "20200110",
                newsType: "1",
                readAmount: 3403,
                stick: 1,
                newId: 359,
                newsTypeName: "好文"
            }, {
                title: "【盛京小薄被er】还不生呀？再不生娃就晚了！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/02uWChMgq3nR93KOaSdLiA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4X8a-AeXnZAAcEsJKkPbQ988.png",
                publishDate: "20200110",
                newsType: "2",
                readAmount: 1892,
                stick: 1,
                newId: 357,
                newsTypeName: "好看"
            }, {
                title: "小腹痛？同房痛？白带多？痛苦不堪，你一定要注意啦！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/SKYTQlq9HBqkQcLBqFFaiQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4X8qKAWLbzAADHcR7wVsA968.png",
                publishDate: "20200110",
                newsType: "1",
                readAmount: 6333,
                stick: 1,
                newId: 355,
                newsTypeName: "好文"
            }, {
                title: "明星想生就生的秘密",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/IzSsZ1R9d5MPNZ6s1fCDOA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3-QFWAQ7aKAAaP-J2ymyc733.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 4019,
                stick: 1,
                newId: 236,
                newsTypeName: "好文"
            }, {
                title: "什么是健康饮食的“一手”咨询",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/AKyc5uECIfPbba8GM-MIpg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38o9uAS3_QAA-hcPl2sBQ465.png",
                publishDate: "20191220",
                newsType: "1",
                readAmount: 1694,
                stick: 1,
                newId: 200,
                newsTypeName: "好文"
            }, {
                title: "互联网医院就诊流程，你都了解吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/AlkFfzyt4KSdFRav5Kk-rA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38o2SATLfxAAWBf6u8C-I100.png",
                publishDate: "20191220",
                newsType: "1",
                readAmount: 3486,
                stick: 1,
                newId: 198,
                newsTypeName: "好文"
            }, {
                title: "如果你不想总是这么尴尬",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/JvfK2KDfeg16YJRURsOqSg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38orOAYvESAAIxZQU34ww040.png",
                publishDate: "20191220",
                newsType: "1",
                readAmount: 1423,
                stick: 1,
                newId: 196,
                newsTypeName: "好文"
            }, {
                title: "经血还可以这么用？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/fa6yqGiFjDW-RGJsoFhiow",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38ojSAEb2lAAn2r2uxO78103.png",
                publishDate: "20191220",
                newsType: "1",
                readAmount: 2476,
                stick: 1,
                newId: 194,
                newsTypeName: "好文"
            }, {
                title: "吃糖的危害除了蛀牙还有啥？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/nNVSLlznH-4q4BZZR6yj7w",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38oaCANJnpAAS7T6R9K6M295.png",
                publishDate: "20191220",
                newsType: "1",
                readAmount: 1333,
                stick: 1,
                newId: 192,
                newsTypeName: "好文"
            }, {
                title: "【医疗】医院多学科合作 顺利完成经导管主动脉瓣植入术",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/GlPsVNylbH_d2X0jPt7kGw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38k6qAZEypAAZGZ4HTo-s323.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 108,
                stick: 1,
                newId: 164,
                newsTypeName: "好术"
            }, {
                title: "【文化】盛京医院“对口医院”援冈比亚合作项目培训冈方医生纪实",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/wJMWllqmjrgGjU3GWuxe6g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38gv6ADLcsAA_4rmSbpbg242.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 153,
                stick: 1,
                newId: 162,
                newsTypeName: "好人"
            }, {
                title: "【文化】不忘初心使命 奋进筑梦前行 记医院先进基层党组织代表——儿科党总支",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Kq2hY0rgS4Z-G-W3z75hvw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38fwyAa5XrAAxdTZ33KDY627.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 84,
                stick: 1,
                newId: 152,
                newsTypeName: "好人"
            }, {
                title: "【送福】院党政领导班子除夕夜慰问一线教职员工",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/VG7ThO0Kur_r6EhVGtaDfg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38dkaAexnfABBkXgkki2k067.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 118,
                stick: 1,
                newId: 134,
                newsTypeName: "好人"
            }, {
                title: "情暖病患心 最美“康复年”",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/opGu8sSAkuqh65aW56RsUA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38dCuAc363AAu8ujrDKB8262.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 95,
                stick: 1,
                newId: 128,
                newsTypeName: "好人"
            }, {
                title: "有家人有年味 这里也是家",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/SjkQNmLDkkgOEJJEhUxgMA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38c66AHzW-AAg_898n-Ik067.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 73,
                stick: 1,
                newId: 126,
                newsTypeName: "好人"
            }, {
                title: "把幸福给你 把幸福给我",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/efI_Yy3j830bN-P7x0CGpw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38c8mAH2FzAA5STvYSIhU469.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 67,
                stick: 1,
                newId: 125,
                newsTypeName: "好人"
            }, {
                title: "【援藏】守初心 担使命 盛京人万里羌塘谱写援藏新篇章",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/_Hy6v8Bf27tPtW-glms6EQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38dQ-AfjlTAA7KAyOwy24294.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 47,
                stick: 1,
                newId: 123,
                newsTypeName: "好人"
            }, {
                title: "【献礼】燃！盛京人这样向祖国表白，唱响新时代",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/ZmuYbz2bQChNexVPCwvnrA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38Z-qAHx0DAAVYH2PIIL8400.png",
                publishDate: "20191220",
                newsType: "2",
                readAmount: 61,
                stick: 1,
                newId: 119,
                newsTypeName: "好看"
            }, {
                title: "你的宫颈张力够吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/H269VYo_cSyzFLou5jQynw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UQpWAc5ooAAoV2jCSieI694.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 1661,
                stick: 0,
                newId: 354,
                newsTypeName: "好文"
            }, {
                title: "这个病来得无声无息，却是一个隐形杀手，你有没有关心过你的血管",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Js1R0W6GBh31nOv6F64ZqA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UQkOAQYioAAOrIVLlaOI992.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 552,
                stick: 0,
                newId: 352,
                newsTypeName: "好文"
            }, {
                title: "三个锦囊 教你小儿急救技能",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/ICnufYoIBK2mechsL0_9ng",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UQbaAFm4IAAt__YbmXZs755.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 328,
                stick: 0,
                newId: 350,
                newsTypeName: "好文"
            }, {
                title: "头晕目弦，四肢无力，感觉迷迷糊糊想睡觉，你可能是贫血",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/6GiAXX-bKVnEirErW2uYMA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UQVGAGbwVAAAZPWziqb4383.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 955,
                stick: 0,
                newId: 348,
                newsTypeName: "好文"
            }, {
                title: "要谨遵医嘱，医生说的你得听~术前就该不吃不喝~",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/pXmAqpSfUHw0cqUd27y_7g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UQJyAXlzJAAMghygmeJs306.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 196,
                stick: 0,
                newId: 346,
                newsTypeName: "好文"
            }, {
                title: "不分年龄，不分性别，尿石症都有可能找上你",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/FO7Ufl8VMrsb_SX998Qjhg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UP-eAGastAAYatQGkX5o126.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 411,
                stick: 0,
                newId: 344,
                newsTypeName: "好文"
            }, {
                title: "产前小蛮腰vs产后水桶腰？原来是它作怪",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/l8Hk9TPBa7r7fxaPElvf1Q",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UP3yAe-1CAAUc3MYYJcM961.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 515,
                stick: 0,
                newId: 342,
                newsTypeName: "好文"
            }, {
                title: "传说中的这种“四高”疾病，我来教你几招康复秘籍",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/IbTHqDQ4K8BizwTFR10PPg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UPtKAd3KcAALwDV4T8Jw524.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 256,
                stick: 0,
                newId: 340,
                newsTypeName: "好文"
            }, {
                title: "关于你喝进去酸奶，这里一定有一些你还不知道的",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/J8pXtZ79jEfb3mdynH8M4g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UPm-AKn57AAtYqYY4wx4202.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 562,
                stick: 0,
                newId: 338,
                newsTypeName: "好文"
            }, {
                title: "注意注意！宫颈癌可能没有症状",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/89b25K9jK7yx2euF8_qFbQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UPa2AVm09AAFUjSECG-s095.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 1174,
                stick: 0,
                newId: 336,
                newsTypeName: "好文"
            }, {
                title: "嗓子哑 不能等",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/b2QRK7i-HymtOFWvtWsrTQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UPUGAHbzUAAdQ2ZuhjKs210.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 365,
                stick: 0,
                newId: 334,
                newsTypeName: "好文"
            }, {
                title: "这种“心”病不分男女，不分年龄，但发现早却是能救命的",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/3n9uJP8f13SoTa4XuH3DaA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UPNaAErzzAAt51E1BlMc648.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 209,
                stick: 0,
                newId: 332,
                newsTypeName: "好文"
            }, {
                title: "腿肿可能是种严重的病，致命！什么病这么可怕？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/3b94BtecnZpz4dQbsIsx4g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UPGaAdZfYAArHOi5WH9E228.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 368,
                stick: 0,
                newId: 330,
                newsTypeName: "好文"
            }, {
                title: "男人给老婆看，女人给自己看——认识乳腺癌的五大误区",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/0jAmDTVVmeBJ2m1lZih58w",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 288,
                stick: 0,
                newId: 328,
                newsTypeName: "好文"
            }, {
                title: "如果你是喜欢拉肚子的人……",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/1gg8nFT5auJmjOSjUicypA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UOkiAKJijAAcBEiJo4Jw389.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 477,
                stick: 0,
                newId: 326,
                newsTypeName: "好文"
            }, {
                title: "男女发病比例1:9 你知道这种周身都可能发病的疾病吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/8yrOS5cNFFByO6lOmi6t-Q",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UOa-AWdDRAAKoL6k3dfM844.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 142,
                stick: 0,
                newId: 325,
                newsTypeName: "好文"
            }, {
                title: "野菜有讲究，采摘需谨慎",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/7pNvm1fKuVP2lBWOw2qS6Q",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UOMeAIjyIAAgO8SxOvFE764.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 104,
                stick: 0,
                newId: 323,
                newsTypeName: "好文"
            }, {
                title: "小长假在即，老人出门需要带什么，长途短途都要看看",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/8fxX8J-GgyEfscaE6u5VXw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UOESAL3IQAAa080VWKzU136.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 55,
                stick: 0,
                newId: 321,
                newsTypeName: "好文"
            }, {
                title: "来来来！围观一下看心房的硬手段！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/8tBWgabGifa1_GL0zF9UnQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UNCaAGLXEAAnv70knQhs418.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 72,
                stick: 0,
                newId: 320,
                newsTypeName: "好文"
            }, {
                title: "一管血可测癌症？这个监测可以有",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/j1aCF9ZJDaHa_PCcOC6RGQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UM5eAIHTnAAQTwGXS0y4141.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 321,
                stick: 0,
                newId: 318,
                newsTypeName: "好文"
            }, {
                title: "孩子过胖，危害大！多胖算胖，请进来对号入座",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/rkunkwBgZuDBrDjwBNlkgA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UMz2AJzYIAAhLh3tW9U0768.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 202,
                stick: 0,
                newId: 316,
                newsTypeName: "好文"
            }, {
                title: "好消息！自4月1日起盛京医院开放电话预约挂号服务啦！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/d_wNj3Pu1DwqsEqjq8M9vQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ULBeAfC6KAAeUAhQ7MTg926.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 372,
                stick: 0,
                newId: 315,
                newsTypeName: "好文"
            }, {
                title: "“作精”苏大强，别摊上这样的爹，也别得上他这样的病",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/7etUO1_3i4-u2GtJYf4nRg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UJ9uANvvdAAvTTjd6Cro701.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 90,
                stick: 0,
                newId: 314,
                newsTypeName: "好文"
            }, {
                title: "反复咳嗽就是不好，小心是这个病！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/2jnin7TqbUiy3-k1IAqaeg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UJ1KAf6S6AAbVq1kGhTw290.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 307,
                stick: 0,
                newId: 313,
                newsTypeName: "好文"
            }, {
                title: "还在趁热吃？！小心一种病到访",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Ygo9HJpTMDNqtZ8GCHSkDA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UJrGAGjdXAAVutWWHlAQ131.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 59,
                stick: 0,
                newId: 311,
                newsTypeName: "好文"
            }, {
                title: "女人神秘的一生都与它有关~",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/o0bPDuOvH1fhGlJrzCh6VA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UJUuALOJ4AAaKHlN86G0163.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 130,
                stick: 0,
                newId: 309,
                newsTypeName: "好文"
            }, {
                title: "血管里面放个架，到底能干啥？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/k3nwXtbHrJyUHb---SOb3g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UJMyAc3I0AAN-XpSlkRo732.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 132,
                stick: 0,
                newId: 308,
                newsTypeName: "好文"
            }, {
                title: "益生菌虽好，却不能乱用",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/jR7_nddSaeKZ_mNNuYRJWA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UJFGASBtmAAbBaraqeeE376.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 231,
                stick: 0,
                newId: 306,
                newsTypeName: "好文"
            }, {
                title: "睡不安稳是个大问题，你真的需要医生给你专业的意见了！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/K43TsxAAnjzOrrYBz5gpkw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UIqeAGPSsAAJYleZ9xSY090.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 184,
                stick: 0,
                newId: 305,
                newsTypeName: "好文"
            }, {
                title: "春天花会开，鼻炎也回来",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/OdPdSSQCX0tgEmfp5EoqPg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4UIjKAWofRAAO8hxX1WAM312.png",
                publishDate: "20200107",
                newsType: "1",
                readAmount: 96,
                stick: 0,
                newId: 303,
                newsTypeName: "好文"
            }, {
                title: "让我如何更爱你，我的小“心肝”",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/UPnq-FkZSwki91GNt6ULQw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4Sk3uAOFAOAAQZARK4LtY185.png",
                publishDate: "20200106",
                newsType: "1",
                readAmount: 76,
                stick: 0,
                newId: 302,
                newsTypeName: "好文"
            }, {
                title: "鼻出血、牙龈出血、月经增多……，这些小毛病的根源可能是它！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/nnhD6DR1e5rEPnkfupkDCg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4SkveAbarCAAZskXpdZJM164.png",
                publishDate: "20200106",
                newsType: "1",
                readAmount: 212,
                stick: 0,
                newId: 300,
                newsTypeName: "好文"
            }, {
                title: "按年龄、性别、职业，体检套餐你选对了吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/lIAaFu1KlexvaNtFC_sgsw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4SkmWAOxdaAAdrTtjjAIU321.png",
                publishDate: "20200106",
                newsType: "1",
                readAmount: 106,
                stick: 0,
                newId: 299,
                newsTypeName: "好文"
            }, {
                title: "胖小孩家长注意啦！胖对肾有伤害！肾脏科明天义诊！！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/1P4-yxcSPTxQBo7hF2pv5w",
                publishDate: "20200106",
                newsType: "1",
                readAmount: 77,
                stick: 0,
                newId: 297,
                newsTypeName: "好文"
            }, {
                title: "胃镜，一颗胶囊就能搞定？不插管！不麻醉！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/3GIqQc0hlzd675oiIeyPMA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4SkX6Aeo2WAAJcBi_JKAA006.png",
                publishDate: "20200106",
                newsType: "1",
                readAmount: 244,
                stick: 0,
                newId: 295,
                newsTypeName: "好文"
            }, {
                title: "血压平稳了就可以停药吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/NSNTdTV5d-KcgsYB9Ey5Aw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4SkKuAfIbwAAoiuoeD4H4580.png",
                publishDate: "20200106",
                newsType: "1",
                readAmount: 99,
                stick: 0,
                newId: 293,
                newsTypeName: "好文"
            }, {
                title: "HPV疫苗辽宁省最新最全咨询预约方式看这里哟！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/PI7ZUxYO6mUDUCxvatsMXg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4AGRWAEgL6AAVmk3CJ1lA942.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 391,
                stick: 0,
                newId: 292,
                newsTypeName: "好文"
            }, {
                title: "叫醒你的竟然不是梦想？是尿！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/vVT0edtgNavizt11hVF2sg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4AERyASWoJAAOMNTfI8io712.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 78,
                stick: 0,
                newId: 290,
                newsTypeName: "好文"
            }, {
                title: "给孩子喂药，不可“强攻”！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/RmoA2PVWlWTgf4kvwk3_PA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4AEE-AJJRpAAaVmBzklNY983.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 70,
                stick: 0,
                newId: 289,
                newsTypeName: "好文"
            }, {
                title: "种瓜得瓜 种豆得豆 怎么种宝宝才优秀",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/jnKv5cl3hMVOloty_xfHPQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4AD7WAQdqIABJmHilL7j0426.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 77,
                stick: 0,
                newId: 287,
                newsTypeName: "好文"
            }, {
                title: "被遗忘的沉默杀手——卵巢癌",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/UbODbI65ejaXoYf29Im5xw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ADxiASz7SAAV--cCAjGE686.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 151,
                stick: 0,
                newId: 285,
                newsTypeName: "好文"
            }, {
                title: "眼前突然一黑，究竟发生了什么？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/E-YuqU7aolQ0b9MMtwGdcg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ADcSAY-gRAANvHXjtRE0825.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 99,
                stick: 0,
                newId: 284,
                newsTypeName: "好文"
            }, {
                title: "失聪宝宝的福音来啦！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/do0SpMwO3k7qVeuMgfqMgg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ADKmAPJPyAATvTx9rOPY878.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 42,
                stick: 0,
                newId: 282,
                newsTypeName: "好文"
            }, {
                title: "打嗝 你需要引起重视",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/zSEau6KiFtiX7dE8JwEKWg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ADEyAEqw2AAMSxfmKQoY454.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 125,
                stick: 0,
                newId: 280,
                newsTypeName: "好文"
            }, {
                title: "越老，个头越矮，原来是骨头有孔",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/kwHuDpyyq0f-tnd9z1hu7g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4AC_WAOr42AAdtgnisRDQ010.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 63,
                stick: 0,
                newId: 278,
                newsTypeName: "好文"
            }, {
                title: "让我们分分啥是痤疮？啥是毛囊炎？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/SWKQsB74EFkFZwIkcqgNUQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ACweAYXWGAAasqiFl8sY253.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 89,
                stick: 0,
                newId: 276,
                newsTypeName: "好文"
            }, {
                title: "胖女人真的有福吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/AQjiJSupAI400cCj4HuF2w",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ACnSARx11AAa5W0vTJy4411.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 88,
                stick: 0,
                newId: 274,
                newsTypeName: "好文"
            }, {
                title: "将长期输液变成一件简单的事……",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Ke4xIzH23fZo3YNDxf89mw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ACgKAQik8AAWZe3YIzI8656.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 48,
                stick: 0,
                newId: 272,
                newsTypeName: "好文"
            }, {
                title: "手术，在这里你可以对刀口say no",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/jsoIEDGuKipiZtI6biel9w",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ACHGAJNkCAAHsw7Za_Go390.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 87,
                stick: 0,
                newId: 271,
                newsTypeName: "好文"
            }, {
                title: "头痛，你需要的并不是止痛药",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/wpdqa5oUsk3dr4hwy80Oiw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4AB3OACvmmAAfacsMYWGo261.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 113,
                stick: 0,
                newId: 269,
                newsTypeName: "好文"
            }, {
                title: "肥胖 多毛 痤疮 月经失调……也许这个病导致的",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/-gjTg-abajhb0i2bfKuPag",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ABUeALxLoAAlhCeNNvVA979.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 166,
                stick: 0,
                newId: 267,
                newsTypeName: "好文"
            }, {
                title: "扁桃体，总出风头需要切掉吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/q7rNTzmqgrxQ125iTvEgVQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ABMSARAIAAAH2mcrYP5U679.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 84,
                stick: 0,
                newId: 265,
                newsTypeName: "好文"
            }, {
                title: "知否，知否，妊娠的隐形杀手？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/PuPhRxZkh0HiIEnBoSap3g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV4ABGSAFhF8AAN56vdT7Ec613.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 132,
                stick: 0,
                newId: 263,
                newsTypeName: "好文"
            }, {
                title: "大鱼大肉、酗酒……小心你的“胰”来找你",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/yvYoq8hNkKXzEch5DLfIog",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3__-WARXGMAAe2NQrHL8M482.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 47,
                stick: 0,
                newId: 262,
                newsTypeName: "好文"
            }, {
                title: "寒假过半，有一件重要的事情你带孩子做了吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Wruan2f4YXzR3s_HgDlWkA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3__3aAJ0-bAAUmjfVP5Xw637.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 45,
                stick: 0,
                newId: 260,
                newsTypeName: "好文"
            }, {
                title: "这可是一种可以预防的癌症哦~",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/HQKxwme_1uctLFWvWaDYGA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3__xeACMJrAAidsrC4d_s403.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 72,
                stick: 0,
                newId: 258,
                newsTypeName: "好文"
            }, {
                title: "它竟然能治愈白血病？！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Sz8Qov-IQzp6HShYG0xOiQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3__piAQlX3AA2UWDIOJrE948.png",
                publishDate: "20191223",
                newsType: "1",
                readAmount: 88,
                stick: 0,
                newId: 256,
                newsTypeName: "好文"
            }, {
                title: "“头发一根一根掉，心碎了一声又一声”",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/fTnQENcy2eQ_2gPFRY0mbg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3-RAGAIi67AAEVmDKHzLo832.png",
                publishDate: "20191222",
                newsType: "1",
                readAmount: 119,
                stick: 0,
                newId: 254,
                newsTypeName: "好文"
            }, {
                title: "宝宝家长请注意：小愣神有大危害",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/hjdC3pL2w2WjYyVHjLOIAA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3-Q7KAUluRAAMH2AZghN4272.png",
                publishDate: "20191222",
                newsType: "1",
                readAmount: 81,
                stick: 0,
                newId: 252,
                newsTypeName: "好文"
            }, {
                title: "女人最重要部位的结节可怕不",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/buLsZt3myppu2oAgCLIMjQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3-Q0aAZrUVAAZleFQ-ecg643.png",
                publishDate: "20191222",
                newsType: "1",
                readAmount: 149,
                stick: 0,
                newId: 250,
                newsTypeName: "好文"
            }, {
                title: "干 涩 刺痛 你的眼睛还好吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/pKnI_hr9bf4lhjWVXCBTQQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3-QtuAX3a5AAVhaH9koeM156.png",
                publishDate: "20191222",
                newsType: "1",
                readAmount: 71,
                stick: 0,
                newId: 248,
                newsTypeName: "好文"
            }, {
                title: "女人的那些烦心事……",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/gO9ZFiMan9Zvr5rvu5aCIw",
                publishDate: "20191222",
                newsType: "1",
                readAmount: 92,
                stick: 0,
                newId: 246,
                newsTypeName: "好文"
            }, {
                title: "辟谣！蜡烛包危害大着呢！不要再这么做了！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/u7TGXJdpKyPgWTkD-C5uCQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3-Qf2AFgflAAEv9lQlDag845.png",
                publishDate: "20191222",
                newsType: "1",
                readAmount: 32,
                stick: 0,
                newId: 244,
                newsTypeName: "好文"
            }, {
                title: "室内湿度怎么加更合适？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/7tMJiO6xizx-OA0nM2wQMw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3-QYmANQ_QAAjhsj6q28Y875.png",
                publishDate: "20191222",
                newsType: "1",
                readAmount: 35,
                stick: 0,
                newId: 242,
                newsTypeName: "好文"
            }, {
                title: "吞咽功能障碍是可以康复治疗的，你信不！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/7I6YOZynZBudf1NFmhnVDg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3-QSmAGiPCAAKJUoETwPg235.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 51,
                stick: 0,
                newId: 240,
                newsTypeName: "好文"
            }, {
                title: "滑雪这种高风险运动你害怕吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/ZxlZc4T98aHvSpVCkllMEw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/02/rBzrtV3-QLyAUXM3AAbT8isd4d0466.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 32,
                stick: 0,
                newId: 238,
                newsTypeName: "好文"
            }, {
                title: "千万别碰高血压的“高压线”",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/X-3TiXrXK6nazR1IrQcjow",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-P9eAEpXaAASSHOLzeSM467.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 57,
                stick: 0,
                newId: 234,
                newsTypeName: "好文"
            }, {
                title: "“漏斗胸”，是个什么“凶”？！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/8OMuvv93aKNIe2LxXJ4zPw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-P3yABpapAAOs9wDqoh8449.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 82,
                stick: 0,
                newId: 232,
                newsTypeName: "好文"
            }, {
                title: "看病如此简单——盛京医院就诊流程详解！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/sY9E3nZz_X9OwdWOQBQtmA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-Pw6AF1tAAAUckfQoESE864.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 129,
                stick: 0,
                newId: 230,
                newsTypeName: "好文"
            }, {
                title: "还在小看这个动作吗，它有可能夺命啊！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/BJZknfKMvwhVZ1KU72-Z1g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-PpGANHThAAXGrJR90cc654.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 42,
                stick: 0,
                newId: 228,
                newsTypeName: "好文"
            }, {
                title: "生命的最后，我们陪你走过",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/bJ2QJzafj1O8bpujhZMsDg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-PhaABhtIAAqmUOpBEVw587.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 47,
                stick: 0,
                newId: 226,
                newsTypeName: "好文"
            }, {
                title: "孕妇做过这种检查，宝宝还能留吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Im_ju8TCqvLH1agTg-WVMw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-PbiAdhObAAU44S74rU8378.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 154,
                stick: 0,
                newId: 224,
                newsTypeName: "好文"
            }, {
                title: "还在吃螃蟹、喝啤酒，这种痛你忍得了吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/zB6Z5bAwLLA4oQe8P8apYQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-PVOAbgBHAAS9_CGvAQg979.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 39,
                stick: 0,
                newId: 222,
                newsTypeName: "好文"
            }, {
                title: "性早熟是吃出来的吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Bs-NQLVs-DPk7IymZCj64g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-PNuAb0MBAA3RELRhbA8310.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 105,
                stick: 0,
                newId: 221,
                newsTypeName: "好文"
            }, {
                title: "有种检查，让你轻松一觉，统统到位",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/6yFL-WbMJYrxa6l1I4WOWg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-PGKAC71LAAWEKyrMRXI752.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 49,
                stick: 0,
                newId: 219,
                newsTypeName: "好文"
            }, {
                title: "9价HPV疫苗即将在辽宁全面上市！你关心的问题，这里都有~",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Hw_GELGc1heBP5MJ8b_6Zg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-O_-APpvgAAi1fB6aj3o130.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 113,
                stick: 0,
                newId: 217,
                newsTypeName: "好文"
            }, {
                title: "“缠腰龙”“蛇盘疮”“腰缠火丹”到底是什么病?",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/FpvHXevOqHRAF1ElAYVFCg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-O3mAJfnwAAo5Cw1qOsU588.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 73,
                stick: 0,
                newId: 215,
                newsTypeName: "好文"
            }, {
                title: "流感肆虐，该吃什么药？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/eFMmZbpVIe9bLtoSlbnbhQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-OwmABPqXAAmDlhH9RDQ049.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 43,
                stick: 0,
                newId: 213,
                newsTypeName: "好文"
            }, {
                title: "口臭是病，得治",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/De61RYHhaBlyoiw3EPvdFQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-OiWAerloAAJ1O2D9guU305.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 181,
                stick: 0,
                newId: 212,
                newsTypeName: "好文"
            }, {
                title: "爸（A）+妈（B）\u003d孩（?）",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/aIrS_LD3LdBK5U3q2RXc6w",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV3-ORyAci8zAAK93iHlEzw757.png",
                publishDate: "20191221",
                newsType: "1",
                readAmount: 68,
                stick: 0,
                newId: 211,
                newsTypeName: "好文"
            }, {
                title: "自然分娩四部曲，你都有准备吗？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Zu51w-8Kk2PbB_dP2XJN9g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38qSGAMt_-AAYWrFES90A092.png",
                publishDate: "20191220",
                newsType: "1",
                readAmount: 67,
                stick: 0,
                newId: 210,
                newsTypeName: "好文"
            }, {
                title: "请注意！这几种疼痛发生时，心梗大军即将袭击你",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/g4PeJvktmt_uBMB9KQrWMg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38qBWAaxcvAAkd3BOyClk381.png",
                publishDate: "20191220",
                newsType: "1",
                readAmount: 106,
                stick: 0,
                newId: 208,
                newsTypeName: "好文"
            }, {
                title: "忘记吃药了，怎么办？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/fRyBTIYi7LiOdDPUd90rYg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38p46AbvDiAAvtYKz1Mmc319.png",
                publishDate: "20191220",
                newsType: "1",
                readAmount: 58,
                stick: 0,
                newId: 206,
                newsTypeName: "好文"
            }, {
                title: "体检前，需要注意些什么呢？",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/QctN_OqWjpNZ4CQQlA_3AA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38pxuAJigeAALWIjvEkH0971.png",
                publishDate: "20191220",
                newsType: "1",
                readAmount: 92,
                stick: 0,
                newId: 204,
                newsTypeName: "好文"
            }, {
                title: "微创手术，拯救你的老腰",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/dCMnCWRcEae8iFKShcU9QQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38pheAPDImAAcysv7n3bU720.png",
                publishDate: "20191220",
                newsType: "1",
                readAmount: 139,
                stick: 0,
                newId: 202,
                newsTypeName: "好文"
            }, {
                title: "【医疗】年轻女子命悬一线 盛京医护妙手回春",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Qugi3DRM4FwUefsvrNoNXg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38nWyADVE9AA61NEfdV2s095.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 26,
                stick: 0,
                newId: 190,
                newsTypeName: "好术"
            }, {
                title: "【医疗】珍“膝”有你 陪伴一起 年过六旬夫妻同一天在院进行人工膝关节置换手术",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/2jjN_ZI1kIkfkdBBwk7hjg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38ne2AErciAA6W414g5Lw904.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 27,
                stick: 0,
                newId: 188,
                newsTypeName: "好术"
            }, {
                title: "【医疗】妇科盆底疾病病房顺利抢救一名流产后胎盘滞留伴重度瘢痕植入、大出血危重症患者",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/TromRIWnyyo3cyyOH5AO5Q",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38nIGAaerHAAHGRAEjLvY071.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 31,
                stick: 0,
                newId: 186,
                newsTypeName: "好术"
            }, {
                title: "【医疗】第一骨科 脊柱关节外科病房院内首次开展复杂双髋、双膝关节置换手术",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Iit2VgrG3Gea-QjFYZBl5Q",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38nBOAQUAzAAa7XlnnTX8331.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 30,
                stick: 0,
                newId: 184,
                newsTypeName: "好术"
            }, {
                title: "【医疗】产科多学科协作团队成功救治先天性膈疝患儿",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/EZVwuTiYRPbQOw9LcusdAw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38m5SACQBpAA0YEIys1Ts049.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 22,
                stick: 0,
                newId: 182,
                newsTypeName: "好术"
            }, {
                title: "【医疗】医院完成东北地区泌尿外科首例长期骶神经刺激器（膀胱起搏器）",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/5o7wnvtWroSvbdsTsxucFw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38mySAd1tnAAzTLxKtb4g183.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 36,
                stick: 0,
                newId: 180,
                newsTypeName: "好术"
            }, {
                title: "【医疗】麻醉三科为耄耋老人行神经阻滞麻醉 助力老人重获健康",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/j6n9n0bGagkkWfoMSxJ6VA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38ml6AMEVSAAWCYjrkiIo277.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 22,
                stick: 0,
                newId: 178,
                newsTypeName: "好术"
            }, {
                title: "【医疗】手术机器人助力医院神经外科顺利完成多例复杂手术",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/qObROOEzyUcijK7kfxVBlA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38mc2AOQiRABQ3iqUi3ZE632.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 35,
                stick: 0,
                newId: 177,
                newsTypeName: "好术"
            }, {
                title: "【医疗】我院多科室协作 顺利实施院内最小月龄体外循环心外手术",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/_6OMlpffRSYgpULWwelp0A",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38mQWAfnHDAARgfouhF2Q427.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 24,
                stick: 0,
                newId: 175,
                newsTypeName: "好术"
            }, {
                title: "【医疗】跨越千里的“疼痛救赎”",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/NhPQBSbldF_HNPrkWTFlWw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38mI-AD6-4AAqELEqdyqk198.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 22,
                stick: 0,
                newId: 173,
                newsTypeName: "好术"
            }, {
                title: "【医疗】急诊科成功抢救一名大量心包积液患者",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/o4WmGgUoGCn6qJ6Cv8xa3g",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38mCOAcqF7AA-NXJj69s0724.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 23,
                stick: 0,
                newId: 171,
                newsTypeName: "好术"
            }, {
                title: "【医疗】神经外科院内首次开展机器人辅助DBS植入技术",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/SZrEjPM21Oup9IBqpTh_mQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38l7SAbMMXAAxLiVaGP-0196.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 23,
                stick: 0,
                newId: 169,
                newsTypeName: "好术"
            }, {
                title: "【医疗】第六产科病房医护人员妙手演绎臀位外倒转术 圆孕妈顺娩梦",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/HBTd2GeTZZAlMbqRM6k3Ig",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38lrSAaTcxAA15WdKx2G0723.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 30,
                stick: 0,
                newId: 167,
                newsTypeName: "好术"
            }, {
                title: "【医疗】三维重建助力胸外科完成多例精准肺段切除术",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/tDWHM051v_kDrSK_DKA9wg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38nn2AYH4mAAfpQsbj3JA372.png",
                publishDate: "20191220",
                newsType: "4",
                readAmount: 25,
                stick: 0,
                newId: 165,
                newsTypeName: "好术"
            }, {
                title: "【文化】新起点 新作为 参加医院2019年护士长管理培训有感",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/wulUUJ8b-KAiKnnvQgXBWg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38gkWATgYDAA_ae__Dyps726.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 22,
                stick: 0,
                newId: 161,
                newsTypeName: "好人"
            }, {
                title: "【文化】美好生活要靠脚踏实地 ——参观辽宁省反腐倡廉展览馆有感",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Xgh3sGCn-qPwcMMAtBxPvQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38gZSAZvujAA3buCXnids431.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 26,
                stick: 0,
                newId: 159,
                newsTypeName: "好人"
            }, {
                title: "【文化】第一新生儿内科病房副主任医师张丹援青海感言",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/-QkZiBbQo-DVZBRiEGtjDA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38gS2AO1whAA5VEdIArV4154.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 26,
                stick: 0,
                newId: 157,
                newsTypeName: "好人"
            }, {
                title: "【文化】努力发挥余热 助力医院发展 医院退休职工魏克伦教授的心声",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/OiZqLnRlNQ9vwa0rgB4EIA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38gLGAVYc5AAqr726k7d0530.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 23,
                stick: 0,
                newId: 155,
                newsTypeName: "好人"
            }, {
                title: "【文化】援疆有情 医者无悔",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/MZLOD4cicvoH4zZuIjlPCA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38gCaAJTWsAAnMTQqODb8657.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 23,
                stick: 0,
                newId: 154,
                newsTypeName: "好人"
            }, {
                title: "【扶贫】医心驻乡野——医院精准扶贫驻村干部工作纪实",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/ub8-MvzrC3RfJvjtuoxjAw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38fj-AQNmuABCwyT2UKfk420.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 25,
                stick: 0,
                newId: 151,
                newsTypeName: "好人"
            }, {
                title: "【援疆】开启援疆路 续写援疆情 医院援疆医疗队队员感言",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/Gq34gYpDOxyQAKPYfW4lXA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38fbeAEng-AA4uNrGPOZs901.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 24,
                stick: 0,
                newId: 149,
                newsTypeName: "好人"
            }, {
                title: "【援非】重任在肩 奋然无悔——辽宁省第二批援冈比亚医疗队队员",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/02axvp191IQHUCUswF7Svw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38fRKAcU8lAAo_AlbiEBQ673.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 24,
                stick: 0,
                newId: 147,
                newsTypeName: "好人"
            }, {
                title: "【最美】5月15日在路边施救的天使，找到了！",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/C6IJiYCFY062nNtPL7IBdg",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38fH-AGYgsAA-JdkZtdrA406.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 25,
                stick: 0,
                newId: 145,
                newsTypeName: "好人"
            }, {
                title: "【护理】“磁性护理”：将爱播撒进每一个护士的心",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/cS_MeA16NQlEb_mJRADCfw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38e--Acx6AABND9bidgIk040.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 24,
                stick: 0,
                newId: 143,
                newsTypeName: "好人"
            }, {
                title: "【感言】“你们是最美的天使！” 医院第二新生儿内科病房护士家属护理体验感言",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/82i3AW49uQ466W888K7CBw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38e2yARYLSAA1XGgSHn2s798.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 29,
                stick: 0,
                newId: 141,
                newsTypeName: "好人"
            }, {
                title: "【援非】我院与冈比亚斯莫医院间妇产科领域合作项目再结硕果",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/hu394nXj7plRQiPLP6oGxA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38eqCAKyM-AA2KBFpkZ3k694.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 27,
                stick: 0,
                newId: 139,
                newsTypeName: "好人"
            }, {
                title: "【心得】学而时习之，不亦悦乎——遇见“学习强国”有感",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/TCzPg4NdISY-cFVUEcVJ1w",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38eFeAD3jrAAnxkt8s660295.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 27,
                stick: 0,
                newId: 137,
                newsTypeName: "好人"
            }, {
                title: "【援非】盛京精神助我砥砺前行",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/P3vsLgK2e9iTL4ccUUmsTQ",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38d4-AVZyNAA2a-ibSaaM066.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 30,
                stick: 0,
                newId: 136,
                newsTypeName: "好人"
            }, {
                title: "【感言】这段宝贵的经历值得我一生珍藏",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/9qY1hG8teKDHFG7QKKpuBw",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38dsmABqV2AAut8HhvT4Q981.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 31,
                stick: 0,
                newId: 135,
                newsTypeName: "好人"
            }, {
                title: "医者驻他乡 思念亦无悔",
                desc: "",
                newsUrl: "https://mp.weixin.qq.com/s/o8oa6WHo3KbcnEZTn0vnCA",
                newsImgeUrl: "http://sjres.daxiang91.com/elho/M00/00/01/rBzrtV38c-WAaSjNAAjuoFvh3LA383.png",
                publishDate: "20191220",
                newsType: "3",
                readAmount: 43,
                stick: 0,
                newId: 130,
                newsTypeName: "好人"
            }
        ]
    });
});


module.exports = router;