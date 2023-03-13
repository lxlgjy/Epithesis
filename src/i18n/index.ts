import {createI18n} from "vue-i18n";

const messages = {
    en: {
        msg: {
            //Home
            HomeRecommend: "RecommendedDaily",
            HomePLayList: 'Playlist',
            HomeHotSinger: 'HotSinger',
            HomeList: 'List',
            HomeAlbum: 'LatestAlbum',
            //LeftBox
            LeftBoxHome: 'Home',
            LeftBoxPlayList: 'Playlist',
            LeftBoxSinger: 'Singer',
            LeftBoxMV: 'MV',
            LeftBoxMusicLibrary: 'MusicLibrary',
            LeftBoxDownload: 'MyDownloads',
            //PlayList
            PlayList: 'Playlist',
            PlayListMore: 'More',
            //Singer
            SingerRegion: 'SingerRegion',
            HotSinger: 'HotSinger',
            Singer: 'Singer',
            //MV
            LatestMV: 'LatestMV',
            ProducedByNetEase: 'ProducedByNetEase',
            //Love And Detail
            MusicThatILove: 'MusicThatILove',
            MyPlaylist: 'MyPlaylist',
            SongTitle: 'SongTitle',
            SongAlbum: 'Album',
            SongDuration: 'Duration',
            //other
            PopularSearches: 'PopularSearches',
            SearchHistory: 'SearchHistory',
            Search: 'Search',
            Login: 'Login',
            NonVIP: 'NonVIP',
            VIP: 'vip',
            CheckTheVersion: 'CheckTheVersion',
            SetUp: 'SetUp',
            Concerning: 'Concerning',
            Agreement: 'Agreement',
            SignOut: 'SignOut',
            AddWhatILike: 'AddWhatILike',
            MoveOutOfTheListILike: 'MoveOutOfTheListILike',
            AddToPlaylist: 'AddToPlaylist',
            RemoveAPlaylist: 'RemoveAPlaylist',
            Download: 'Download',
            SongPlayList: 'Playlist',
            SongPlayHistory: 'PlayHistory',
            //setting
            PageThemeSwitching: 'PageThemeSwitching',
            WhetherToTurnOnDarkTheme: 'WhetherToTurnOnDarkTheme',
            Language: 'Language',
            LanguageSwitching: 'LanguageSwitching',
            MusicQualitySwitching: 'MusicQualitySwitching',
            MusicQuality: 'MusicQuality',
            Lyrics: 'Lyrics',
            LyricSize: 'LyricSize',
            // setting MusicQuality
            High: 'High',
            Middle: 'Middle',
            Low: 'Low',
            // setting Language
            Chinese: 'Chinese',
            English: 'English',

        },
    },
    zh: {
        msg: {
            //Home
            HomeRecommend: "每日推荐",
            HomePLayList: '歌单',
            HomeHotSinger: '热门歌手',
            HomeList: '排行榜',
            HomeAlbum: '最新专辑',
            //LeftBox
            LeftBoxHome: '首页',
            LeftBoxPlayList: '歌单',
            LeftBoxSinger: '歌手',
            LeftBoxMV: 'MV',
            LeftBoxMusicLibrary: '音乐库',
            LeftBoxDownload: '我的下载',
            //PlayList
            PlayList: '歌单',
            PlayListMore: '更多',
            //Singer
            SingerRegion: '歌手地区',
            HotSinger: '热门歌手',
            Singer: '歌手',
            //MV
            LatestMV: '最新MV',
            ProducedByNetEase: '网易出品',
            //Love And Detail
            MusicThatILove: '我喜欢的音乐',
            MyPlaylist: '我的歌单',
            SongTitle: '歌曲标题',
            SongAlbum: '专辑',
            SongDuration: '时长',
            //other
            PopularSearches: '热门搜索',
            SearchHistory: '搜索历史',
            Search: '搜索',
            Login: '登录',
            NonVIP: '非vip',
            VIP: 'vip',
            CheckTheVersion: '查看版本',
            SetUp: '设置',
            Concerning: '关于',
            Agreement: '协议',
            SignOut: '退出登录',
            AddWhatILike: '添加我喜欢',
            MoveOutOfTheListILike: '移出我喜欢的列表',
            AddToPlaylist: '添加到播放列表',
            RemoveAPlaylist: '移除播放列表',
            Download: '下载',
            SongPlayList: '播放列表',
            SongPlayHistory: '播放历史',
            // setting
            PageThemeSwitching: '页面主题切换',
            WhetherToTurnOnDarkTheme: '是否开启暗色主题',
            Language: '语言',
            LanguageSwitching: '语言切换',
            MusicQualitySwitching: '音乐品质切换',
            MusicQuality: '音乐品质',
            Lyrics: '歌词',
            LyricSize: '歌词大小',
            // setting MusicQuality
            High: '高',
            Middle: '中',
            Low: '低',
            // setting Language
            Chinese: '汉语',
            English: '英文',
        },
    },
};

const locale = 'en';

const i18n = createI18n({
    // 使用 Composition API 模式，则需要将其设置为false
    legacy: false,
    // 全局注入 $t 函数
    globalInjection: true,
    locale,
    messages,
});

export default i18n


