import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

}

@Injectable()
export class EnvService {
  /** 企业微信agentid */
  readonly agentid = '';
  /** 项目的htmlTitle */
  readonly pageTitle = '轻流 · 业务流程自动化BPM';
  /** 文件上传模式,后端上传: `backEnd`, oss上传: `oss`, oos上传: `oos`,腾讯上传: `txcos` */
  readonly uploadMode = 'oss';
  /** webSocketUrl, 空字符串的时候默认window.location.origin */
  readonly socketUrl = 'https://ncbd.qingflow.com';
  /** 上传模式为后端上传时,上传到后端的url,oss上传时可忽略 */
  readonly uploadUrl = '/api/upload/localfile';
  /** 黑色文字+logo */
  readonly logoBlackFont =
    'https://file.qingflow.com/assets/logoBlack.png?x-oss-process=image/resize,m_mfit,h_36';
  /** 白色文字+logo */
  readonly logoWhiteFont =
    'https://file.qingflow.com/assets/logo.png?x-oss-process=image/resize,m_mfit,w_128,h_32';
  /** 纯logo,无文字 */
  readonly logoPure = 'https://file.qingflow.com/assets/logo-pure.png';
  /** 是否开启angular的Prod模式 */
  readonly production = false;
  /** 调用接口的前缀，一般都是'/api' */
  readonly apiBaseUrl = '/api';
  /** 登录页面的locationOrigin，末尾不带'/'， 例: 'https://accounts.qingflow.com' */
  readonly loginRoot = 'http://localhost:4202';
  /** 主程序页面的locationOrigin, 末尾不带'/'; 例：'https://qingflow.com', */
  readonly originRoot = 'http://localhost:4200';
  /** domain to set token; 例子： .qingflow.com */
  readonly tokenDomain = 'localhost';
  /** 钉钉扫码AppId */
  readonly dingtalkAppId = 'dingoaoaiobmihv8e6dsml';
  /** 微信公众号appId */
  readonly wechatAppId = 'wx9bbfced8e91ca237';
  /** 微信开放平台appId */
  readonly wechatWebAppId = 'wxebc859d1dba58e5c';
  /** 微信第三方平台appId */
  readonly wechatThirdpartyAppId = 'wx1d5addfb4115b70f';
  /** 项目版本：'normal', 'pc', 'ding' */
  readonly version = 'normal';
  /** 企业微信appId */
  readonly workWechatAppId = 'ww106355fc4b972d5f';
  /** 企业微信自动登录suitId */
  readonly workWechatAutoLoginSuitId = 'ww1b93f8a8da2eef16';
  /** 是否私有云钉钉 */
  readonly internal = false;
  /** cookie内容的版本前缀 */
  readonly versionPrefix = 'dev';
  /** 项目(公司)名称 */
  readonly projectName = '轻流';
  /** 是否进行密码加密 */
  readonly encryptByPubKey = true;
  /** 设置登陆token, 在有标签页打开的情况登陆状态共享，关闭所有当前域名的标签页失效，由于卡特app的原因，只对pc有效 */
  readonly allowCrossTagSession = false;
  /** 允许在iframe打开轻流 */
  readonly allowIFrame = false;
  /** 获取密码加密的公钥 */
  readonly pubKey = '';
  /** 显示模板中心入口 */
  readonly showTemplateCenter = false;
  /** 是否为第三方合作伙伴 */
  readonly thirdPartner = false;
  /** 网站cookie secure属性默认值。true: cookie仅可通过HTTPS进行传输（安全性更高），会导致使用HTTP的客户不可用，默认为false */
  readonly cookieSecure = false;
  /** 是否支持私有云第三方插入自定义 script */
  readonly loadThirdPartyLib = false;
  /** 登陆的一些token信息打log，为了接入app日志使用 */
  readonly allowLoginLog = false;
  /** 小logo */
  readonly logoWhiteFontSmall = 'https://file.qingflow.com/assets/logo-small.png';
  /** @deprecated 单私有云实例是否支持多钉钉、企业微信组织 */
  readonly multiProject = false;
  /**单私有云实例支持多IM组织架构，钉钉、企业微信、飞书 */
  readonly multiIM = false;
  /** 企业微信本地化 */
  readonly workWechatLocal = false;
  /** 企业微信本地化 */
  readonly workWechatLocalIp = '';
  /** 飞书登录appId */
  readonly larkAppId = '';
  /** 私有云允许微信登录 */
  readonly pcAllowWeChatLogin? = false;
  /** 文件上传使用相对路径,主要用于私有化部署 */
  readonly useRelateFilePath? = false;
  /** 文件上传使用的相对路径 */
  readonly relateFilePath? = `${window.location.origin}/`;
  /** seo keyword content */
  readonly keywordContent? = '';
  /** seo description content */
  readonly descriptionContent? = '';
  /** 私有云网站备案号 */
  readonly pcCopyright? = '';
  /** 私有云是否开启了第三方扫码 */
  readonly pcScanCode? = false;
  /** 私有云是否开启上传文件解密 */
  readonly pcOpenThirdPartyUploadDecrypt? = false;
  /** 隐藏微信相关配置 */
  readonly hideWeChat? = false;
  /** 文件预览的文件服务器地址 */
  readonly filePrivatePreview = 'https://officeapp.qingflow.com/op/view.aspx?src=';
  /** 禁止jsApi鉴权，仅给私有云使用，目前只有纵游、一门式 */
  readonly forbidJsapi = '';
  /** 隐藏电子签章 */
  readonly hideESign? = false;

  // BI 项目需要使用的配置项
  /** BI项目的后端socket地址 */
  readonly biSocketUrl = 'https://ncbd2.qingflow.com';
  /** 轻析的数据库类型 */
  readonly databaseType = 'MySQL';

  constructor() {}
}


