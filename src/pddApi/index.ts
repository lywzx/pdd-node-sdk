// 订单API
export * from './dingDan/PddErpOrderSync';
export * from './dingDan/PddOrderInformationGet';
export * from './dingDan/PddOrderListGet';
export * from './dingDan/PddOrderNumberListIncrementGet';
export * from './dingDan/PddOrderStatusGet';
// 售后API
export * from './shouHou/PddNextoneLogisticsWarehouseUpdate';
export * from './shouHou/PddRdcPddgeniusSendgoodsCancel';
export * from './shouHou/PddRefundAddressListGet';
export * from './shouHou/PddRefundInformationGet';
export * from './shouHou/PddRefundListIncrementGet';
export * from './shouHou/PddRefundStatusCheck';
// 物流API
export * from './wuLiu/PddLogisticsAddressGet';
export * from './wuLiu/PddLogisticsCompaniesGet';
export * from './wuLiu/PddLogisticsOnlineCreate';
export * from './wuLiu/PddLogisticsOnlineSend';
export * from './wuLiu/PddLogisticsOnlineStatusQuery';
export * from './wuLiu/PddLogisticsOrdertraceGet';
// 虚拟类目API
export * from './xuNiLeiMu/PddVirtualGameServerQuery';
export * from './xuNiLeiMu/PddVirtualMobileChargeNotify';
// 商品API
export * from './shangPin/PddDeleteDraftCommit';
export * from './shangPin/PddDeleteGoodsCommit';
export * from './shangPin/PddGoodsAdd';
export * from './shangPin/PddGoodsAuthorizationCats';
export * from './shangPin/PddGoodsCatTemplateGet';
export * from './shangPin/PddGoodsCatsGet';
export * from './shangPin/PddGoodsCommitDetailGet';
export * from './shangPin/PddGoodsCommitListGet';
export * from './shangPin/PddGoodsCommitStatusGet';
export * from './shangPin/PddGoodsCountryGet';
export * from './shangPin/PddGoodsCpsMallUnitChange';
export * from './shangPin/PddGoodsCpsMallUnitCreate';
export * from './shangPin/PddGoodsCpsMallUnitPause';
export * from './shangPin/PddGoodsCpsMallUnitQuery';
export * from './shangPin/PddGoodsCpsMallUnitResume';
export * from './shangPin/PddGoodsCpsUnitChange';
export * from './shangPin/PddGoodsCpsUnitCreate';
export * from './shangPin/PddGoodsCpsUnitDelete';
export * from './shangPin/PddGoodsCpsUnitQuery';
export * from './shangPin/PddGoodsDetailGet';
export * from './shangPin/PddGoodsEditGoodsCommit';
export * from './shangPin/PddGoodsGetRelation';
export * from './shangPin/PddGoodsImageUpload';
export * from './shangPin/PddGoodsInformationGet';
export * from './shangPin/PddGoodsInformationUpdate';
export * from './shangPin/PddGoodsLatestCommitStatusGet';
export * from './shangPin/PddGoodsListGet';
export * from './shangPin/PddGoodsLogisticsSerTemplateCreate';
export * from './shangPin/PddGoodsLogisticsSerTemplateDelete';
export * from './shangPin/PddGoodsLogisticsSerTemplateDetail';
export * from './shangPin/PddGoodsLogisticsSerTemplateList';
export * from './shangPin/PddGoodsLogisticsSerTemplateUpdate';
export * from './shangPin/PddGoodsLogisticsTemplateCreate';
export * from './shangPin/PddGoodsLogisticsTemplateGet';
export * from './shangPin/PddGoodsOptGet';
export * from './shangPin/PddGoodsOuterCatMappingGet';
export * from './shangPin/PddGoodsQuantityUpdate';
export * from './shangPin/PddGoodsRelationSet';
export * from './shangPin/PddGoodsSaleStatusSet';
export * from './shangPin/PddGoodsSkuPriceUpdate';
export * from './shangPin/PddGoodsSpecGet';
export * from './shangPin/PddGoodsSpecIdGet';
export * from './shangPin/PddGoodsSubmitGoodsCommit';
export * from './shangPin/PddGoodsTemplatePropertyValueSearch';
export * from './shangPin/PddGooodsSkuMeasurementList';
export * from './shangPin/PddOneExpressCostTemplate';
// 推广API
export * from './tuiGuang/PddAdBalanceGet';
export * from './tuiGuang/PddAdBidQueryProfile';
export * from './tuiGuang/PddAdCanCreatePlan';
export * from './tuiGuang/PddAdChartBykeywordGet';
export * from './tuiGuang/PddAdCreateLocationBid';
export * from './tuiGuang/PddAdCreateUnitBid';
export * from './tuiGuang/PddAdCreativeCreate';
export * from './tuiGuang/PddAdCreativeDelete';
export * from './tuiGuang/PddAdCreativeHistoryReportGet';
export * from './tuiGuang/PddAdCreativeQuery';
export * from './tuiGuang/PddAdCreativeReportGet';
export * from './tuiGuang/PddAdCreativeUpdate';
export * from './tuiGuang/PddAdDeleteBid';
export * from './tuiGuang/PddAdDeleteLocationBid';
export * from './tuiGuang/PddAdHistoryKeywordReportGet';
export * from './tuiGuang/PddAdHistoryPlanReportGet';
export * from './tuiGuang/PddAdHistoryReportGet';
export * from './tuiGuang/PddAdHistoryRtKeywordReportGet';
export * from './tuiGuang/PddAdHistoryRtPlanReportGet';
export * from './tuiGuang/PddAdHistoryRtReportGet';
export * from './tuiGuang/PddAdHistoryRtUnitReportGet';
export * from './tuiGuang/PddAdHistoryUnitReportGet';
export * from './tuiGuang/PddAdKeywordCreate';
export * from './tuiGuang/PddAdKeywordDailyReport';
export * from './tuiGuang/PddAdKeywordDelete';
export * from './tuiGuang/PddAdKeywordRcommendedGet';
export * from './tuiGuang/PddAdKeywordRelevanceGet';
export * from './tuiGuang/PddAdKeywordUpdate';
export * from './tuiGuang/PddAdPlanCreate';
export * from './tuiGuang/PddAdPlanDelete';
export * from './tuiGuang/PddAdPlanDiscountUpdate';
export * from './tuiGuang/PddAdPlanInfoListGet';
export * from './tuiGuang/PddAdPlanMaxCostUpdate';
export * from './tuiGuang/PddAdPlanNameUpdate';
export * from './tuiGuang/PddAdPlanOptStatusUpdate';
export * from './tuiGuang/PddAdQueryBidList';
export * from './tuiGuang/PddAdQueryLocationBidHistoryReport';
export * from './tuiGuang/PddAdQueryLocationBidList';
export * from './tuiGuang/PddAdQueryLocationBidPvList';
export * from './tuiGuang/PddAdQueryUnitBidHistoryReport';
export * from './tuiGuang/PddAdUnitCreate';
export * from './tuiGuang/PddAdUnitDelete';
export * from './tuiGuang/PddAdUnitGetByPlanId';
export * from './tuiGuang/PddAdUnitOptStatusUpdate';
export * from './tuiGuang/PddAdUpdateBid';
export * from './tuiGuang/PddAdUpdateLocationBid';
// 多多客API
export * from './duoDuoKe/PddDdkCmsPromUrlGenerate';
export * from './duoDuoKe/PddDdkCouponInfoQuery';
export * from './duoDuoKe/PddDdkFinanceCpaQuery';
export * from './duoDuoKe/PddDdkGoodsBasicInfoGet';
export * from './duoDuoKe/PddDdkGoodsDetail';
export * from './duoDuoKe/PddDdkGoodsPidGenerate';
export * from './duoDuoKe/PddDdkGoodsPidQuery';
export * from './duoDuoKe/PddDdkGoodsPromotionUrlGenerate';
export * from './duoDuoKe/PddDdkGoodsRecommendGet';
export * from './duoDuoKe/PddDdkGoodsSearch';
export * from './duoDuoKe/PddDdkGoodsUnitQuery';
export * from './duoDuoKe/PddDdkGoodsZsUnitUrlGen';
export * from './duoDuoKe/PddDdkLotteryUrlGen';
export * from './duoDuoKe/PddDdkMallGoodsListGet';
export * from './duoDuoKe/PddDdkMallUrlGen';
export * from './duoDuoKe/PddDdkMerchantListGet';
export * from './duoDuoKe/PddDdkOrderDetailGet';
export * from './duoDuoKe/PddDdkOrderListIncrementGet';
export * from './duoDuoKe/PddDdkOrderListRangeGet';
export * from './duoDuoKe/PddDdkResourceUrlGen';
export * from './duoDuoKe/PddDdkRpPromUrlGenerate';
export * from './duoDuoKe/PddDdkThemeGoodsSearch';
export * from './duoDuoKe/PddDdkThemeListGet';
export * from './duoDuoKe/PddDdkThemePromUrlGenerate';
export * from './duoDuoKe/PddDdkTopGoodsListQuery';
export * from './duoDuoKe/PddDdkWeappQrcodeUrlGen';
// 多多客工具API
export * from './duoDuoKeGongJu/PddDdkAllOrderListIncrementGet';
export * from './duoDuoKeGongJu/PddDdkOauthCmsPromUrlGenerate';
export * from './duoDuoKeGongJu/PddDdkOauthGoodsPidGenerate';
export * from './duoDuoKeGongJu/PddDdkOauthGoodsPidQuery';
export * from './duoDuoKeGongJu/PddDdkOauthGoodsPromUrlGenerate';
export * from './duoDuoKeGongJu/PddDdkOauthGoodsRecommendGet';
export * from './duoDuoKeGongJu/PddDdkOauthGoodsZsUnitUrlGen';
export * from './duoDuoKeGongJu/PddDdkOauthLotteryUrlGen';
export * from './duoDuoKeGongJu/PddDdkOauthMallUrlGen';
export * from './duoDuoKeGongJu/PddDdkOauthOrderDetailGet';
export * from './duoDuoKeGongJu/PddDdkOauthResourceUrlGen';
export * from './duoDuoKeGongJu/PddDdkOauthRpPromUrlGenerate';
export * from './duoDuoKeGongJu/PddDdkOauthThemePromUrlGenerate';
export * from './duoDuoKeGongJu/PddDdkOauthTopGoodsListQuery';
// 物流商API
export * from './wuLiuShang/PddLogisticsCsHistoryMessageGet';
export * from './wuLiuShang/PddLogisticsCsMessageSend';
export * from './wuLiuShang/PddLogisticsCsSessionClose';
export * from './wuLiuShang/PddLogisticsCsSessionStart';
export * from './wuLiuShang/PddLogisticsTicketGet';
export * from './wuLiuShang/PddLogisticsTicketImageUpload';
export * from './wuLiuShang/PddLogisticsTicketNotify';
export * from './wuLiuShang/PddLogisticsTicketProblemTypeGet';
// 营销API
export * from './yingXiao/PddPromotionCouponClose';
export * from './yingXiao/PddPromotionCouponQuantityAdd';
export * from './yingXiao/PddPromotionGoodsCouponCreate';
export * from './yingXiao/PddPromotionGoodsCouponListGet';
export * from './yingXiao/PddPromotionHomeCouponCreate';
export * from './yingXiao/PddPromotionMerchantCouponListGet';
// 卡券API
export * from './kaQuan/PddVoucherAppointmentInfoSend';
export * from './kaQuan/PddVoucherOtaCardVerification';
export * from './kaQuan/PddVoucherPhysicalGoodsSend';
export * from './kaQuan/PddVoucherVirtualCardVerification';
export * from './kaQuan/PddVoucherVoucherComplain';
export * from './kaQuan/PddVoucherVoucherInfoSend';
// 发票API
export * from './faPiao/PddInvoiceApplicationQuery';
export * from './faPiao/PddInvoiceApplicationUpdate';
export * from './faPiao/PddInvoiceDetailInvalid';
export * from './faPiao/PddInvoiceDetailQuery';
export * from './faPiao/PddInvoiceDetailUpload';
// 店铺API
export * from './dianPu/PddMallCpsProtocolStatusQuery';
export * from './dianPu/PddMallInfoBondedWarehouseGet';
export * from './dianPu/PddMallInfoGet';
export * from './dianPu/PddMallInfoGroupAddStorePost';
export * from './dianPu/PddMallInfoGroupListStoreGet';
export * from './dianPu/PddMallInfoGroupRemoveStoreGet';
export * from './dianPu/PddMallInfoStoreCreatePost';
export * from './dianPu/PddMallInfoStoreCreatePostNopoi';
export * from './dianPu/PddMallInfoStoreDeletePost';
export * from './dianPu/PddMallInfoStoreGet';
export * from './dianPu/PddMallInfoStoreUpdatePost';
export * from './dianPu/PddMallInfoStoreUpdatePostNopoi';
export * from './dianPu/PddQrpayPayeeRegister';
// 营销短信API
export * from './yingXiaoDuanXin/PddSmsAddCrowd';
export * from './yingXiaoDuanXin/PddSmsCreateCustomTemplate';
export * from './yingXiaoDuanXin/PddSmsCrowdsPeopleNumberQuery';
export * from './yingXiaoDuanXin/PddSmsCrowdsQuery';
export * from './yingXiaoDuanXin/PddSmsCustomSetting';
export * from './yingXiaoDuanXin/PddSmsCustomTemplateQuery';
export * from './yingXiaoDuanXin/PddSmsRemainDetailQuery';
export * from './yingXiaoDuanXin/PddSmsRemainSetting';
export * from './yingXiaoDuanXin/PddSmsRemainSettingDetailQuery';
export * from './yingXiaoDuanXin/PddSmsSellDeleting';
export * from './yingXiaoDuanXin/PddSmsSellRecordListQuery';
export * from './yingXiaoDuanXin/PddSmsSellSetting';
export * from './yingXiaoDuanXin/PddSmsSellSettingDetailQuery';
export * from './yingXiaoDuanXin/PddSmsSellSettingRecordCancel';
export * from './yingXiaoDuanXin/PddSmsSendRecordListQuery';
export * from './yingXiaoDuanXin/PddSmsShortStatisticQuery';
export * from './yingXiaoDuanXin/PddSmsTemplateQuery';
// 工具API
export * from './gongJu/PddTimeGet';
export * from './gongJu/PddUtilDivideBase64Image';
// 仓储API
export * from './cangChu/PddExpressAddDepot';
export * from './cangChu/PddExpressChangeDepotInfo';
export * from './cangChu/PddExpressDepotInfoGet';
export * from './cangChu/PddExpressDepotListGet';
export * from './cangChu/PddExpressMallDepotSimpleGet';
export * from './cangChu/PddExpressSearchDepot';
export * from './cangChu/PddStockDepotPriorityList';
export * from './cangChu/PddStockDepotPriorityUpdate';
export * from './cangChu/PddStockGoodsIdToSkuQuery';
export * from './cangChu/PddStockWareCreate';
export * from './cangChu/PddStockWareDelete';
export * from './cangChu/PddStockWareDetailQuery';
export * from './cangChu/PddStockWareInfoList';
export * from './cangChu/PddStockWareList';
export * from './cangChu/PddStockWareMove';
export * from './cangChu/PddStockWareSkuUpdate';
export * from './cangChu/PddStockWareUpdate';
// 消息服务API
export * from './xiaoXiFuWu/PddPmcUserCancel';
export * from './xiaoXiFuWu/PddPmcUserGet';
export * from './xiaoXiFuWu/PddPmcUserPermit';
// 电子面单API
export * from './dianZiMianDan/PddCloudprintCmdprintRender';
export * from './dianZiMianDan/PddCloudprintCustomaresGet';
export * from './dianZiMianDan/PddCloudprintStdtemplatesGet';
export * from './dianZiMianDan/PddWaybillCancel';
export * from './dianZiMianDan/PddWaybillGet';
export * from './dianZiMianDan/PddWaybillQueryByWaybillcode';
export * from './dianZiMianDan/PddWaybillSearch';
export * from './dianZiMianDan/PddWaybillUpdate';
// 财务API
export * from './caiWu/PddFinanceBalanceDailyBillUrlGet';
// 开平短信服务API
export * from './kaiPingDuanXinFuWu/PddOpenMsgServiceQueryExpressMsgRecord';
export * from './kaiPingDuanXinFuWu/PddOpenMsgServiceQueryMsgRecord';
export * from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendBatchMsg';
export * from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendExpressMsg';
export * from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendMsg';
// 服务市场API
export * from './fuWuShiChang/PddServicemarketSettlementbillGet';
export * from './fuWuShiChang/PddServicemarketTradelistGet';
export * from './fuWuShiChang/PddVasOrderSearch';
// 短信供应商API
export * from './duanXinGongYingShang/PddSmsDetailbillPush';
export * from './duanXinGongYingShang/PddSmsVendorComplaintCreate';
// 商家工单API
export * from './shangJiaGongDan/PddMallTicketDetail';
export * from './shangJiaGongDan/PddMallTicketList';
export * from './shangJiaGongDan/PddMallTicketNotify';
import PDD_ERP_ORDER_SYNC from './dingDan/PddErpOrderSync';
import PDD_ORDER_INFORMATION_GET from './dingDan/PddOrderInformationGet';
import PDD_ORDER_LIST_GET from './dingDan/PddOrderListGet';
import PDD_ORDER_NUMBER_LIST_INCREMENT_GET from './dingDan/PddOrderNumberListIncrementGet';
import PDD_ORDER_STATUS_GET from './dingDan/PddOrderStatusGet';
import PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE from './shouHou/PddNextoneLogisticsWarehouseUpdate';
import PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL from './shouHou/PddRdcPddgeniusSendgoodsCancel';
import PDD_REFUND_ADDRESS_LIST_GET from './shouHou/PddRefundAddressListGet';
import PDD_REFUND_INFORMATION_GET from './shouHou/PddRefundInformationGet';
import PDD_REFUND_LIST_INCREMENT_GET from './shouHou/PddRefundListIncrementGet';
import PDD_REFUND_STATUS_CHECK from './shouHou/PddRefundStatusCheck';
import PDD_LOGISTICS_ADDRESS_GET from './wuLiu/PddLogisticsAddressGet';
import PDD_LOGISTICS_COMPANIES_GET from './wuLiu/PddLogisticsCompaniesGet';
import PDD_LOGISTICS_ONLINE_CREATE from './wuLiu/PddLogisticsOnlineCreate';
import PDD_LOGISTICS_ONLINE_SEND from './wuLiu/PddLogisticsOnlineSend';
import PDD_LOGISTICS_ONLINE_STATUS_QUERY from './wuLiu/PddLogisticsOnlineStatusQuery';
import PDD_LOGISTICS_ORDERTRACE_GET from './wuLiu/PddLogisticsOrdertraceGet';
import PDD_VIRTUAL_GAME_SERVER_QUERY from './xuNiLeiMu/PddVirtualGameServerQuery';
import PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY from './xuNiLeiMu/PddVirtualMobileChargeNotify';
import PDD_DELETE_DRAFT_COMMIT from './shangPin/PddDeleteDraftCommit';
import PDD_DELETE_GOODS_COMMIT from './shangPin/PddDeleteGoodsCommit';
import PDD_GOODS_ADD from './shangPin/PddGoodsAdd';
import PDD_GOODS_AUTHORIZATION_CATS from './shangPin/PddGoodsAuthorizationCats';
import PDD_GOODS_CAT_TEMPLATE_GET from './shangPin/PddGoodsCatTemplateGet';
import PDD_GOODS_CATS_GET from './shangPin/PddGoodsCatsGet';
import PDD_GOODS_COMMIT_DETAIL_GET from './shangPin/PddGoodsCommitDetailGet';
import PDD_GOODS_COMMIT_LIST_GET from './shangPin/PddGoodsCommitListGet';
import PDD_GOODS_COMMIT_STATUS_GET from './shangPin/PddGoodsCommitStatusGet';
import PDD_GOODS_COUNTRY_GET from './shangPin/PddGoodsCountryGet';
import PDD_GOODS_CPS_MALL_UNIT_CHANGE from './shangPin/PddGoodsCpsMallUnitChange';
import PDD_GOODS_CPS_MALL_UNIT_CREATE from './shangPin/PddGoodsCpsMallUnitCreate';
import PDD_GOODS_CPS_MALL_UNIT_PAUSE from './shangPin/PddGoodsCpsMallUnitPause';
import PDD_GOODS_CPS_MALL_UNIT_QUERY from './shangPin/PddGoodsCpsMallUnitQuery';
import PDD_GOODS_CPS_MALL_UNIT_RESUME from './shangPin/PddGoodsCpsMallUnitResume';
import PDD_GOODS_CPS_UNIT_CHANGE from './shangPin/PddGoodsCpsUnitChange';
import PDD_GOODS_CPS_UNIT_CREATE from './shangPin/PddGoodsCpsUnitCreate';
import PDD_GOODS_CPS_UNIT_DELETE from './shangPin/PddGoodsCpsUnitDelete';
import PDD_GOODS_CPS_UNIT_QUERY from './shangPin/PddGoodsCpsUnitQuery';
import PDD_GOODS_DETAIL_GET from './shangPin/PddGoodsDetailGet';
import PDD_GOODS_EDIT_GOODS_COMMIT from './shangPin/PddGoodsEditGoodsCommit';
import PDD_GOODS_GET_RELATION from './shangPin/PddGoodsGetRelation';
import PDD_GOODS_IMAGE_UPLOAD from './shangPin/PddGoodsImageUpload';
import PDD_GOODS_INFORMATION_GET from './shangPin/PddGoodsInformationGet';
import PDD_GOODS_INFORMATION_UPDATE from './shangPin/PddGoodsInformationUpdate';
import PDD_GOODS_LATEST_COMMIT_STATUS_GET from './shangPin/PddGoodsLatestCommitStatusGet';
import PDD_GOODS_LIST_GET from './shangPin/PddGoodsListGet';
import PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE from './shangPin/PddGoodsLogisticsSerTemplateCreate';
import PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE from './shangPin/PddGoodsLogisticsSerTemplateDelete';
import PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL from './shangPin/PddGoodsLogisticsSerTemplateDetail';
import PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST from './shangPin/PddGoodsLogisticsSerTemplateList';
import PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE from './shangPin/PddGoodsLogisticsSerTemplateUpdate';
import PDD_GOODS_LOGISTICS_TEMPLATE_CREATE from './shangPin/PddGoodsLogisticsTemplateCreate';
import PDD_GOODS_LOGISTICS_TEMPLATE_GET from './shangPin/PddGoodsLogisticsTemplateGet';
import PDD_GOODS_OPT_GET from './shangPin/PddGoodsOptGet';
import PDD_GOODS_OUTER_CAT_MAPPING_GET from './shangPin/PddGoodsOuterCatMappingGet';
import PDD_GOODS_QUANTITY_UPDATE from './shangPin/PddGoodsQuantityUpdate';
import PDD_GOODS_RELATION_SET from './shangPin/PddGoodsRelationSet';
import PDD_GOODS_SALE_STATUS_SET from './shangPin/PddGoodsSaleStatusSet';
import PDD_GOODS_SKU_PRICE_UPDATE from './shangPin/PddGoodsSkuPriceUpdate';
import PDD_GOODS_SPEC_GET from './shangPin/PddGoodsSpecGet';
import PDD_GOODS_SPEC_ID_GET from './shangPin/PddGoodsSpecIdGet';
import PDD_GOODS_SUBMIT_GOODS_COMMIT from './shangPin/PddGoodsSubmitGoodsCommit';
import PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH from './shangPin/PddGoodsTemplatePropertyValueSearch';
import PDD_GOOODS_SKU_MEASUREMENT_LIST from './shangPin/PddGooodsSkuMeasurementList';
import PDD_ONE_EXPRESS_COST_TEMPLATE from './shangPin/PddOneExpressCostTemplate';
import PDD_AD_BALANCE_GET from './tuiGuang/PddAdBalanceGet';
import PDD_AD_BID_QUERY_PROFILE from './tuiGuang/PddAdBidQueryProfile';
import PDD_AD_CAN_CREATE_PLAN from './tuiGuang/PddAdCanCreatePlan';
import PDD_AD_CHART_BYKEYWORD_GET from './tuiGuang/PddAdChartBykeywordGet';
import PDD_AD_CREATE_LOCATION_BID from './tuiGuang/PddAdCreateLocationBid';
import PDD_AD_CREATE_UNIT_BID from './tuiGuang/PddAdCreateUnitBid';
import PDD_AD_CREATIVE_CREATE from './tuiGuang/PddAdCreativeCreate';
import PDD_AD_CREATIVE_DELETE from './tuiGuang/PddAdCreativeDelete';
import PDD_AD_CREATIVE_HISTORY_REPORT_GET from './tuiGuang/PddAdCreativeHistoryReportGet';
import PDD_AD_CREATIVE_QUERY from './tuiGuang/PddAdCreativeQuery';
import PDD_AD_CREATIVE_REPORT_GET from './tuiGuang/PddAdCreativeReportGet';
import PDD_AD_CREATIVE_UPDATE from './tuiGuang/PddAdCreativeUpdate';
import PDD_AD_DELETE_BID from './tuiGuang/PddAdDeleteBid';
import PDD_AD_DELETE_LOCATION_BID from './tuiGuang/PddAdDeleteLocationBid';
import PDD_AD_HISTORY_KEYWORD_REPORT_GET from './tuiGuang/PddAdHistoryKeywordReportGet';
import PDD_AD_HISTORY_PLAN_REPORT_GET from './tuiGuang/PddAdHistoryPlanReportGet';
import PDD_AD_HISTORY_REPORT_GET from './tuiGuang/PddAdHistoryReportGet';
import PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET from './tuiGuang/PddAdHistoryRtKeywordReportGet';
import PDD_AD_HISTORY_RT_PLAN_REPORT_GET from './tuiGuang/PddAdHistoryRtPlanReportGet';
import PDD_AD_HISTORY_RT_REPORT_GET from './tuiGuang/PddAdHistoryRtReportGet';
import PDD_AD_HISTORY_RT_UNIT_REPORT_GET from './tuiGuang/PddAdHistoryRtUnitReportGet';
import PDD_AD_HISTORY_UNIT_REPORT_GET from './tuiGuang/PddAdHistoryUnitReportGet';
import PDD_AD_KEYWORD_CREATE from './tuiGuang/PddAdKeywordCreate';
import PDD_AD_KEYWORD_DAILY_REPORT from './tuiGuang/PddAdKeywordDailyReport';
import PDD_AD_KEYWORD_DELETE from './tuiGuang/PddAdKeywordDelete';
import PDD_AD_KEYWORD_RCOMMENDED_GET from './tuiGuang/PddAdKeywordRcommendedGet';
import PDD_AD_KEYWORD_RELEVANCE_GET from './tuiGuang/PddAdKeywordRelevanceGet';
import PDD_AD_KEYWORD_UPDATE from './tuiGuang/PddAdKeywordUpdate';
import PDD_AD_PLAN_CREATE from './tuiGuang/PddAdPlanCreate';
import PDD_AD_PLAN_DELETE from './tuiGuang/PddAdPlanDelete';
import PDD_AD_PLAN_DISCOUNT_UPDATE from './tuiGuang/PddAdPlanDiscountUpdate';
import PDD_AD_PLAN_INFO_LIST_GET from './tuiGuang/PddAdPlanInfoListGet';
import PDD_AD_PLAN_MAX_COST_UPDATE from './tuiGuang/PddAdPlanMaxCostUpdate';
import PDD_AD_PLAN_NAME_UPDATE from './tuiGuang/PddAdPlanNameUpdate';
import PDD_AD_PLAN_OPT_STATUS_UPDATE from './tuiGuang/PddAdPlanOptStatusUpdate';
import PDD_AD_QUERY_BID_LIST from './tuiGuang/PddAdQueryBidList';
import PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT from './tuiGuang/PddAdQueryLocationBidHistoryReport';
import PDD_AD_QUERY_LOCATION_BID_LIST from './tuiGuang/PddAdQueryLocationBidList';
import PDD_AD_QUERY_LOCATION_BID_PV_LIST from './tuiGuang/PddAdQueryLocationBidPvList';
import PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT from './tuiGuang/PddAdQueryUnitBidHistoryReport';
import PDD_AD_UNIT_CREATE from './tuiGuang/PddAdUnitCreate';
import PDD_AD_UNIT_DELETE from './tuiGuang/PddAdUnitDelete';
import PDD_AD_UNIT_GET_BY_PLAN_ID from './tuiGuang/PddAdUnitGetByPlanId';
import PDD_AD_UNIT_OPT_STATUS_UPDATE from './tuiGuang/PddAdUnitOptStatusUpdate';
import PDD_AD_UPDATE_BID from './tuiGuang/PddAdUpdateBid';
import PDD_AD_UPDATE_LOCATION_BID from './tuiGuang/PddAdUpdateLocationBid';
import PDD_DDK_CMS_PROM_URL_GENERATE from './duoDuoKe/PddDdkCmsPromUrlGenerate';
import PDD_DDK_COUPON_INFO_QUERY from './duoDuoKe/PddDdkCouponInfoQuery';
import PDD_DDK_FINANCE_CPA_QUERY from './duoDuoKe/PddDdkFinanceCpaQuery';
import PDD_DDK_GOODS_BASIC_INFO_GET from './duoDuoKe/PddDdkGoodsBasicInfoGet';
import PDD_DDK_GOODS_DETAIL from './duoDuoKe/PddDdkGoodsDetail';
import PDD_DDK_GOODS_PID_GENERATE from './duoDuoKe/PddDdkGoodsPidGenerate';
import PDD_DDK_GOODS_PID_QUERY from './duoDuoKe/PddDdkGoodsPidQuery';
import PDD_DDK_GOODS_PROMOTION_URL_GENERATE from './duoDuoKe/PddDdkGoodsPromotionUrlGenerate';
import PDD_DDK_GOODS_RECOMMEND_GET from './duoDuoKe/PddDdkGoodsRecommendGet';
import PDD_DDK_GOODS_SEARCH from './duoDuoKe/PddDdkGoodsSearch';
import PDD_DDK_GOODS_UNIT_QUERY from './duoDuoKe/PddDdkGoodsUnitQuery';
import PDD_DDK_GOODS_ZS_UNIT_URL_GEN from './duoDuoKe/PddDdkGoodsZsUnitUrlGen';
import PDD_DDK_LOTTERY_URL_GEN from './duoDuoKe/PddDdkLotteryUrlGen';
import PDD_DDK_MALL_GOODS_LIST_GET from './duoDuoKe/PddDdkMallGoodsListGet';
import PDD_DDK_MALL_URL_GEN from './duoDuoKe/PddDdkMallUrlGen';
import PDD_DDK_MERCHANT_LIST_GET from './duoDuoKe/PddDdkMerchantListGet';
import PDD_DDK_ORDER_DETAIL_GET from './duoDuoKe/PddDdkOrderDetailGet';
import PDD_DDK_ORDER_LIST_INCREMENT_GET from './duoDuoKe/PddDdkOrderListIncrementGet';
import PDD_DDK_ORDER_LIST_RANGE_GET from './duoDuoKe/PddDdkOrderListRangeGet';
import PDD_DDK_RESOURCE_URL_GEN from './duoDuoKe/PddDdkResourceUrlGen';
import PDD_DDK_RP_PROM_URL_GENERATE from './duoDuoKe/PddDdkRpPromUrlGenerate';
import PDD_DDK_THEME_GOODS_SEARCH from './duoDuoKe/PddDdkThemeGoodsSearch';
import PDD_DDK_THEME_LIST_GET from './duoDuoKe/PddDdkThemeListGet';
import PDD_DDK_THEME_PROM_URL_GENERATE from './duoDuoKe/PddDdkThemePromUrlGenerate';
import PDD_DDK_TOP_GOODS_LIST_QUERY from './duoDuoKe/PddDdkTopGoodsListQuery';
import PDD_DDK_WEAPP_QRCODE_URL_GEN from './duoDuoKe/PddDdkWeappQrcodeUrlGen';
import PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET from './duoDuoKeGongJu/PddDdkAllOrderListIncrementGet';
import PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE from './duoDuoKeGongJu/PddDdkOauthCmsPromUrlGenerate';
import PDD_DDK_OAUTH_GOODS_PID_GENERATE from './duoDuoKeGongJu/PddDdkOauthGoodsPidGenerate';
import PDD_DDK_OAUTH_GOODS_PID_QUERY from './duoDuoKeGongJu/PddDdkOauthGoodsPidQuery';
import PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE from './duoDuoKeGongJu/PddDdkOauthGoodsPromUrlGenerate';
import PDD_DDK_OAUTH_GOODS_RECOMMEND_GET from './duoDuoKeGongJu/PddDdkOauthGoodsRecommendGet';
import PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN from './duoDuoKeGongJu/PddDdkOauthGoodsZsUnitUrlGen';
import PDD_DDK_OAUTH_LOTTERY_URL_GEN from './duoDuoKeGongJu/PddDdkOauthLotteryUrlGen';
import PDD_DDK_OAUTH_MALL_URL_GEN from './duoDuoKeGongJu/PddDdkOauthMallUrlGen';
import PDD_DDK_OAUTH_ORDER_DETAIL_GET from './duoDuoKeGongJu/PddDdkOauthOrderDetailGet';
import PDD_DDK_OAUTH_RESOURCE_URL_GEN from './duoDuoKeGongJu/PddDdkOauthResourceUrlGen';
import PDD_DDK_OAUTH_RP_PROM_URL_GENERATE from './duoDuoKeGongJu/PddDdkOauthRpPromUrlGenerate';
import PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE from './duoDuoKeGongJu/PddDdkOauthThemePromUrlGenerate';
import PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY from './duoDuoKeGongJu/PddDdkOauthTopGoodsListQuery';
import PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET from './wuLiuShang/PddLogisticsCsHistoryMessageGet';
import PDD_LOGISTICS_CS_MESSAGE_SEND from './wuLiuShang/PddLogisticsCsMessageSend';
import PDD_LOGISTICS_CS_SESSION_CLOSE from './wuLiuShang/PddLogisticsCsSessionClose';
import PDD_LOGISTICS_CS_SESSION_START from './wuLiuShang/PddLogisticsCsSessionStart';
import PDD_LOGISTICS_TICKET_GET from './wuLiuShang/PddLogisticsTicketGet';
import PDD_LOGISTICS_TICKET_IMAGE_UPLOAD from './wuLiuShang/PddLogisticsTicketImageUpload';
import PDD_LOGISTICS_TICKET_NOTIFY from './wuLiuShang/PddLogisticsTicketNotify';
import PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET from './wuLiuShang/PddLogisticsTicketProblemTypeGet';
import PDD_PROMOTION_COUPON_CLOSE from './yingXiao/PddPromotionCouponClose';
import PDD_PROMOTION_COUPON_QUANTITY_ADD from './yingXiao/PddPromotionCouponQuantityAdd';
import PDD_PROMOTION_GOODS_COUPON_CREATE from './yingXiao/PddPromotionGoodsCouponCreate';
import PDD_PROMOTION_GOODS_COUPON_LIST_GET from './yingXiao/PddPromotionGoodsCouponListGet';
import PDD_PROMOTION_HOME_COUPON_CREATE from './yingXiao/PddPromotionHomeCouponCreate';
import PDD_PROMOTION_MERCHANT_COUPON_LIST_GET from './yingXiao/PddPromotionMerchantCouponListGet';
import PDD_VOUCHER_APPOINTMENT_INFO_SEND from './kaQuan/PddVoucherAppointmentInfoSend';
import PDD_VOUCHER_OTA_CARD_VERIFICATION from './kaQuan/PddVoucherOtaCardVerification';
import PDD_VOUCHER_PHYSICAL_GOODS_SEND from './kaQuan/PddVoucherPhysicalGoodsSend';
import PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION from './kaQuan/PddVoucherVirtualCardVerification';
import PDD_VOUCHER_VOUCHER_COMPLAIN from './kaQuan/PddVoucherVoucherComplain';
import PDD_VOUCHER_VOUCHER_INFO_SEND from './kaQuan/PddVoucherVoucherInfoSend';
import PDD_INVOICE_APPLICATION_QUERY from './faPiao/PddInvoiceApplicationQuery';
import PDD_INVOICE_APPLICATION_UPDATE from './faPiao/PddInvoiceApplicationUpdate';
import PDD_INVOICE_DETAIL_INVALID from './faPiao/PddInvoiceDetailInvalid';
import PDD_INVOICE_DETAIL_QUERY from './faPiao/PddInvoiceDetailQuery';
import PDD_INVOICE_DETAIL_UPLOAD from './faPiao/PddInvoiceDetailUpload';
import PDD_MALL_CPS_PROTOCOL_STATUS_QUERY from './dianPu/PddMallCpsProtocolStatusQuery';
import PDD_MALL_INFO_BONDED_WAREHOUSE_GET from './dianPu/PddMallInfoBondedWarehouseGet';
import PDD_MALL_INFO_GET from './dianPu/PddMallInfoGet';
import PDD_MALL_INFO_GROUP_ADD_STORE_POST from './dianPu/PddMallInfoGroupAddStorePost';
import PDD_MALL_INFO_GROUP_LIST_STORE_GET from './dianPu/PddMallInfoGroupListStoreGet';
import PDD_MALL_INFO_GROUP_REMOVE_STORE_GET from './dianPu/PddMallInfoGroupRemoveStoreGet';
import PDD_MALL_INFO_STORE_CREATE_POST from './dianPu/PddMallInfoStoreCreatePost';
import PDD_MALL_INFO_STORE_CREATE_POST_NOPOI from './dianPu/PddMallInfoStoreCreatePostNopoi';
import PDD_MALL_INFO_STORE_DELETE_POST from './dianPu/PddMallInfoStoreDeletePost';
import PDD_MALL_INFO_STORE_GET from './dianPu/PddMallInfoStoreGet';
import PDD_MALL_INFO_STORE_UPDATE_POST from './dianPu/PddMallInfoStoreUpdatePost';
import PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI from './dianPu/PddMallInfoStoreUpdatePostNopoi';
import PDD_QRPAY_PAYEE_REGISTER from './dianPu/PddQrpayPayeeRegister';
import PDD_SMS_ADD_CROWD from './yingXiaoDuanXin/PddSmsAddCrowd';
import PDD_SMS_CREATE_CUSTOM_TEMPLATE from './yingXiaoDuanXin/PddSmsCreateCustomTemplate';
import PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY from './yingXiaoDuanXin/PddSmsCrowdsPeopleNumberQuery';
import PDD_SMS_CROWDS_QUERY from './yingXiaoDuanXin/PddSmsCrowdsQuery';
import PDD_SMS_CUSTOM_SETTING from './yingXiaoDuanXin/PddSmsCustomSetting';
import PDD_SMS_CUSTOM_TEMPLATE_QUERY from './yingXiaoDuanXin/PddSmsCustomTemplateQuery';
import PDD_SMS_REMAIN_DETAIL_QUERY from './yingXiaoDuanXin/PddSmsRemainDetailQuery';
import PDD_SMS_REMAIN_SETTING from './yingXiaoDuanXin/PddSmsRemainSetting';
import PDD_SMS_REMAIN_SETTING_DETAIL_QUERY from './yingXiaoDuanXin/PddSmsRemainSettingDetailQuery';
import PDD_SMS_SELL_DELETING from './yingXiaoDuanXin/PddSmsSellDeleting';
import PDD_SMS_SELL_RECORD_LIST_QUERY from './yingXiaoDuanXin/PddSmsSellRecordListQuery';
import PDD_SMS_SELL_SETTING from './yingXiaoDuanXin/PddSmsSellSetting';
import PDD_SMS_SELL_SETTING_DETAIL_QUERY from './yingXiaoDuanXin/PddSmsSellSettingDetailQuery';
import PDD_SMS_SELL_SETTING_RECORD_CANCEL from './yingXiaoDuanXin/PddSmsSellSettingRecordCancel';
import PDD_SMS_SEND_RECORD_LIST_QUERY from './yingXiaoDuanXin/PddSmsSendRecordListQuery';
import PDD_SMS_SHORT_STATISTIC_QUERY from './yingXiaoDuanXin/PddSmsShortStatisticQuery';
import PDD_SMS_TEMPLATE_QUERY from './yingXiaoDuanXin/PddSmsTemplateQuery';
import PDD_TIME_GET from './gongJu/PddTimeGet';
import PDD_UTIL_DIVIDE_BASE64_IMAGE from './gongJu/PddUtilDivideBase64Image';
import PDD_EXPRESS_ADD_DEPOT from './cangChu/PddExpressAddDepot';
import PDD_EXPRESS_CHANGE_DEPOT_INFO from './cangChu/PddExpressChangeDepotInfo';
import PDD_EXPRESS_DEPOT_INFO_GET from './cangChu/PddExpressDepotInfoGet';
import PDD_EXPRESS_DEPOT_LIST_GET from './cangChu/PddExpressDepotListGet';
import PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET from './cangChu/PddExpressMallDepotSimpleGet';
import PDD_EXPRESS_SEARCH_DEPOT from './cangChu/PddExpressSearchDepot';
import PDD_STOCK_DEPOT_PRIORITY_LIST from './cangChu/PddStockDepotPriorityList';
import PDD_STOCK_DEPOT_PRIORITY_UPDATE from './cangChu/PddStockDepotPriorityUpdate';
import PDD_STOCK_GOODS_ID_TO_SKU_QUERY from './cangChu/PddStockGoodsIdToSkuQuery';
import PDD_STOCK_WARE_CREATE from './cangChu/PddStockWareCreate';
import PDD_STOCK_WARE_DELETE from './cangChu/PddStockWareDelete';
import PDD_STOCK_WARE_DETAIL_QUERY from './cangChu/PddStockWareDetailQuery';
import PDD_STOCK_WARE_INFO_LIST from './cangChu/PddStockWareInfoList';
import PDD_STOCK_WARE_LIST from './cangChu/PddStockWareList';
import PDD_STOCK_WARE_MOVE from './cangChu/PddStockWareMove';
import PDD_STOCK_WARE_SKU_UPDATE from './cangChu/PddStockWareSkuUpdate';
import PDD_STOCK_WARE_UPDATE from './cangChu/PddStockWareUpdate';
import PDD_PMC_USER_CANCEL from './xiaoXiFuWu/PddPmcUserCancel';
import PDD_PMC_USER_GET from './xiaoXiFuWu/PddPmcUserGet';
import PDD_PMC_USER_PERMIT from './xiaoXiFuWu/PddPmcUserPermit';
import PDD_CLOUDPRINT_CMDPRINT_RENDER from './dianZiMianDan/PddCloudprintCmdprintRender';
import PDD_CLOUDPRINT_CUSTOMARES_GET from './dianZiMianDan/PddCloudprintCustomaresGet';
import PDD_CLOUDPRINT_STDTEMPLATES_GET from './dianZiMianDan/PddCloudprintStdtemplatesGet';
import PDD_WAYBILL_CANCEL from './dianZiMianDan/PddWaybillCancel';
import PDD_WAYBILL_GET from './dianZiMianDan/PddWaybillGet';
import PDD_WAYBILL_QUERY_BY_WAYBILLCODE from './dianZiMianDan/PddWaybillQueryByWaybillcode';
import PDD_WAYBILL_SEARCH from './dianZiMianDan/PddWaybillSearch';
import PDD_WAYBILL_UPDATE from './dianZiMianDan/PddWaybillUpdate';
import PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET from './caiWu/PddFinanceBalanceDailyBillUrlGet';
import PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD from './kaiPingDuanXinFuWu/PddOpenMsgServiceQueryExpressMsgRecord';
import PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD from './kaiPingDuanXinFuWu/PddOpenMsgServiceQueryMsgRecord';
import PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendBatchMsg';
import PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendExpressMsg';
import PDD_OPEN_MSG_SERVICE_SEND_MSG from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendMsg';
import PDD_SERVICEMARKET_SETTLEMENTBILL_GET from './fuWuShiChang/PddServicemarketSettlementbillGet';
import PDD_SERVICEMARKET_TRADELIST_GET from './fuWuShiChang/PddServicemarketTradelistGet';
import PDD_VAS_ORDER_SEARCH from './fuWuShiChang/PddVasOrderSearch';
import PDD_SMS_DETAILBILL_PUSH from './duanXinGongYingShang/PddSmsDetailbillPush';
import PDD_SMS_VENDOR_COMPLAINT_CREATE from './duanXinGongYingShang/PddSmsVendorComplaintCreate';
import PDD_MALL_TICKET_DETAIL from './shangJiaGongDan/PddMallTicketDetail';
import PDD_MALL_TICKET_LIST from './shangJiaGongDan/PddMallTicketList';
import PDD_MALL_TICKET_NOTIFY from './shangJiaGongDan/PddMallTicketNotify';
type defaultType = PDD_ERP_ORDER_SYNC &
  PDD_ORDER_INFORMATION_GET &
  PDD_ORDER_LIST_GET &
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET &
  PDD_ORDER_STATUS_GET &
  PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE &
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL &
  PDD_REFUND_ADDRESS_LIST_GET &
  PDD_REFUND_INFORMATION_GET &
  PDD_REFUND_LIST_INCREMENT_GET &
  PDD_REFUND_STATUS_CHECK &
  PDD_LOGISTICS_ADDRESS_GET &
  PDD_LOGISTICS_COMPANIES_GET &
  PDD_LOGISTICS_ONLINE_CREATE &
  PDD_LOGISTICS_ONLINE_SEND &
  PDD_LOGISTICS_ONLINE_STATUS_QUERY &
  PDD_LOGISTICS_ORDERTRACE_GET &
  PDD_VIRTUAL_GAME_SERVER_QUERY &
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY &
  PDD_DELETE_DRAFT_COMMIT &
  PDD_DELETE_GOODS_COMMIT &
  PDD_GOODS_ADD &
  PDD_GOODS_AUTHORIZATION_CATS &
  PDD_GOODS_CAT_TEMPLATE_GET &
  PDD_GOODS_CATS_GET &
  PDD_GOODS_COMMIT_DETAIL_GET &
  PDD_GOODS_COMMIT_LIST_GET &
  PDD_GOODS_COMMIT_STATUS_GET &
  PDD_GOODS_COUNTRY_GET &
  PDD_GOODS_CPS_MALL_UNIT_CHANGE &
  PDD_GOODS_CPS_MALL_UNIT_CREATE &
  PDD_GOODS_CPS_MALL_UNIT_PAUSE &
  PDD_GOODS_CPS_MALL_UNIT_QUERY &
  PDD_GOODS_CPS_MALL_UNIT_RESUME &
  PDD_GOODS_CPS_UNIT_CHANGE &
  PDD_GOODS_CPS_UNIT_CREATE &
  PDD_GOODS_CPS_UNIT_DELETE &
  PDD_GOODS_CPS_UNIT_QUERY &
  PDD_GOODS_DETAIL_GET &
  PDD_GOODS_EDIT_GOODS_COMMIT &
  PDD_GOODS_GET_RELATION &
  PDD_GOODS_IMAGE_UPLOAD &
  PDD_GOODS_INFORMATION_GET &
  PDD_GOODS_INFORMATION_UPDATE &
  PDD_GOODS_LATEST_COMMIT_STATUS_GET &
  PDD_GOODS_LIST_GET &
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE &
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE &
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL &
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST &
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE &
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE &
  PDD_GOODS_LOGISTICS_TEMPLATE_GET &
  PDD_GOODS_OPT_GET &
  PDD_GOODS_OUTER_CAT_MAPPING_GET &
  PDD_GOODS_QUANTITY_UPDATE &
  PDD_GOODS_RELATION_SET &
  PDD_GOODS_SALE_STATUS_SET &
  PDD_GOODS_SKU_PRICE_UPDATE &
  PDD_GOODS_SPEC_GET &
  PDD_GOODS_SPEC_ID_GET &
  PDD_GOODS_SUBMIT_GOODS_COMMIT &
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH &
  PDD_GOOODS_SKU_MEASUREMENT_LIST &
  PDD_ONE_EXPRESS_COST_TEMPLATE &
  PDD_AD_BALANCE_GET &
  PDD_AD_BID_QUERY_PROFILE &
  PDD_AD_CAN_CREATE_PLAN &
  PDD_AD_CHART_BYKEYWORD_GET &
  PDD_AD_CREATE_LOCATION_BID &
  PDD_AD_CREATE_UNIT_BID &
  PDD_AD_CREATIVE_CREATE &
  PDD_AD_CREATIVE_DELETE &
  PDD_AD_CREATIVE_HISTORY_REPORT_GET &
  PDD_AD_CREATIVE_QUERY &
  PDD_AD_CREATIVE_REPORT_GET &
  PDD_AD_CREATIVE_UPDATE &
  PDD_AD_DELETE_BID &
  PDD_AD_DELETE_LOCATION_BID &
  PDD_AD_HISTORY_KEYWORD_REPORT_GET &
  PDD_AD_HISTORY_PLAN_REPORT_GET &
  PDD_AD_HISTORY_REPORT_GET &
  PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET &
  PDD_AD_HISTORY_RT_PLAN_REPORT_GET &
  PDD_AD_HISTORY_RT_REPORT_GET &
  PDD_AD_HISTORY_RT_UNIT_REPORT_GET &
  PDD_AD_HISTORY_UNIT_REPORT_GET &
  PDD_AD_KEYWORD_CREATE &
  PDD_AD_KEYWORD_DAILY_REPORT &
  PDD_AD_KEYWORD_DELETE &
  PDD_AD_KEYWORD_RCOMMENDED_GET &
  PDD_AD_KEYWORD_RELEVANCE_GET &
  PDD_AD_KEYWORD_UPDATE &
  PDD_AD_PLAN_CREATE &
  PDD_AD_PLAN_DELETE &
  PDD_AD_PLAN_DISCOUNT_UPDATE &
  PDD_AD_PLAN_INFO_LIST_GET &
  PDD_AD_PLAN_MAX_COST_UPDATE &
  PDD_AD_PLAN_NAME_UPDATE &
  PDD_AD_PLAN_OPT_STATUS_UPDATE &
  PDD_AD_QUERY_BID_LIST &
  PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT &
  PDD_AD_QUERY_LOCATION_BID_LIST &
  PDD_AD_QUERY_LOCATION_BID_PV_LIST &
  PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT &
  PDD_AD_UNIT_CREATE &
  PDD_AD_UNIT_DELETE &
  PDD_AD_UNIT_GET_BY_PLAN_ID &
  PDD_AD_UNIT_OPT_STATUS_UPDATE &
  PDD_AD_UPDATE_BID &
  PDD_AD_UPDATE_LOCATION_BID &
  PDD_DDK_CMS_PROM_URL_GENERATE &
  PDD_DDK_COUPON_INFO_QUERY &
  PDD_DDK_FINANCE_CPA_QUERY &
  PDD_DDK_GOODS_BASIC_INFO_GET &
  PDD_DDK_GOODS_DETAIL &
  PDD_DDK_GOODS_PID_GENERATE &
  PDD_DDK_GOODS_PID_QUERY &
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE &
  PDD_DDK_GOODS_RECOMMEND_GET &
  PDD_DDK_GOODS_SEARCH &
  PDD_DDK_GOODS_UNIT_QUERY &
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN &
  PDD_DDK_LOTTERY_URL_GEN &
  PDD_DDK_MALL_GOODS_LIST_GET &
  PDD_DDK_MALL_URL_GEN &
  PDD_DDK_MERCHANT_LIST_GET &
  PDD_DDK_ORDER_DETAIL_GET &
  PDD_DDK_ORDER_LIST_INCREMENT_GET &
  PDD_DDK_ORDER_LIST_RANGE_GET &
  PDD_DDK_RESOURCE_URL_GEN &
  PDD_DDK_RP_PROM_URL_GENERATE &
  PDD_DDK_THEME_GOODS_SEARCH &
  PDD_DDK_THEME_LIST_GET &
  PDD_DDK_THEME_PROM_URL_GENERATE &
  PDD_DDK_TOP_GOODS_LIST_QUERY &
  PDD_DDK_WEAPP_QRCODE_URL_GEN &
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET &
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE &
  PDD_DDK_OAUTH_GOODS_PID_GENERATE &
  PDD_DDK_OAUTH_GOODS_PID_QUERY &
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE &
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET &
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN &
  PDD_DDK_OAUTH_LOTTERY_URL_GEN &
  PDD_DDK_OAUTH_MALL_URL_GEN &
  PDD_DDK_OAUTH_ORDER_DETAIL_GET &
  PDD_DDK_OAUTH_RESOURCE_URL_GEN &
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE &
  PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE &
  PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY &
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET &
  PDD_LOGISTICS_CS_MESSAGE_SEND &
  PDD_LOGISTICS_CS_SESSION_CLOSE &
  PDD_LOGISTICS_CS_SESSION_START &
  PDD_LOGISTICS_TICKET_GET &
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD &
  PDD_LOGISTICS_TICKET_NOTIFY &
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET &
  PDD_PROMOTION_COUPON_CLOSE &
  PDD_PROMOTION_COUPON_QUANTITY_ADD &
  PDD_PROMOTION_GOODS_COUPON_CREATE &
  PDD_PROMOTION_GOODS_COUPON_LIST_GET &
  PDD_PROMOTION_HOME_COUPON_CREATE &
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET &
  PDD_VOUCHER_APPOINTMENT_INFO_SEND &
  PDD_VOUCHER_OTA_CARD_VERIFICATION &
  PDD_VOUCHER_PHYSICAL_GOODS_SEND &
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION &
  PDD_VOUCHER_VOUCHER_COMPLAIN &
  PDD_VOUCHER_VOUCHER_INFO_SEND &
  PDD_INVOICE_APPLICATION_QUERY &
  PDD_INVOICE_APPLICATION_UPDATE &
  PDD_INVOICE_DETAIL_INVALID &
  PDD_INVOICE_DETAIL_QUERY &
  PDD_INVOICE_DETAIL_UPLOAD &
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY &
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET &
  PDD_MALL_INFO_GET &
  PDD_MALL_INFO_GROUP_ADD_STORE_POST &
  PDD_MALL_INFO_GROUP_LIST_STORE_GET &
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET &
  PDD_MALL_INFO_STORE_CREATE_POST &
  PDD_MALL_INFO_STORE_CREATE_POST_NOPOI &
  PDD_MALL_INFO_STORE_DELETE_POST &
  PDD_MALL_INFO_STORE_GET &
  PDD_MALL_INFO_STORE_UPDATE_POST &
  PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI &
  PDD_QRPAY_PAYEE_REGISTER &
  PDD_SMS_ADD_CROWD &
  PDD_SMS_CREATE_CUSTOM_TEMPLATE &
  PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY &
  PDD_SMS_CROWDS_QUERY &
  PDD_SMS_CUSTOM_SETTING &
  PDD_SMS_CUSTOM_TEMPLATE_QUERY &
  PDD_SMS_REMAIN_DETAIL_QUERY &
  PDD_SMS_REMAIN_SETTING &
  PDD_SMS_REMAIN_SETTING_DETAIL_QUERY &
  PDD_SMS_SELL_DELETING &
  PDD_SMS_SELL_RECORD_LIST_QUERY &
  PDD_SMS_SELL_SETTING &
  PDD_SMS_SELL_SETTING_DETAIL_QUERY &
  PDD_SMS_SELL_SETTING_RECORD_CANCEL &
  PDD_SMS_SEND_RECORD_LIST_QUERY &
  PDD_SMS_SHORT_STATISTIC_QUERY &
  PDD_SMS_TEMPLATE_QUERY &
  PDD_TIME_GET &
  PDD_UTIL_DIVIDE_BASE64_IMAGE &
  PDD_EXPRESS_ADD_DEPOT &
  PDD_EXPRESS_CHANGE_DEPOT_INFO &
  PDD_EXPRESS_DEPOT_INFO_GET &
  PDD_EXPRESS_DEPOT_LIST_GET &
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET &
  PDD_EXPRESS_SEARCH_DEPOT &
  PDD_STOCK_DEPOT_PRIORITY_LIST &
  PDD_STOCK_DEPOT_PRIORITY_UPDATE &
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY &
  PDD_STOCK_WARE_CREATE &
  PDD_STOCK_WARE_DELETE &
  PDD_STOCK_WARE_DETAIL_QUERY &
  PDD_STOCK_WARE_INFO_LIST &
  PDD_STOCK_WARE_LIST &
  PDD_STOCK_WARE_MOVE &
  PDD_STOCK_WARE_SKU_UPDATE &
  PDD_STOCK_WARE_UPDATE &
  PDD_PMC_USER_CANCEL &
  PDD_PMC_USER_GET &
  PDD_PMC_USER_PERMIT &
  PDD_CLOUDPRINT_CMDPRINT_RENDER &
  PDD_CLOUDPRINT_CUSTOMARES_GET &
  PDD_CLOUDPRINT_STDTEMPLATES_GET &
  PDD_WAYBILL_CANCEL &
  PDD_WAYBILL_GET &
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE &
  PDD_WAYBILL_SEARCH &
  PDD_WAYBILL_UPDATE &
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET &
  PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD &
  PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD &
  PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG &
  PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG &
  PDD_OPEN_MSG_SERVICE_SEND_MSG &
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET &
  PDD_SERVICEMARKET_TRADELIST_GET &
  PDD_VAS_ORDER_SEARCH &
  PDD_SMS_DETAILBILL_PUSH &
  PDD_SMS_VENDOR_COMPLAINT_CREATE &
  PDD_MALL_TICKET_DETAIL &
  PDD_MALL_TICKET_LIST &
  PDD_MALL_TICKET_NOTIFY;
export default defaultType;
