/**
 * Created by kimOtto on 2017/4/7.
 */

import {Platform, Dimensions} from 'react-native'
import px2dp from '../utils/px2dp'

const {width, height} = Dimensions.get('window')

export default {
    fonts: {
        font_12: px2dp(12),
        font_14: px2dp(14),
        font_16: px2dp(16),
        font_18: px2dp(18),
        font_20: px2dp(20),
        font_22: px2dp(22),
        font_24: px2dp(24),
        font_26: px2dp(26),
        font_28: px2dp(28),
        font_30: px2dp(30),
        font_32: px2dp(32),
        font_34: px2dp(34),
        font_36: px2dp(36),
        font_40: px2dp(40),
        font_42: px2dp(42),
        font_44: px2dp(44),
        font_56: px2dp(56),
    },
    colors: {
        transparent: '#00000000',
        /** 主色调，用于tab选中，突出等*/
        color_primary: '#cd7743',
        /** 辅助色调，用于按钮，突出等*/
        color_secondary: '#ff7327',
        color_primary_label: '#ff7327',
        /** 弹层色值，透明度*/
        color_popup: '#00000020',
        color_title: '#cf6431',
        black: '#000000',
        gray_all_1: '#111',
        gray_all_2: '#222',
        gray_all_3: '#333333',
        gray_all_6: '#666666',
        gray_all_9: '#999999',
        gray_all_9b: '#9b9b9b',
        gray_all_c: '#cccccc',
        gray_all_ce: '#cecece',
        gray_all_d: '#ddd',
        gray_all_e: '#eee',
        gray_eeeef0: '#eeeef0',
        gray_f112: '#f1f1f2',
        gray_f346: '#f3f4f6',
        gray_f235: '#f2f3f5',
        gray_f4f5f7: '#f4f5f7',
        gray_label_9c9c9d: '#9c9c9d',
        gray_label_9fa2a2: '#9fa2a2',
        gray_btnBg_dedfe2: '#dedfe2',
        white: '#ffffff',
        blue_header_me: '#189d90',

        color_bg_question: '#f3f6f6',

        color_blue_label: '#469ee1',

        red: '#f00',

        color_bg_myFeedBack: '#f9efd0',
        color_borderColor_dfe1e3: '#dfe1e3',
        color_borderColor_f5e5b4: '#f5e5b4',
        color_borderColor_dadadd: '#dadadd',

        /**应用标准**/
        /**分割线**/
        color_line: '#eff0f3',
        /**全局灰色背景**/
        color_global_bg: '#f3f4f6',
        color_font_main: '#313133',
        color_font_second: '#7e7e81',
        color_font_third: '#b8b8bc',

        color_label_blue: '#29b6fe',
        color_label_green: '#62c24c',
    },
    sizes: {
        status_bar_height: (Platform.OS === 'ios') ? 20 : 0,
        nav_bar_height: 44,
        title_bar_height: 64,
        bottom_bar_height: 64,
        search_bar_height: 44,
        header_banner_height: px2dp(270),
        header_labels_height: px2dp(165),
        size_1: px2dp(1),
        size_2: px2dp(2),
        size_3: px2dp(3),
        size_4: px2dp(4),
        size_5: px2dp(5),
        size_8: px2dp(8),
        size_10: px2dp(10),
        size_12: px2dp(12),
        size_14: px2dp(14),
        size_15: px2dp(15),
        size_16: px2dp(16),
        size_18: px2dp(18),
        size_20: px2dp(20),
        size_22: px2dp(22),
        size_24: px2dp(24),
        size_25: px2dp(25),
        size_28: px2dp(28),
        size_30: px2dp(30),
        size_32: px2dp(32),
        size_34: px2dp(34),
        size_35: px2dp(35),
        size_36: px2dp(36),
        size_37: px2dp(37),
        size_38: px2dp(38),
        size_40: px2dp(40),
        size_42: px2dp(42),
        size_43: px2dp(43),
        size_44: px2dp(44),
        size_46: px2dp(46),
        size_48: px2dp(48),
        size_50: px2dp(50),
        size_53: px2dp(53),
        size_54: px2dp(54),
        size_56: px2dp(56),
        size_60: px2dp(60),
        size_62: px2dp(62),
        size_64: px2dp(64),
        size_66: px2dp(66),
        size_68: px2dp(68),
        size_70: px2dp(70),
        size_72: px2dp(72),
        size_74: px2dp(74),
        size_76: px2dp(76),
        size_78: px2dp(78),
        size_80: px2dp(80),
        size_85: px2dp(85),
        size_88: px2dp(88),
        size_90: px2dp(90),
        size_92: px2dp(92),
        size_95: px2dp(95),
        size_100: px2dp(100),
        size_108: px2dp(108),
        size_110: px2dp(110),
        size_113: px2dp(113),
        size_116: px2dp(116),
        size_120: px2dp(120),
        size_130: px2dp(130),
        size_134: px2dp(134),
        size_135: px2dp(135),
        size_138: px2dp(138),
        size_140: px2dp(140),
        size_142: px2dp(142),
        size_145: px2dp(145),
        size_148: px2dp(148),
        size_150: px2dp(150),
        size_160: px2dp(160),
        size_164: px2dp(164),
        size_168: px2dp(168),
        size_172: px2dp(172),
        size_180: px2dp(180),
        size_198: px2dp(198),
        size_200: px2dp(200),
        size_212: px2dp(212),
        size_215: px2dp(215),
        size_220: px2dp(220),
        size_230: px2dp(230),
        size_236: px2dp(236),
        size_240: px2dp(240),
        size_245: px2dp(245),
        size_250: px2dp(250),
        size_258: px2dp(258),
        size_280: px2dp(280),
        size_288: px2dp(288),
        size_296: px2dp(296),
        size_300: px2dp(300),
        size_315: px2dp(315),
        size_320: px2dp(320),
        size_340: px2dp(340),
        size_350: px2dp(350),
        size_360: px2dp(360),
        size_375: px2dp(375),
        size_390: px2dp(390),
        size_400: px2dp(400),
        size_418: px2dp(418),
        size_440: px2dp(440),
        size_450: px2dp(450),
        size_480: px2dp(480),
        size_490: px2dp(490),
        size_500: px2dp(500),
        size_518: px2dp(518),
        size_525: px2dp(525),
        size_528: px2dp(528),
        size_540: px2dp(540),
        size_560: px2dp(560),
        size_600: px2dp(600),
        size_630: px2dp(630),
        size_688: px2dp(688),
        size_690: px2dp(690),
        size_720: px2dp(720),
        size_908: px2dp(908),
    },
    lineHeight: {
        height_15: Math.round(px2dp(15)),
        height_34: Math.round(px2dp(34)),
        height_40: Math.round(px2dp(40)),
        height_42: Math.round(px2dp(42)),
        height_44: Math.round(px2dp(44)),
        height_46: Math.round(px2dp(46)),
        height_50: Math.round(px2dp(50)),
        height_54: Math.round(px2dp(54)),
    },
    screen: {
        width: width,
        height: height,
    },
    style: {
        /** 水平分隔线*/
        separatorLine: {
            width: width,
            height: px2dp(1),
            backgroundColor: '#666',
        },
        optionLabel: {
            fontSize: px2dp(30),
            color: '#fff',
            paddingRight: px2dp(30),
        },
        commonLine: {
            marginLeft: px2dp(30),
            marginRight: px2dp(30),
            height: px2dp(1),
            backgroundColor: '#eff0f3'
        },
        lineH20: {
            height: px2dp(20),
            backgroundColor: '#eff0f3'
        },
        lineMarginLeft: {
            marginLeft: px2dp(30),
            height: px2dp(1),
            backgroundColor: '#eff0f3'
        },
        optionLabelInWhite: {
            fonts: px2dp(30),
            color: '#313133',
            marginRight: px2dp(30),
        },
        optionLabelInPrimary: {
            fonts: px2dp(30),
            color: '#fff',
            marginRight: px2dp(30),
        },
    }
}