import React from 'react';
import { Picker, List, WhiteSpace, DatePicker, Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import { fetchpost } from '../../utils/zgfetch';
import NavBack from "../../components/navback";
import "./order.scss"

const keshiList = [
    {
        label: '核酸检测门诊',
        value: '核酸检测门诊',
        children: [
            {
                label: '核酸检测筛查',
                value: '核酸检测筛查',
            },
        ],
    },
    {
        label: '特需门诊',
        value: '特需门诊',
        children: [
            {
                label: '特需门诊',
                value: '特需门诊',
            },
        ],
    },
    {
        label: '儿科特需',
        value: '儿科特需',
        children: [
            {
                label: '小儿喘息及慢咳门诊',
                value: '小儿喘息及慢咳门诊',
            },
            {
                label: '小儿发热及呼吸道感染门诊',
                value: '小儿发热及呼吸道感染门诊',
            },
            {
                label: '小儿内分泌生长发育门诊',
                value: '小儿内分泌生长发育门诊',
            },
            {
                label: '小儿神经内科门诊',
                value: '小儿神经内科门诊',
            },
            {
                label: '小儿消化内科门诊',
                value: '小儿消化内科门诊',
            },
            {
                label: '新生儿内科门诊',
                value: '新生儿内科门诊',
            },
            {
                label: '小儿心血管内科门诊',
                value: '小儿心血管内科门诊',
            },
            {
                label: '小儿普通外科',
                value: '小儿普通外科',
            },
            {
                label: '小儿骨科门诊',
                value: '小儿骨科门诊',
            },
            {
                label: '新生儿外科门诊',
                value: '新生儿外科门诊',
            },
            {
                label: '胎儿畸形产前诊断门诊',
                value: '胎儿畸形产前诊断门诊',
            },
            {
                label: '小儿泌外门诊',
                value: '小儿泌外门诊',
            },
            {
                label: '发育儿科门诊',
                value: '发育儿科门诊',
            },
        ],
    },
    {
        label: '内科',
        value: '内科',
        children: [
            {
                label: '消化内科',
                value: '消化内科',
            },
            {
                label: '血液内科',
                value: '血液内科',
            },
            {
                label: '肾脏内科',
                value: '肾脏内科',
            },
            {
                label: '风湿免疫科',
                value: '风湿免疫科',
            },
            {
                label: '第一血液净化中心',
                value: '第一血液净化中心',
            },
            {
                label: '第一腹透专科门诊',
                value: '第一腹透专科门诊',
            },
            {
                label: '炎症性肠病',
                value: '炎症性肠病',
            },
            {
                label: '心脏瓣膜疾病',
                value: '心脏瓣膜疾病',
            },
            {
                label: '心率失常房颤门诊',
                value: '心率失常房颤门诊',
            },
            {
                label: '昏厥门诊',
                value: '昏厥门诊',
            },
            {
                label: '慢阻肺特病门诊',
                value: '慢阻肺特病门诊',
            },
            {
                label: '肺部结节特病门诊',
                value: '肺部结节特病门诊',
            },

        ],
    },
    {
        label: '外科',
        value: '外科',
        children: [
            {
                label: '第一外胰腺甲状腺外科',
                value: '第一外胰腺甲状腺外科',
            },
            {
                label: '第二普外 肝胆外科、微创外科',
                value: '第二普外 肝胆外科、微创外科',
            },
            {
                label: '第三普外肠胃营养减肥外科',
                value: '第三普外肠胃营养减肥外科',
            },
            {
                label: '第四普外结肠直肠肿瘤外科',
                value: '第四普外结肠直肠肿瘤外科',
            },
            {
                label: '第五普外肝胆脾外科',
                value: '第五普外肝胆脾外科',
            },
            {
                label: '第六普外肝胆血管外科',
                value: '第六普外肝胆血管外科',
            },
            {
                label: '第八普外结直肠肛门病外科',
                value: '第八普外结直肠肛门病外科',
            },
            {
                label: '第九普外胰腺内分泌外科',
                value: '第九普外胰腺内分泌外科',
            },
            {
                label: '第十普外胆道消化肿瘤外科',
                value: '第十普外胆道消化肿瘤外科',
            },
            {
                label: '第十一普外结直肠疝微创外科',
                value: '第十一普外结直肠疝微创外科',
            },
            {
                label: '第一肿瘤外科乳腺肿瘤外科一门诊',
                value: '第一肿瘤外科乳腺肿瘤外科一门诊',
            },
            {
                label: '第二肿瘤外科乳腺肿瘤外科二门诊',
                value: '第二肿瘤外科乳腺肿瘤外科二门诊',
            },
            {
                label: '整形美容科',
                value: '整形美容科',
            },
            {
                label: '心脏外科',
                value: '心脏外科',
            },
            {
                label: '第一骨科 脊柱骨科',
                value: '第一骨科 脊柱骨科',
            },
            {
                label: '关节外科',
                value: '关节外科',
            },
            {
                label: '第二骨科 脊柱外科',
                value: '第二骨科 脊柱外科',
            },
            {
                label: '第三骨科 手足踝显微外科',
                value: '第三骨科 手足踝显微外科',
            },
            {
                label: '第四骨科 关节外科',
                value: '第四骨科 关节外科',
            },
            {
                label: '运动医学科',
                value: '运动医学科',
            },

        ],
    },
    {
        label: '妇产科',
        value: '妇产科',
        children: [
            {
                label: '妇科门诊',
                value: '妇科门诊',
            },
            {
                label: '产科门诊',
                value: '产科门诊',
            },
            {
                label: '计划生育门诊',
                value: '计划生育门诊',
            },
            {
                label: '宫腔疾病专科门诊',
                value: '宫腔疾病专科门诊',
            },
            {
                label: '更年期/卵巢衰老门诊',
                value: '更年期/卵巢衰老门诊',
            },
            {
                label: '妇科肿瘤专科门诊',
                value: '妇科肿瘤专科门诊',
            },
            {
                label: '盆底疾病专科门诊',
                value: '盆底疾病专科门诊',
            },
            {
                label: '宫腔镜专病门诊',
                value: '宫腔镜专病门诊',
            },
            {
                label: '双胎妊娠专科门诊',
                value: '双胎妊娠专科门诊',
            },
            {
                label: '高危妊娠专科门诊',
                value: '高危妊娠专科门诊',
            },
            {
                label: '孕期营养专科门诊',
                value: '孕期营养专科门诊',
            },
            {
                label: '胎盘疾病专科门诊',
                value: '胎盘疾病专科门诊',
            },
            {
                label: '胎儿医学专科门诊',
                value: '胎儿医学专科门诊',
            },
            {
                label: '高龄妊娠专科门诊',
                value: '高龄妊娠专科门诊',
            },
            {
                label: '妊娠并发症专科门诊',
                value: '妊娠并发症专科门诊',
            },
            {
                label: '分娩镇痛专科门诊',
                value: '分娩镇痛专科门诊',
            },
            {
                label: '宫颈机能不全与早产',
                value: '宫颈机能不全与早产',
            },
            {
                label: '乙肝母婴阻断门诊',
                value: '乙肝母婴阻断门诊',
            },
        ],
    },
    {
        label: '小儿内科',
        value: '小儿内科',
        children: [
            {
                label: '儿科普通门诊',
                value: '儿科普通门诊',
            },
            {
                label: '小儿新生儿内科',
                value: '小儿新生儿内科',
            },
            {
                label: '小儿呼吸内科',
                value: '小儿呼吸内科',
            },
            {
                label: '小儿消化内科',
                value: '小儿消化内科',
            },
            {
                label: '小儿心血管内科',
                value: '小儿心血管内科',
            },
            {
                label: '小儿神经内科',
                value: '小儿神经内科',
            },
        ],
    },
    {
        label: '小儿外科',
        value: '小儿外科',
        children: [
            {
                label: '小儿普外门诊',
                value: '小儿普外门诊',
            },
            {
                label: '小儿泌外门诊',
                value: '小儿泌外门诊',
            },
            {
                label: '小儿骨科门诊',
                value: '小儿骨科门诊',
            },
            {
                label: '新生儿外科门诊',
                value: '新生儿外科门诊',
            },
            {
                label: '便秘门诊',
                value: '便秘门诊',
            },
            {
                label: '腹痛门诊',
                value: '腹痛门诊',
            },
            {
                label: '儿童肛肠病',
                value: '儿童肛肠病',
            },
        ],
    },
    {
        label: '发育儿科',
        value: '发育儿科',
        children: [
            {
                label: '发育儿科门诊',
                value: '发育儿科门诊',
            },
        ],
    },
    {
        label: '肝病、感染科',
        value: '肝病、感染科',
        children: [
            {
                label: '肝病、感染科',
                value: '肝病、感染科',
            },
            {
                label: '疑难和罕见肝病门诊',
                value: '疑难和罕见肝病门诊',
            },
            {
                label: '药物性肝损伤特色门诊',
                value: '药物性肝损伤特色门诊',
            },
        ],
    },
    {
        label: '神经内科',
        value: '神经内科',
        children: [
            {
                label: '神经内科',
                value: '神经内科',
            },
            {
                label: '帕金森门诊',
                value: '帕金森门诊',
            },
            {
                label: '记忆障碍门诊',
                value: '记忆障碍门诊',
            },
            {
                label: '癫痫门诊',
                value: '癫痫门诊',
            },
            {
                label: '头晕 眩晕门诊',
                value: '头晕 眩晕门诊',
            },
        ],
    },
    {
        label: '眼科门诊',
        value: '眼科门诊',
        children: [
            {
                label: '眼科门诊',
                value: '眼科门诊',
            },
            {
                label: '全飞秒近视手术中心',
                value: '全飞秒近视手术中心',
            },
            {
                label: '干眼门诊',
                value: '干眼门诊',
            },
        ],
    },
    {
        label: '耳鼻喉科',
        value: '耳鼻喉科',
        children: [
            {
                label: '耳科',
                value: '耳科',
            },
            {
                label: '鼻科',
                value: '鼻科',
            },
            {
                label: '咽喉科',
                value: '咽喉科',
            },
        ],
    },
    {
        label: '口腔门诊',
        value: '口腔门诊',
        children: [
            {
                label: '口腔综合门诊',
                value: '口腔综合门诊',
            },
            {
                label: '口腔颌面外科',
                value: '口腔颌面外科',
            },
        ],
    },
    {
        label: '皮肤科',
        value: '皮肤科',
        children: [
            {
                label: '皮肤科门诊',
                value: '皮肤科门诊',
            },
        ],
    },
    {
        label: '中医科',
        value: '中医科',
        children: [
            {
                label: '中医科门诊',
                value: '中医科门诊',
            },
        ],
        children: [
            {
                label: '心病门诊',
                value: '心病门诊',
            },
        ],
        children: [
            {
                label: '脾胃病门诊',
                value: '脾胃病门诊',
            },
        ],
        children: [
            {
                label: '中医脑病',
                value: '中医脑病',
            },
        ],
        children: [
            {
                label: '中医妇科',
                value: '中医妇科',
            },
        ],
        children: [
            {
                label: '中医儿科',
                value: '中医儿科',
            },
        ],
        children: [
            {
                label: '中医肿瘤',
                value: '中医肿瘤',
            },
        ],
        children: [
            {
                label: '针灸门诊',
                value: '针灸门诊',
            },
        ],
        children: [
            {
                label: '软伤推拿门诊',
                value: '软伤推拿门诊',
            },
        ],
    },
    {
        label: '肿瘤中心',
        value: '肿瘤中心',
        children: [
            {
                label: '放射治疗门诊',
                value: '放射治疗门诊',
            },
        ],
    },
    {
        label: '干诊科',
        value: '干诊科',
        children: [
            {
                label: '干诊科',
                value: '干诊科',
            },
        ],
    },
    {
        label: '康复中心',
        value: '康复中心',
        children: [
            {
                label: '康复中心',
                value: '康复中心',
            },
        ],
    },
    {
        label: '介入血管门诊',
        value: '介入血管门诊',
        children: [
            {
                label: '第一介入科',
                value: '第一介入科',
            },
            {
                label: '第二介入科',
                value: '第二介入科',
            },
        ],
    },
    {
        label: '心理科',
        value: '心理科',
        children: [
            {
                label: '心理门诊',
                value: '心理门诊',
            },
        ],
    },
    {
        label: '疼痛科',
        value: '疼痛科',
        children: [
            {
                label: '疼痛科',
                value: '疼痛科',
            },
        ],
    },
    {
        label: '营养科',
        value: '营养科',
        children: [
            {
                label: '营养科',
                value: '营养科',
            },
        ],
    },
    {
        label: '全科门诊',
        value: '全科门诊',
        children: [
            {
                label: '全科门诊',
                value: '全科门诊',
            },
        ],
    },
    {
        label: '临床遗传科',
        value: '临床遗传科',
        children: [
            {
                label: '临床遗传科',
                value: '临床遗传科',
            },
        ],
    },
    {
        label: '麻醉科',
        value: '麻醉科',
        children: [
            {
                label: '麻醉科',
                value: '麻醉科',
            },
        ],
    },
];

const leixing = [
    {
        label: '初诊',
        value: '初诊',
    },
    {
        label: '复诊',
        value: '复诊',
    },

];

const doctor = [
    {
        label: '专家',
        value: '专家',
        children: [
            {
                label: '王振海',
                value: '王振海',
            },
            {
                label: '白伟良',
                value: '白伟良',
            },
            {
                label: '杨静',
                value: '杨静',
            },
            {
                label: '曹志伟',
                value: '曹志伟',
            },
        ],
    },
    {
        label: '普通',
        value: '普通',
        children: [
            {
                label: '金明珠',
                value: '金明珠',
            },
            {
                label: '边志刚',
                value: '边志刚',
            },
            {
                label: '陈晓秋',
                value: '陈晓秋',
            },
            {
                label: '张溪夏',
                value: '张溪夏',
            },
            {
                label: '刘天聪',
                value: '刘天聪',
            },
            {
                label: '赵鹤',
                value: '赵鹤',
            },
            {
                label: '于晓峰',
                value: '于晓峰',
            },
        ],
    },
];




class Order extends React.Component {
    state = {
        keshi: '',
        date: '',
        time: '',
        type: '',
        doctor: '',
    };

    //提交表单
    getCarousel = async () => {
        let jieguo = await fetchpost("/api/form", this.state);
        console.log(this.state);
        alert(jieguo);
        if (jieguo === "提交成功") {
            this.props.history.push("/");
        }
    }


    render() {
        var price = "";
        if (this.state.doctor[0] === "专家") {
            price = "25￥"
        }
        else if (this.state.doctor[0] === "普通") {
            price = "15￥"
        }

        return (<div>
            <NavBack title="挂号"></NavBack>
            <WhiteSpace size="lg" />
            <List style={{ backgroundColor: 'white' }} className="picker-list">

                <Picker
                    title="科室"
                    extra="请选择科室"
                    data={keshiList}
                    cols={2}
                    value={this.state.keshi}
                    onChange={keshi => this.setState({ keshi })}
                    onOk={e => console.log('ok', e)}
                >
                    <List.Item arrow="horizontal">科室</List.Item>
                </Picker>

                <DatePicker
                    extra="请选择日期"
                    mode="date"
                    title="就诊日期"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                    onOk={e => console.log('ok', e)}
                >
                    <List.Item arrow="horizontal">日期</List.Item>
                </DatePicker>

                <DatePicker
                    extra="请选择时间"
                    mode="time"
                    title="就诊时间"
                    minDate={new Date(2000, 1, 1, 8, 0, 0)}
                    maxDate={new Date(2030, 1, 1, 17, 59, 59)}
                    value={this.state.time}
                    onChange={
                        time => this.setState({ time })
                    }
                    onOk={e => console.log('ok', e)}
                >
                    <List.Item arrow="horizontal">时间</List.Item>
                </DatePicker>

                <Picker
                    extra="请选择类型"
                    data={leixing}
                    title="类型"
                    cols={1}
                    value={this.state.type}
                    onChange={type => this.setState({ type })}
                    className="forss"
                    onOk={e => console.log('ok', e)}
                >
                    <List.Item arrow="horizontal">类型</List.Item>
                </Picker>

                <Picker
                    extra="请选择医生"
                    data={doctor}
                    title="医生"
                    cols={2}
                    value={this.state.doctor}
                    onChange={doctor => this.setState({ doctor })}
                    onOk={e => console.log('ok', e)}
                >
                    <List.Item arrow="horizontal">医生</List.Item>
                </Picker>
                <p>{price}</p>

            </List>
            <Button type="primary" onClick={this.getCarousel}>提交订单</Button>
        </div>);
    }
}

const OrderWrapper = createForm()(Order);

export default OrderWrapper;