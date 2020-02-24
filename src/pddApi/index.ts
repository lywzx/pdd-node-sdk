// 订单API
import {
  PDD_ERP_ORDER_SYNC,
  PddErpOrderSyncRequestInterface,
  PddErpOrderSyncResponseInterface,
} from './dingDan/PddErpOrderSync';
import {
  PDD_ORDER_INFORMATION_GET,
  PDD_ORDER_INFORMATION_GET_RESPONSE_KEY,
  PddOrderInformationGetRequestInterface,
  PddOrderInformationGetResponseInterface,
  PddOrderInformationGetOrderInfoGetResponseResponseInterface,
} from './dingDan/PddOrderInformationGet';
import {
  PDD_ORDER_LIST_GET,
  PDD_ORDER_LIST_GET_RESPONSE_KEY,
  PddOrderListGetRequestInterface,
  PddOrderListGetResponseInterface,
  PddOrderListGetOrderListGetResponseResponseInterface,
} from './dingDan/PddOrderListGet';
import {
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET,
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddOrderNumberListIncrementGetRequestInterface,
  PddOrderNumberListIncrementGetResponseInterface,
  PddOrderNumberListIncrementGetOrderSnIncrementGetResponseResponseInterface,
} from './dingDan/PddOrderNumberListIncrementGet';
import {
  PDD_ORDER_STATUS_GET,
  PDD_ORDER_STATUS_GET_RESPONSE_KEY,
  PddOrderStatusGetRequestInterface,
  PddOrderStatusGetResponseInterface,
  PddOrderStatusGetOrderStatusGetResponseResponseInterface,
} from './dingDan/PddOrderStatusGet';
// 物流API
import {
  PDD_LOGISTICS_ADDRESS_GET,
  PDD_LOGISTICS_ADDRESS_GET_RESPONSE_KEY,
  PddLogisticsAddressGetRequestInterface,
  PddLogisticsAddressGetResponseInterface,
  PddLogisticsAddressGetLogisticsAddressGetResponseResponseInterface,
} from './wuLiu/PddLogisticsAddressGet';
import {
  PDD_LOGISTICS_COMPANIES_GET,
  PDD_LOGISTICS_COMPANIES_GET_RESPONSE_KEY,
  PddLogisticsCompaniesGetRequestInterface,
  PddLogisticsCompaniesGetResponseInterface,
  PddLogisticsCompaniesGetLogisticsCompaniesGetResponseResponseInterface,
} from './wuLiu/PddLogisticsCompaniesGet';
import {
  PDD_LOGISTICS_ONLINE_CREATE,
  PDD_LOGISTICS_ONLINE_CREATE_RESPONSE_KEY,
  PddLogisticsOnlineCreateRequestInterface,
  PddLogisticsOnlineCreateResponseInterface,
  PddLogisticsOnlineCreateLogisticsOnlineCreateResponseResponseInterface,
} from './wuLiu/PddLogisticsOnlineCreate';
import {
  PDD_LOGISTICS_ONLINE_SEND,
  PDD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY,
  PddLogisticsOnlineSendRequestInterface,
  PddLogisticsOnlineSendResponseInterface,
  PddLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface,
} from './wuLiu/PddLogisticsOnlineSend';
import {
  PDD_LOGISTICS_ONLINE_STATUS_QUERY,
  PDD_LOGISTICS_ONLINE_STATUS_QUERY_RESPONSE_KEY,
  PddLogisticsOnlineStatusQueryRequestInterface,
  PddLogisticsOnlineStatusQueryResponseInterface,
  PddLogisticsOnlineStatusQueryLogisticsOnlineStatusQueryResponseResponseInterface,
} from './wuLiu/PddLogisticsOnlineStatusQuery';
import {
  PDD_LOGISTICS_ORDERTRACE_GET,
  PddLogisticsOrdertraceGetRequestInterface,
  PddLogisticsOrdertraceGetResponseInterface,
} from './wuLiu/PddLogisticsOrdertraceGet';
// 售后API
import {
  PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE,
  PddNextoneLogisticsWarehouseUpdateRequestInterface,
  PddNextoneLogisticsWarehouseUpdateResponseInterface,
} from './shouHou/PddNextoneLogisticsWarehouseUpdate';
import {
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL,
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL_RESPONSE_KEY,
  PddRdcPddgeniusSendgoodsCancelRequestInterface,
  PddRdcPddgeniusSendgoodsCancelResponseInterface,
  PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResponseInterface,
} from './shouHou/PddRdcPddgeniusSendgoodsCancel';
import {
  PDD_REFUND_ADDRESS_LIST_GET,
  PDD_REFUND_ADDRESS_LIST_GET_RESPONSE_KEY,
  PddRefundAddressListGetRequestInterface,
  PddRefundAddressListGetResponseInterface,
  PddRefundAddressListGetRefundAddressListGetResponseResponseInterface,
} from './shouHou/PddRefundAddressListGet';
import {
  PDD_REFUND_INFORMATION_GET,
  PddRefundInformationGetRequestInterface,
  PddRefundInformationGetResponseInterface,
} from './shouHou/PddRefundInformationGet';
import {
  PDD_REFUND_LIST_INCREMENT_GET,
  PDD_REFUND_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddRefundListIncrementGetRequestInterface,
  PddRefundListIncrementGetResponseInterface,
  PddRefundListIncrementGetRefundIncrementGetResponseResponseInterface,
} from './shouHou/PddRefundListIncrementGet';
import {
  PDD_REFUND_STATUS_CHECK,
  PDD_REFUND_STATUS_CHECK_RESPONSE_KEY,
  PddRefundStatusCheckRequestInterface,
  PddRefundStatusCheckResponseInterface,
  PddRefundStatusCheckRefundStatusCheckResponseResponseInterface,
} from './shouHou/PddRefundStatusCheck';
// 虚拟类目API
import {
  PDD_VIRTUAL_GAME_SERVER_QUERY,
  PDD_VIRTUAL_GAME_SERVER_QUERY_RESPONSE_KEY,
  PddVirtualGameServerQueryRequestInterface,
  PddVirtualGameServerQueryResponseInterface,
  PddVirtualGameServerQueryGameServerQueryResponseResponseInterface,
} from './xuNiLeiMu/PddVirtualGameServerQuery';
import {
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY,
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY_RESPONSE_KEY,
  PddVirtualMobileChargeNotifyRequestInterface,
  PddVirtualMobileChargeNotifyResponseInterface,
  PddVirtualMobileChargeNotifyMobileChargeNotifyResponseResponseInterface,
} from './xuNiLeiMu/PddVirtualMobileChargeNotify';
// 推广API
import {
  PDD_AD_BALANCE_GET,
  PDD_AD_BALANCE_GET_RESPONSE_KEY,
  PddAdBalanceGetRequestInterface,
  PddAdBalanceGetResponseInterface,
  PddAdBalanceGetAdBalanceGetResponseResponseInterface,
} from './tuiGuang/PddAdBalanceGet';
import {
  PDD_AD_BID_QUERY_PROFILE,
  PDD_AD_BID_QUERY_PROFILE_RESPONSE_KEY,
  PddAdBidQueryProfileRequestInterface,
  PddAdBidQueryProfileResponseInterface,
  PddAdBidQueryProfileOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdBidQueryProfile';
import {
  PDD_AD_CAN_CREATE_PLAN,
  PDD_AD_CAN_CREATE_PLAN_RESPONSE_KEY,
  PddAdCanCreatePlanRequestInterface,
  PddAdCanCreatePlanResponseInterface,
  PddAdCanCreatePlanAdPlanCreateResponseResponseInterface,
} from './tuiGuang/PddAdCanCreatePlan';
import {
  PDD_AD_CHART_BYKEYWORD_GET,
  PDD_AD_CHART_BYKEYWORD_GET_RESPONSE_KEY,
  PddAdChartBykeywordGetRequestInterface,
  PddAdChartBykeywordGetResponseInterface,
  PddAdChartBykeywordGetAdKeywordDailyReportResponseResponseInterface,
} from './tuiGuang/PddAdChartBykeywordGet';
import {
  PDD_AD_CREATE_LOCATION_BID,
  PDD_AD_CREATE_LOCATION_BID_RESPONSE_KEY,
  PddAdCreateLocationBidRequestInterface,
  PddAdCreateLocationBidResponseInterface,
  PddAdCreateLocationBidOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdCreateLocationBid';
import {
  PDD_AD_CREATE_UNIT_BID,
  PDD_AD_CREATE_UNIT_BID_RESPONSE_KEY,
  PddAdCreateUnitBidRequestInterface,
  PddAdCreateUnitBidResponseInterface,
  PddAdCreateUnitBidOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdCreateUnitBid';
import {
  PDD_AD_CREATIVE_CREATE,
  PDD_AD_CREATIVE_CREATE_RESPONSE_KEY,
  PddAdCreativeCreateRequestInterface,
  PddAdCreativeCreateResponseInterface,
  PddAdCreativeCreateOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdCreativeCreate';
import {
  PDD_AD_CREATIVE_DELETE,
  PddAdCreativeDeleteRequestInterface,
  PddAdCreativeDeleteResponseInterface,
} from './tuiGuang/PddAdCreativeDelete';
import {
  PDD_AD_CREATIVE_HISTORY_REPORT_GET,
  PDD_AD_CREATIVE_HISTORY_REPORT_GET_RESPONSE_KEY,
  PddAdCreativeHistoryReportGetRequestInterface,
  PddAdCreativeHistoryReportGetResponseInterface,
  PddAdCreativeHistoryReportGetOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdCreativeHistoryReportGet';
import {
  PDD_AD_CREATIVE_QUERY,
  PDD_AD_CREATIVE_QUERY_RESPONSE_KEY,
  PddAdCreativeQueryRequestInterface,
  PddAdCreativeQueryResponseInterface,
  PddAdCreativeQueryOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdCreativeQuery';
import {
  PDD_AD_CREATIVE_REPORT_GET,
  PDD_AD_CREATIVE_REPORT_GET_RESPONSE_KEY,
  PddAdCreativeReportGetRequestInterface,
  PddAdCreativeReportGetResponseInterface,
  PddAdCreativeReportGetAdCreativeReportGetResponseResponseInterface,
} from './tuiGuang/PddAdCreativeReportGet';
import {
  PDD_AD_CREATIVE_UPDATE,
  PddAdCreativeUpdateRequestInterface,
  PddAdCreativeUpdateResponseInterface,
} from './tuiGuang/PddAdCreativeUpdate';
import {
  PDD_AD_DELETE_BID,
  PDD_AD_DELETE_BID_RESPONSE_KEY,
  PddAdDeleteBidRequestInterface,
  PddAdDeleteBidResponseInterface,
  PddAdDeleteBidOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdDeleteBid';
import {
  PDD_AD_DELETE_LOCATION_BID,
  PDD_AD_DELETE_LOCATION_BID_RESPONSE_KEY,
  PddAdDeleteLocationBidRequestInterface,
  PddAdDeleteLocationBidResponseInterface,
  PddAdDeleteLocationBidOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdDeleteLocationBid';
import {
  PDD_AD_HISTORY_KEYWORD_REPORT_GET,
  PDD_AD_HISTORY_KEYWORD_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryKeywordReportGetRequestInterface,
  PddAdHistoryKeywordReportGetResponseInterface,
  PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResponseInterface,
} from './tuiGuang/PddAdHistoryKeywordReportGet';
import {
  PDD_AD_HISTORY_PLAN_REPORT_GET,
  PDD_AD_HISTORY_PLAN_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryPlanReportGetRequestInterface,
  PddAdHistoryPlanReportGetResponseInterface,
  PddAdHistoryPlanReportGetAdPlanHistoryReportGetResponseResponseInterface,
} from './tuiGuang/PddAdHistoryPlanReportGet';
import {
  PDD_AD_HISTORY_REPORT_GET,
  PDD_AD_HISTORY_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryReportGetRequestInterface,
  PddAdHistoryReportGetResponseInterface,
  PddAdHistoryReportGetAdMallHistoryReportResponseResponseInterface,
} from './tuiGuang/PddAdHistoryReportGet';
import {
  PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET,
  PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryRtKeywordReportGetRequestInterface,
  PddAdHistoryRtKeywordReportGetResponseInterface,
  PddAdHistoryRtKeywordReportGetAdKeywordRealTimeReportResponseResponseInterface,
} from './tuiGuang/PddAdHistoryRtKeywordReportGet';
import {
  PDD_AD_HISTORY_RT_PLAN_REPORT_GET,
  PDD_AD_HISTORY_RT_PLAN_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryRtPlanReportGetRequestInterface,
  PddAdHistoryRtPlanReportGetResponseInterface,
  PddAdHistoryRtPlanReportGetAdPlanRealTimeReportResponseResponseInterface,
} from './tuiGuang/PddAdHistoryRtPlanReportGet';
import {
  PDD_AD_HISTORY_RT_REPORT_GET,
  PDD_AD_HISTORY_RT_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryRtReportGetRequestInterface,
  PddAdHistoryRtReportGetResponseInterface,
  PddAdHistoryRtReportGetAdMallRealTimeReportResponseResponseInterface,
} from './tuiGuang/PddAdHistoryRtReportGet';
import {
  PDD_AD_HISTORY_RT_UNIT_REPORT_GET,
  PDD_AD_HISTORY_RT_UNIT_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryRtUnitReportGetRequestInterface,
  PddAdHistoryRtUnitReportGetResponseInterface,
  PddAdHistoryRtUnitReportGetAdUnitRealTimeReportResponseResponseInterface,
} from './tuiGuang/PddAdHistoryRtUnitReportGet';
import {
  PDD_AD_HISTORY_UNIT_REPORT_GET,
  PDD_AD_HISTORY_UNIT_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryUnitReportGetRequestInterface,
  PddAdHistoryUnitReportGetResponseInterface,
  PddAdHistoryUnitReportGetAdUnitHistoryReportGetResponseResponseInterface,
} from './tuiGuang/PddAdHistoryUnitReportGet';
import {
  PDD_AD_KEYWORD_CREATE,
  PDD_AD_KEYWORD_CREATE_RESPONSE_KEY,
  PddAdKeywordCreateRequestInterface,
  PddAdKeywordCreateResponseInterface,
  PddAdKeywordCreateAdKeywordCreateResponseResponseInterface,
} from './tuiGuang/PddAdKeywordCreate';
import {
  PDD_AD_KEYWORD_DAILY_REPORT,
  PddAdKeywordDailyReportRequestInterface,
  PddAdKeywordDailyReportResponseInterface,
} from './tuiGuang/PddAdKeywordDailyReport';
import {
  PDD_AD_KEYWORD_DELETE,
  PDD_AD_KEYWORD_DELETE_RESPONSE_KEY,
  PddAdKeywordDeleteRequestInterface,
  PddAdKeywordDeleteResponseInterface,
  PddAdKeywordDeleteAdKeywordDeleteResponseResponseInterface,
} from './tuiGuang/PddAdKeywordDelete';
import {
  PDD_AD_KEYWORD_RCOMMENDED_GET,
  PDD_AD_KEYWORD_RCOMMENDED_GET_RESPONSE_KEY,
  PddAdKeywordRcommendedGetRequestInterface,
  PddAdKeywordRcommendedGetResponseInterface,
  PddAdKeywordRcommendedGetAdRecommendedKeywordListResponseResponseInterface,
} from './tuiGuang/PddAdKeywordRcommendedGet';
import {
  PDD_AD_KEYWORD_RELEVANCE_GET,
  PDD_AD_KEYWORD_RELEVANCE_GET_RESPONSE_KEY,
  PddAdKeywordRelevanceGetRequestInterface,
  PddAdKeywordRelevanceGetResponseInterface,
  PddAdKeywordRelevanceGetAdKeywordRelevanceListResponseResponseInterface,
} from './tuiGuang/PddAdKeywordRelevanceGet';
import {
  PDD_AD_KEYWORD_UPDATE,
  PDD_AD_KEYWORD_UPDATE_RESPONSE_KEY,
  PddAdKeywordUpdateRequestInterface,
  PddAdKeywordUpdateResponseInterface,
  PddAdKeywordUpdateAdKeywordUpdateResponseResponseInterface,
} from './tuiGuang/PddAdKeywordUpdate';
import {
  PDD_AD_PLAN_CREATE,
  PDD_AD_PLAN_CREATE_RESPONSE_KEY,
  PddAdPlanCreateRequestInterface,
  PddAdPlanCreateResponseInterface,
  PddAdPlanCreateAdPlanCreateResponseResponseInterface,
} from './tuiGuang/PddAdPlanCreate';
import {
  PDD_AD_PLAN_DELETE,
  PDD_AD_PLAN_DELETE_RESPONSE_KEY,
  PddAdPlanDeleteRequestInterface,
  PddAdPlanDeleteResponseInterface,
  PddAdPlanDeleteAdPlanDeleteResponseResponseInterface,
} from './tuiGuang/PddAdPlanDelete';
import {
  PDD_AD_PLAN_DISCOUNT_UPDATE,
  PddAdPlanDiscountUpdateRequestInterface,
  PddAdPlanDiscountUpdateResponseInterface,
} from './tuiGuang/PddAdPlanDiscountUpdate';
import {
  PDD_AD_PLAN_INFO_LIST_GET,
  PDD_AD_PLAN_INFO_LIST_GET_RESPONSE_KEY,
  PddAdPlanInfoListGetRequestInterface,
  PddAdPlanInfoListGetResponseInterface,
  PddAdPlanInfoListGetAdPlanInfoListResponseResponseInterface,
} from './tuiGuang/PddAdPlanInfoListGet';
import {
  PDD_AD_PLAN_MAX_COST_UPDATE,
  PDD_AD_PLAN_MAX_COST_UPDATE_RESPONSE_KEY,
  PddAdPlanMaxCostUpdateRequestInterface,
  PddAdPlanMaxCostUpdateResponseInterface,
  PddAdPlanMaxCostUpdateAdPlanMaxCostUpdateResponseResponseInterface,
} from './tuiGuang/PddAdPlanMaxCostUpdate';
import {
  PDD_AD_PLAN_NAME_UPDATE,
  PDD_AD_PLAN_NAME_UPDATE_RESPONSE_KEY,
  PddAdPlanNameUpdateRequestInterface,
  PddAdPlanNameUpdateResponseInterface,
  PddAdPlanNameUpdateAdPlanNameUpdateResponseResponseInterface,
} from './tuiGuang/PddAdPlanNameUpdate';
import {
  PDD_AD_PLAN_OPT_STATUS_UPDATE,
  PDD_AD_PLAN_OPT_STATUS_UPDATE_RESPONSE_KEY,
  PddAdPlanOptStatusUpdateRequestInterface,
  PddAdPlanOptStatusUpdateResponseInterface,
  PddAdPlanOptStatusUpdateAdPlanOptStatusUpdateResponseResponseInterface,
} from './tuiGuang/PddAdPlanOptStatusUpdate';
import {
  PDD_AD_QUERY_BID_LIST,
  PDD_AD_QUERY_BID_LIST_RESPONSE_KEY,
  PddAdQueryBidListRequestInterface,
  PddAdQueryBidListResponseInterface,
  PddAdQueryBidListOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdQueryBidList';
import {
  PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT,
  PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT_RESPONSE_KEY,
  PddAdQueryLocationBidHistoryReportRequestInterface,
  PddAdQueryLocationBidHistoryReportResponseInterface,
  PddAdQueryLocationBidHistoryReportOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdQueryLocationBidHistoryReport';
import {
  PDD_AD_QUERY_LOCATION_BID_LIST,
  PDD_AD_QUERY_LOCATION_BID_LIST_RESPONSE_KEY,
  PddAdQueryLocationBidListRequestInterface,
  PddAdQueryLocationBidListResponseInterface,
  PddAdQueryLocationBidListOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdQueryLocationBidList';
import {
  PDD_AD_QUERY_LOCATION_BID_PV_LIST,
  PDD_AD_QUERY_LOCATION_BID_PV_LIST_RESPONSE_KEY,
  PddAdQueryLocationBidPvListRequestInterface,
  PddAdQueryLocationBidPvListResponseInterface,
  PddAdQueryLocationBidPvListOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdQueryLocationBidPvList';
import {
  PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT,
  PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT_RESPONSE_KEY,
  PddAdQueryUnitBidHistoryReportRequestInterface,
  PddAdQueryUnitBidHistoryReportResponseInterface,
  PddAdQueryUnitBidHistoryReportOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdQueryUnitBidHistoryReport';
import {
  PDD_AD_UNIT_CREATE,
  PDD_AD_UNIT_CREATE_RESPONSE_KEY,
  PddAdUnitCreateRequestInterface,
  PddAdUnitCreateResponseInterface,
  PddAdUnitCreateAdUnitCreateResponseResponseInterface,
} from './tuiGuang/PddAdUnitCreate';
import {
  PDD_AD_UNIT_DELETE,
  PDD_AD_UNIT_DELETE_RESPONSE_KEY,
  PddAdUnitDeleteRequestInterface,
  PddAdUnitDeleteResponseInterface,
  PddAdUnitDeleteAdUnitDeleteResponseResponseInterface,
} from './tuiGuang/PddAdUnitDelete';
import {
  PDD_AD_UNIT_GET_BY_PLAN_ID,
  PDD_AD_UNIT_GET_BY_PLAN_ID_RESPONSE_KEY,
  PddAdUnitGetByPlanIdRequestInterface,
  PddAdUnitGetByPlanIdResponseInterface,
  PddAdUnitGetByPlanIdAdUnitBaseInfoListResponseResponseInterface,
} from './tuiGuang/PddAdUnitGetByPlanId';
import {
  PDD_AD_UNIT_OPT_STATUS_UPDATE,
  PDD_AD_UNIT_OPT_STATUS_UPDATE_RESPONSE_KEY,
  PddAdUnitOptStatusUpdateRequestInterface,
  PddAdUnitOptStatusUpdateResponseInterface,
  PddAdUnitOptStatusUpdateAdUnitOptStatusUpdateResponseResponseInterface,
} from './tuiGuang/PddAdUnitOptStatusUpdate';
import {
  PDD_AD_UPDATE_BID,
  PDD_AD_UPDATE_BID_RESPONSE_KEY,
  PddAdUpdateBidRequestInterface,
  PddAdUpdateBidResponseInterface,
  PddAdUpdateBidOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdUpdateBid';
import {
  PDD_AD_UPDATE_LOCATION_BID,
  PDD_AD_UPDATE_LOCATION_BID_RESPONSE_KEY,
  PddAdUpdateLocationBidRequestInterface,
  PddAdUpdateLocationBidResponseInterface,
  PddAdUpdateLocationBidOpenApiResponseResponseInterface,
} from './tuiGuang/PddAdUpdateLocationBid';
// 商品API
import {
  PDD_DELETE_DRAFT_COMMIT,
  PddDeleteDraftCommitRequestInterface,
  PddDeleteDraftCommitResponseInterface,
} from './shangPin/PddDeleteDraftCommit';
import {
  PDD_DELETE_GOODS_COMMIT,
  PddDeleteGoodsCommitRequestInterface,
  PddDeleteGoodsCommitResponseInterface,
} from './shangPin/PddDeleteGoodsCommit';
import {
  PDD_GOODS_ADD,
  PDD_GOODS_ADD_RESPONSE_KEY,
  PddGoodsAddRequestInterface,
  PddGoodsAddResponseInterface,
  PddGoodsAddGoodsAddResponseResponseInterface,
} from './shangPin/PddGoodsAdd';
import {
  PDD_GOODS_AUTHORIZATION_CATS,
  PDD_GOODS_AUTHORIZATION_CATS_RESPONSE_KEY,
  PddGoodsAuthorizationCatsRequestInterface,
  PddGoodsAuthorizationCatsResponseInterface,
  PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseResponseInterface,
} from './shangPin/PddGoodsAuthorizationCats';
import {
  PDD_GOODS_CAT_TEMPLATE_GET,
  PDD_GOODS_CAT_TEMPLATE_GET_RESPONSE_KEY,
  PddGoodsCatTemplateGetRequestInterface,
  PddGoodsCatTemplateGetResponseInterface,
  PddGoodsCatTemplateGetOpenApiResponseResponseInterface,
} from './shangPin/PddGoodsCatTemplateGet';
import {
  PDD_GOODS_CATS_GET,
  PDD_GOODS_CATS_GET_RESPONSE_KEY,
  PddGoodsCatsGetRequestInterface,
  PddGoodsCatsGetResponseInterface,
  PddGoodsCatsGetGoodsCatsGetResponseResponseInterface,
} from './shangPin/PddGoodsCatsGet';
import {
  PDD_GOODS_COMMIT_DETAIL_GET,
  PDD_GOODS_COMMIT_DETAIL_GET_RESPONSE_KEY,
  PddGoodsCommitDetailGetRequestInterface,
  PddGoodsCommitDetailGetResponseInterface,
  PddGoodsCommitDetailGetGoodsCommitDetailResponseResponseInterface,
} from './shangPin/PddGoodsCommitDetailGet';
import {
  PDD_GOODS_COMMIT_LIST_GET,
  PDD_GOODS_COMMIT_LIST_GET_RESPONSE_KEY,
  PddGoodsCommitListGetRequestInterface,
  PddGoodsCommitListGetResponseInterface,
  PddGoodsCommitListGetGoodsCommitListGetResponseResponseInterface,
} from './shangPin/PddGoodsCommitListGet';
import {
  PDD_GOODS_COMMIT_STATUS_GET,
  PDD_GOODS_COMMIT_STATUS_GET_RESPONSE_KEY,
  PddGoodsCommitStatusGetRequestInterface,
  PddGoodsCommitStatusGetResponseInterface,
  PddGoodsCommitStatusGetGoodsCommitStatusGetResponseResponseInterface,
} from './shangPin/PddGoodsCommitStatusGet';
import {
  PDD_GOODS_COUNTRY_GET,
  PDD_GOODS_COUNTRY_GET_RESPONSE_KEY,
  PddGoodsCountryGetRequestInterface,
  PddGoodsCountryGetResponseInterface,
  PddGoodsCountryGetGoodsCountryGetResponseResponseInterface,
} from './shangPin/PddGoodsCountryGet';
import {
  PDD_GOODS_CPS_MALL_UNIT_CHANGE,
  PDD_GOODS_CPS_MALL_UNIT_CHANGE_RESPONSE_KEY,
  PddGoodsCpsMallUnitChangeRequestInterface,
  PddGoodsCpsMallUnitChangeResponseInterface,
  PddGoodsCpsMallUnitChangeGoodsCpsMallUnitChangeResponseResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitChange';
import {
  PDD_GOODS_CPS_MALL_UNIT_CREATE,
  PddGoodsCpsMallUnitCreateRequestInterface,
  PddGoodsCpsMallUnitCreateResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitCreate';
import {
  PDD_GOODS_CPS_MALL_UNIT_PAUSE,
  PDD_GOODS_CPS_MALL_UNIT_PAUSE_RESPONSE_KEY,
  PddGoodsCpsMallUnitPauseRequestInterface,
  PddGoodsCpsMallUnitPauseResponseInterface,
  PddGoodsCpsMallUnitPauseGoodsCpsMallUnitQueryResponseResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitPause';
import {
  PDD_GOODS_CPS_MALL_UNIT_QUERY,
  PDD_GOODS_CPS_MALL_UNIT_QUERY_RESPONSE_KEY,
  PddGoodsCpsMallUnitQueryRequestInterface,
  PddGoodsCpsMallUnitQueryResponseInterface,
  PddGoodsCpsMallUnitQueryGoodsCpsMallUnitQueryResponseResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitQuery';
import {
  PDD_GOODS_CPS_MALL_UNIT_RESUME,
  PDD_GOODS_CPS_MALL_UNIT_RESUME_RESPONSE_KEY,
  PddGoodsCpsMallUnitResumeRequestInterface,
  PddGoodsCpsMallUnitResumeResponseInterface,
  PddGoodsCpsMallUnitResumeGoodsCpsMallUnitResumeResponseResponseInterface,
} from './shangPin/PddGoodsCpsMallUnitResume';
import {
  PDD_GOODS_CPS_UNIT_CHANGE,
  PddGoodsCpsUnitChangeRequestInterface,
  PddGoodsCpsUnitChangeResponseInterface,
} from './shangPin/PddGoodsCpsUnitChange';
import {
  PDD_GOODS_CPS_UNIT_CREATE,
  PddGoodsCpsUnitCreateRequestInterface,
  PddGoodsCpsUnitCreateResponseInterface,
} from './shangPin/PddGoodsCpsUnitCreate';
import {
  PDD_GOODS_CPS_UNIT_DELETE,
  PDD_GOODS_CPS_UNIT_DELETE_RESPONSE_KEY,
  PddGoodsCpsUnitDeleteRequestInterface,
  PddGoodsCpsUnitDeleteResponseInterface,
  PddGoodsCpsUnitDeleteGoodsCpsUnitDeleteResponseResponseInterface,
} from './shangPin/PddGoodsCpsUnitDelete';
import {
  PDD_GOODS_CPS_UNIT_QUERY,
  PddGoodsCpsUnitQueryRequestInterface,
  PddGoodsCpsUnitQueryResponseInterface,
} from './shangPin/PddGoodsCpsUnitQuery';
import {
  PDD_GOODS_DETAIL_GET,
  PDD_GOODS_DETAIL_GET_RESPONSE_KEY,
  PddGoodsDetailGetRequestInterface,
  PddGoodsDetailGetResponseInterface,
  PddGoodsDetailGetGoodsDetailGetResponseResponseInterface,
} from './shangPin/PddGoodsDetailGet';
import {
  PDD_GOODS_EDIT_GOODS_COMMIT,
  PDD_GOODS_EDIT_GOODS_COMMIT_RESPONSE_KEY,
  PddGoodsEditGoodsCommitRequestInterface,
  PddGoodsEditGoodsCommitResponseInterface,
  PddGoodsEditGoodsCommitGoodsUpdateResponseResponseInterface,
} from './shangPin/PddGoodsEditGoodsCommit';
import {
  PDD_GOODS_GET_RELATION,
  PDD_GOODS_GET_RELATION_RESPONSE_KEY,
  PddGoodsGetRelationRequestInterface,
  PddGoodsGetRelationResponseInterface,
  PddGoodsGetRelationQueryGoodsRelationResponseResponseInterface,
} from './shangPin/PddGoodsGetRelation';
import {
  PDD_GOODS_IMAGE_UPLOAD,
  PDD_GOODS_IMAGE_UPLOAD_RESPONSE_KEY,
  PddGoodsImageUploadRequestInterface,
  PddGoodsImageUploadResponseInterface,
  PddGoodsImageUploadGoodsImageUploadResponseResponseInterface,
} from './shangPin/PddGoodsImageUpload';
import {
  PDD_GOODS_INFORMATION_GET,
  PDD_GOODS_INFORMATION_GET_RESPONSE_KEY,
  PddGoodsInformationGetRequestInterface,
  PddGoodsInformationGetResponseInterface,
  PddGoodsInformationGetGoodsInfoGetResponseResponseInterface,
} from './shangPin/PddGoodsInformationGet';
import {
  PDD_GOODS_INFORMATION_UPDATE,
  PDD_GOODS_INFORMATION_UPDATE_RESPONSE_KEY,
  PddGoodsInformationUpdateRequestInterface,
  PddGoodsInformationUpdateResponseInterface,
  PddGoodsInformationUpdateGoodsUpdateResponseResponseInterface,
} from './shangPin/PddGoodsInformationUpdate';
import {
  PDD_GOODS_LATEST_COMMIT_STATUS_GET,
  PDD_GOODS_LATEST_COMMIT_STATUS_GET_RESPONSE_KEY,
  PddGoodsLatestCommitStatusGetRequestInterface,
  PddGoodsLatestCommitStatusGetResponseInterface,
  PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseResponseInterface,
} from './shangPin/PddGoodsLatestCommitStatusGet';
import {
  PDD_GOODS_LIST_GET,
  PDD_GOODS_LIST_GET_RESPONSE_KEY,
  PddGoodsListGetRequestInterface,
  PddGoodsListGetResponseInterface,
  PddGoodsListGetGoodsListGetResponseResponseInterface,
} from './shangPin/PddGoodsListGet';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateCreateRequestInterface,
  PddGoodsLogisticsSerTemplateCreateResponseInterface,
  PddGoodsLogisticsSerTemplateCreateGoodsLogisticsSerTemplateCreateResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateCreate';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateDeleteRequestInterface,
  PddGoodsLogisticsSerTemplateDeleteResponseInterface,
  PddGoodsLogisticsSerTemplateDeleteGoodsLogisticsSerTemplateDeleteResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateDelete';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateDetailRequestInterface,
  PddGoodsLogisticsSerTemplateDetailResponseInterface,
  PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateDetail';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateListRequestInterface,
  PddGoodsLogisticsSerTemplateListResponseInterface,
  PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateList';
import {
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateUpdateRequestInterface,
  PddGoodsLogisticsSerTemplateUpdateResponseInterface,
  PddGoodsLogisticsSerTemplateUpdateGoodsLogisticsSerTemplateCreateResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsSerTemplateUpdate';
import {
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE,
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE_RESPONSE_KEY,
  PddGoodsLogisticsTemplateCreateRequestInterface,
  PddGoodsLogisticsTemplateCreateResponseInterface,
  PddGoodsLogisticsTemplateCreateGoodsLogisticsTemplateCreateResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsTemplateCreate';
import {
  PDD_GOODS_LOGISTICS_TEMPLATE_GET,
  PDD_GOODS_LOGISTICS_TEMPLATE_GET_RESPONSE_KEY,
  PddGoodsLogisticsTemplateGetRequestInterface,
  PddGoodsLogisticsTemplateGetResponseInterface,
  PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface,
} from './shangPin/PddGoodsLogisticsTemplateGet';
import {
  PDD_GOODS_OPT_GET,
  PDD_GOODS_OPT_GET_RESPONSE_KEY,
  PddGoodsOptGetRequestInterface,
  PddGoodsOptGetResponseInterface,
  PddGoodsOptGetGoodsOptGetResponseResponseInterface,
} from './shangPin/PddGoodsOptGet';
import {
  PDD_GOODS_OUTER_CAT_MAPPING_GET,
  PDD_GOODS_OUTER_CAT_MAPPING_GET_RESPONSE_KEY,
  PddGoodsOuterCatMappingGetRequestInterface,
  PddGoodsOuterCatMappingGetResponseInterface,
  PddGoodsOuterCatMappingGetOuterCatMappingGetResponseResponseInterface,
} from './shangPin/PddGoodsOuterCatMappingGet';
import {
  PDD_GOODS_QUANTITY_UPDATE,
  PDD_GOODS_QUANTITY_UPDATE_RESPONSE_KEY,
  PddGoodsQuantityUpdateRequestInterface,
  PddGoodsQuantityUpdateResponseInterface,
  PddGoodsQuantityUpdateGoodsQuantityUpdateResponseResponseInterface,
} from './shangPin/PddGoodsQuantityUpdate';
import {
  PDD_GOODS_RELATION_SET,
  PDD_GOODS_RELATION_SET_RESPONSE_KEY,
  PddGoodsRelationSetRequestInterface,
  PddGoodsRelationSetResponseInterface,
  PddGoodsRelationSetGoodsRelationSetResponseResponseInterface,
} from './shangPin/PddGoodsRelationSet';
import {
  PDD_GOODS_SALE_STATUS_SET,
  PDD_GOODS_SALE_STATUS_SET_RESPONSE_KEY,
  PddGoodsSaleStatusSetRequestInterface,
  PddGoodsSaleStatusSetResponseInterface,
  PddGoodsSaleStatusSetGoodsSaleStatusSetResponseResponseInterface,
} from './shangPin/PddGoodsSaleStatusSet';
import {
  PDD_GOODS_SKU_PRICE_UPDATE,
  PDD_GOODS_SKU_PRICE_UPDATE_RESPONSE_KEY,
  PddGoodsSkuPriceUpdateRequestInterface,
  PddGoodsSkuPriceUpdateResponseInterface,
  PddGoodsSkuPriceUpdateGoodsUpdateSkuPriceResponseResponseInterface,
} from './shangPin/PddGoodsSkuPriceUpdate';
import {
  PDD_GOODS_SPEC_GET,
  PDD_GOODS_SPEC_GET_RESPONSE_KEY,
  PddGoodsSpecGetRequestInterface,
  PddGoodsSpecGetResponseInterface,
  PddGoodsSpecGetGoodsSpecGetResponseResponseInterface,
} from './shangPin/PddGoodsSpecGet';
import {
  PDD_GOODS_SPEC_ID_GET,
  PDD_GOODS_SPEC_ID_GET_RESPONSE_KEY,
  PddGoodsSpecIdGetRequestInterface,
  PddGoodsSpecIdGetResponseInterface,
  PddGoodsSpecIdGetGoodsSpecIdGetResponseResponseInterface,
} from './shangPin/PddGoodsSpecIdGet';
import {
  PDD_GOODS_SUBMIT_GOODS_COMMIT,
  PDD_GOODS_SUBMIT_GOODS_COMMIT_RESPONSE_KEY,
  PddGoodsSubmitGoodsCommitRequestInterface,
  PddGoodsSubmitGoodsCommitResponseInterface,
  PddGoodsSubmitGoodsCommitGoodsUpdateResponseResponseInterface,
} from './shangPin/PddGoodsSubmitGoodsCommit';
import {
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH,
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH_RESPONSE_KEY,
  PddGoodsTemplatePropertyValueSearchRequestInterface,
  PddGoodsTemplatePropertyValueSearchResponseInterface,
  PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseResponseInterface,
} from './shangPin/PddGoodsTemplatePropertyValueSearch';
import {
  PDD_GOOODS_SKU_MEASUREMENT_LIST,
  PDD_GOOODS_SKU_MEASUREMENT_LIST_RESPONSE_KEY,
  PddGooodsSkuMeasurementListRequestInterface,
  PddGooodsSkuMeasurementListResponseInterface,
  PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseResponseInterface,
} from './shangPin/PddGooodsSkuMeasurementList';
import {
  PDD_ONE_EXPRESS_COST_TEMPLATE,
  PDD_ONE_EXPRESS_COST_TEMPLATE_RESPONSE_KEY,
  PddOneExpressCostTemplateRequestInterface,
  PddOneExpressCostTemplateResponseInterface,
  PddOneExpressCostTemplateOneExpressCostTemplateResponseResponseInterface,
} from './shangPin/PddOneExpressCostTemplate';
// 多多客API
import {
  PDD_DDK_CMS_PROM_URL_GENERATE,
  PDD_DDK_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkCmsPromUrlGenerateRequestInterface,
  PddDdkCmsPromUrlGenerateResponseInterface,
  PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface,
} from './duoDuoKe/PddDdkCmsPromUrlGenerate';
import {
  PDD_DDK_COUPON_INFO_QUERY,
  PDD_DDK_COUPON_INFO_QUERY_RESPONSE_KEY,
  PddDdkCouponInfoQueryRequestInterface,
  PddDdkCouponInfoQueryResponseInterface,
  PddDdkCouponInfoQueryDdkCouponInfoQueryResponseResponseInterface,
} from './duoDuoKe/PddDdkCouponInfoQuery';
import {
  PDD_DDK_FINANCE_CPA_QUERY,
  PDD_DDK_FINANCE_CPA_QUERY_RESPONSE_KEY,
  PddDdkFinanceCpaQueryRequestInterface,
  PddDdkFinanceCpaQueryResponseInterface,
  PddDdkFinanceCpaQueryFinanceCpaQueryResponseResponseInterface,
} from './duoDuoKe/PddDdkFinanceCpaQuery';
import {
  PDD_DDK_GOODS_BASIC_INFO_GET,
  PDD_DDK_GOODS_BASIC_INFO_GET_RESPONSE_KEY,
  PddDdkGoodsBasicInfoGetRequestInterface,
  PddDdkGoodsBasicInfoGetResponseInterface,
  PddDdkGoodsBasicInfoGetGoodsBasicDetailResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsBasicInfoGet';
import {
  PDD_DDK_GOODS_DETAIL,
  PDD_DDK_GOODS_DETAIL_RESPONSE_KEY,
  PddDdkGoodsDetailRequestInterface,
  PddDdkGoodsDetailResponseInterface,
  PddDdkGoodsDetailGoodsDetailResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsDetail';
import {
  PDD_DDK_GOODS_PID_GENERATE,
  PDD_DDK_GOODS_PID_GENERATE_RESPONSE_KEY,
  PddDdkGoodsPidGenerateRequestInterface,
  PddDdkGoodsPidGenerateResponseInterface,
  PddDdkGoodsPidGeneratePIdGenerateResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsPidGenerate';
import {
  PDD_DDK_GOODS_PID_QUERY,
  PDD_DDK_GOODS_PID_QUERY_RESPONSE_KEY,
  PddDdkGoodsPidQueryRequestInterface,
  PddDdkGoodsPidQueryResponseInterface,
  PddDdkGoodsPidQueryPIdQueryResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsPidQuery';
import {
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE,
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE_RESPONSE_KEY,
  PddDdkGoodsPromotionUrlGenerateRequestInterface,
  PddDdkGoodsPromotionUrlGenerateResponseInterface,
  PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsPromotionUrlGenerate';
import {
  PDD_DDK_GOODS_RECOMMEND_GET,
  PDD_DDK_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  PddDdkGoodsRecommendGetRequestInterface,
  PddDdkGoodsRecommendGetResponseInterface,
  PddDdkGoodsRecommendGetGoodsBasicDetailResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsRecommendGet';
import {
  PDD_DDK_GOODS_SEARCH,
  PDD_DDK_GOODS_SEARCH_RESPONSE_KEY,
  PddDdkGoodsSearchRequestInterface,
  PddDdkGoodsSearchResponseInterface,
  PddDdkGoodsSearchGoodsSearchResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsSearch';
import {
  PDD_DDK_GOODS_UNIT_QUERY,
  PDD_DDK_GOODS_UNIT_QUERY_RESPONSE_KEY,
  PddDdkGoodsUnitQueryRequestInterface,
  PddDdkGoodsUnitQueryResponseInterface,
  PddDdkGoodsUnitQueryDdkGoodsUnitQueryResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsUnitQuery';
import {
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN,
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  PddDdkGoodsZsUnitUrlGenRequestInterface,
  PddDdkGoodsZsUnitUrlGenResponseInterface,
  PddDdkGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface,
} from './duoDuoKe/PddDdkGoodsZsUnitUrlGen';
import {
  PDD_DDK_LOTTERY_URL_GEN,
  PDD_DDK_LOTTERY_URL_GEN_RESPONSE_KEY,
  PddDdkLotteryUrlGenRequestInterface,
  PddDdkLotteryUrlGenResponseInterface,
  PddDdkLotteryUrlGenLotteryUrlResponseResponseInterface,
} from './duoDuoKe/PddDdkLotteryUrlGen';
import {
  PDD_DDK_MALL_GOODS_LIST_GET,
  PDD_DDK_MALL_GOODS_LIST_GET_RESPONSE_KEY,
  PddDdkMallGoodsListGetRequestInterface,
  PddDdkMallGoodsListGetResponseInterface,
  PddDdkMallGoodsListGetGoodsInfoListResponseResponseInterface,
} from './duoDuoKe/PddDdkMallGoodsListGet';
import {
  PDD_DDK_MALL_URL_GEN,
  PDD_DDK_MALL_URL_GEN_RESPONSE_KEY,
  PddDdkMallUrlGenRequestInterface,
  PddDdkMallUrlGenResponseInterface,
  PddDdkMallUrlGenMallCouponGenerateUrlResponseResponseInterface,
} from './duoDuoKe/PddDdkMallUrlGen';
import {
  PDD_DDK_MERCHANT_LIST_GET,
  PDD_DDK_MERCHANT_LIST_GET_RESPONSE_KEY,
  PddDdkMerchantListGetRequestInterface,
  PddDdkMerchantListGetResponseInterface,
  PddDdkMerchantListGetMerchantListResponseResponseInterface,
} from './duoDuoKe/PddDdkMerchantListGet';
import {
  PDD_DDK_ORDER_DETAIL_GET,
  PDD_DDK_ORDER_DETAIL_GET_RESPONSE_KEY,
  PddDdkOrderDetailGetRequestInterface,
  PddDdkOrderDetailGetResponseInterface,
  PddDdkOrderDetailGetOrderDetailResponseResponseInterface,
} from './duoDuoKe/PddDdkOrderDetailGet';
import {
  PDD_DDK_ORDER_LIST_INCREMENT_GET,
  PDD_DDK_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddDdkOrderListIncrementGetRequestInterface,
  PddDdkOrderListIncrementGetResponseInterface,
  PddDdkOrderListIncrementGetOrderListGetResponseResponseInterface,
} from './duoDuoKe/PddDdkOrderListIncrementGet';
import {
  PDD_DDK_ORDER_LIST_RANGE_GET,
  PDD_DDK_ORDER_LIST_RANGE_GET_RESPONSE_KEY,
  PddDdkOrderListRangeGetRequestInterface,
  PddDdkOrderListRangeGetResponseInterface,
  PddDdkOrderListRangeGetOrderListGetResponseResponseInterface,
} from './duoDuoKe/PddDdkOrderListRangeGet';
import {
  PDD_DDK_RESOURCE_URL_GEN,
  PDD_DDK_RESOURCE_URL_GEN_RESPONSE_KEY,
  PddDdkResourceUrlGenRequestInterface,
  PddDdkResourceUrlGenResponseInterface,
  PddDdkResourceUrlGenResourceUrlResponseResponseInterface,
} from './duoDuoKe/PddDdkResourceUrlGen';
import {
  PDD_DDK_RP_PROM_URL_GENERATE,
  PDD_DDK_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkRpPromUrlGenerateRequestInterface,
  PddDdkRpPromUrlGenerateResponseInterface,
  PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface,
} from './duoDuoKe/PddDdkRpPromUrlGenerate';
import {
  PDD_DDK_THEME_GOODS_SEARCH,
  PDD_DDK_THEME_GOODS_SEARCH_RESPONSE_KEY,
  PddDdkThemeGoodsSearchRequestInterface,
  PddDdkThemeGoodsSearchResponseInterface,
  PddDdkThemeGoodsSearchThemeListGetResponseResponseInterface,
} from './duoDuoKe/PddDdkThemeGoodsSearch';
import {
  PDD_DDK_THEME_LIST_GET,
  PDD_DDK_THEME_LIST_GET_RESPONSE_KEY,
  PddDdkThemeListGetRequestInterface,
  PddDdkThemeListGetResponseInterface,
  PddDdkThemeListGetThemeListGetResponseResponseInterface,
} from './duoDuoKe/PddDdkThemeListGet';
import {
  PDD_DDK_THEME_PROM_URL_GENERATE,
  PDD_DDK_THEME_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkThemePromUrlGenerateRequestInterface,
  PddDdkThemePromUrlGenerateResponseInterface,
  PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseResponseInterface,
} from './duoDuoKe/PddDdkThemePromUrlGenerate';
import {
  PDD_DDK_TOP_GOODS_LIST_QUERY,
  PDD_DDK_TOP_GOODS_LIST_QUERY_RESPONSE_KEY,
  PddDdkTopGoodsListQueryRequestInterface,
  PddDdkTopGoodsListQueryResponseInterface,
  PddDdkTopGoodsListQueryTopGoodsListGetResponseResponseInterface,
} from './duoDuoKe/PddDdkTopGoodsListQuery';
import {
  PDD_DDK_WEAPP_QRCODE_URL_GEN,
  PDD_DDK_WEAPP_QRCODE_URL_GEN_RESPONSE_KEY,
  PddDdkWeappQrcodeUrlGenRequestInterface,
  PddDdkWeappQrcodeUrlGenResponseInterface,
  PddDdkWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface,
} from './duoDuoKe/PddDdkWeappQrcodeUrlGen';
// 多多客工具API
import {
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET,
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddDdkAllOrderListIncrementGetRequestInterface,
  PddDdkAllOrderListIncrementGetResponseInterface,
  PddDdkAllOrderListIncrementGetOrderListGetResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkAllOrderListIncrementGet';
import {
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthCmsPromUrlGenerateRequestInterface,
  PddDdkOauthCmsPromUrlGenerateResponseInterface,
  PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthCmsPromUrlGenerate';
import {
  PDD_DDK_OAUTH_GOODS_PID_GENERATE,
  PDD_DDK_OAUTH_GOODS_PID_GENERATE_RESPONSE_KEY,
  PddDdkOauthGoodsPidGenerateRequestInterface,
  PddDdkOauthGoodsPidGenerateResponseInterface,
  PddDdkOauthGoodsPidGeneratePIdGenerateResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsPidGenerate';
import {
  PDD_DDK_OAUTH_GOODS_PID_QUERY,
  PDD_DDK_OAUTH_GOODS_PID_QUERY_RESPONSE_KEY,
  PddDdkOauthGoodsPidQueryRequestInterface,
  PddDdkOauthGoodsPidQueryResponseInterface,
  PddDdkOauthGoodsPidQueryPIdQueryResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsPidQuery';
import {
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthGoodsPromUrlGenerateRequestInterface,
  PddDdkOauthGoodsPromUrlGenerateResponseInterface,
  PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsPromUrlGenerate';
import {
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET,
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  PddDdkOauthGoodsRecommendGetRequestInterface,
  PddDdkOauthGoodsRecommendGetResponseInterface,
  PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsRecommendGet';
import {
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN,
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  PddDdkOauthGoodsZsUnitUrlGenRequestInterface,
  PddDdkOauthGoodsZsUnitUrlGenResponseInterface,
  PddDdkOauthGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthGoodsZsUnitUrlGen';
import {
  PDD_DDK_OAUTH_LOTTERY_URL_GEN,
  PDD_DDK_OAUTH_LOTTERY_URL_GEN_RESPONSE_KEY,
  PddDdkOauthLotteryUrlGenRequestInterface,
  PddDdkOauthLotteryUrlGenResponseInterface,
  PddDdkOauthLotteryUrlGenLotteryUrlResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthLotteryUrlGen';
import {
  PDD_DDK_OAUTH_MALL_URL_GEN,
  PDD_DDK_OAUTH_MALL_URL_GEN_RESPONSE_KEY,
  PddDdkOauthMallUrlGenRequestInterface,
  PddDdkOauthMallUrlGenResponseInterface,
  PddDdkOauthMallUrlGenMallCouponGenerateUrlResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthMallUrlGen';
import {
  PDD_DDK_OAUTH_ORDER_DETAIL_GET,
  PDD_DDK_OAUTH_ORDER_DETAIL_GET_RESPONSE_KEY,
  PddDdkOauthOrderDetailGetRequestInterface,
  PddDdkOauthOrderDetailGetResponseInterface,
  PddDdkOauthOrderDetailGetOrderDetailResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthOrderDetailGet';
import {
  PDD_DDK_OAUTH_RESOURCE_URL_GEN,
  PDD_DDK_OAUTH_RESOURCE_URL_GEN_RESPONSE_KEY,
  PddDdkOauthResourceUrlGenRequestInterface,
  PddDdkOauthResourceUrlGenResponseInterface,
  PddDdkOauthResourceUrlGenResourceUrlResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthResourceUrlGen';
import {
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthRpPromUrlGenerateRequestInterface,
  PddDdkOauthRpPromUrlGenerateResponseInterface,
  PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthRpPromUrlGenerate';
import {
  PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthThemePromUrlGenerateRequestInterface,
  PddDdkOauthThemePromUrlGenerateResponseInterface,
  PddDdkOauthThemePromUrlGenerateThemePromotionUrlGenerateResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthThemePromUrlGenerate';
import {
  PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY,
  PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY_RESPONSE_KEY,
  PddDdkOauthTopGoodsListQueryRequestInterface,
  PddDdkOauthTopGoodsListQueryResponseInterface,
  PddDdkOauthTopGoodsListQueryTopGoodsListGetResponseResponseInterface,
} from './duoDuoKeGongJu/PddDdkOauthTopGoodsListQuery';
// 物流商API
import {
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET,
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET_RESPONSE_KEY,
  PddLogisticsCsHistoryMessageGetRequestInterface,
  PddLogisticsCsHistoryMessageGetResponseInterface,
  PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseResponseInterface,
} from './wuLiuShang/PddLogisticsCsHistoryMessageGet';
import {
  PDD_LOGISTICS_CS_MESSAGE_SEND,
  PDD_LOGISTICS_CS_MESSAGE_SEND_RESPONSE_KEY,
  PddLogisticsCsMessageSendRequestInterface,
  PddLogisticsCsMessageSendResponseInterface,
  PddLogisticsCsMessageSendLogisticsCsMessageSendResponseResponseInterface,
} from './wuLiuShang/PddLogisticsCsMessageSend';
import {
  PDD_LOGISTICS_CS_SESSION_CLOSE,
  PDD_LOGISTICS_CS_SESSION_CLOSE_RESPONSE_KEY,
  PddLogisticsCsSessionCloseRequestInterface,
  PddLogisticsCsSessionCloseResponseInterface,
  PddLogisticsCsSessionCloseLogisticsCsSessionCloseResponseResponseInterface,
} from './wuLiuShang/PddLogisticsCsSessionClose';
import {
  PDD_LOGISTICS_CS_SESSION_START,
  PDD_LOGISTICS_CS_SESSION_START_RESPONSE_KEY,
  PddLogisticsCsSessionStartRequestInterface,
  PddLogisticsCsSessionStartResponseInterface,
  PddLogisticsCsSessionStartLogisticsCsSessionStartResponseResponseInterface,
} from './wuLiuShang/PddLogisticsCsSessionStart';
import {
  PDD_LOGISTICS_TICKET_GET,
  PDD_LOGISTICS_TICKET_GET_RESPONSE_KEY,
  PddLogisticsTicketGetRequestInterface,
  PddLogisticsTicketGetResponseInterface,
  PddLogisticsTicketGetLogisticsTicketGetResponseResponseInterface,
} from './wuLiuShang/PddLogisticsTicketGet';
import {
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD,
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD_RESPONSE_KEY,
  PddLogisticsTicketImageUploadRequestInterface,
  PddLogisticsTicketImageUploadResponseInterface,
  PddLogisticsTicketImageUploadLogisticsTicketImageUploadResponseResponseInterface,
} from './wuLiuShang/PddLogisticsTicketImageUpload';
import {
  PDD_LOGISTICS_TICKET_NOTIFY,
  PDD_LOGISTICS_TICKET_NOTIFY_RESPONSE_KEY,
  PddLogisticsTicketNotifyRequestInterface,
  PddLogisticsTicketNotifyResponseInterface,
  PddLogisticsTicketNotifyLogisticsTicketNotifyResponseResponseInterface,
} from './wuLiuShang/PddLogisticsTicketNotify';
import {
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET,
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET_RESPONSE_KEY,
  PddLogisticsTicketProblemTypeGetRequestInterface,
  PddLogisticsTicketProblemTypeGetResponseInterface,
  PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseResponseInterface,
} from './wuLiuShang/PddLogisticsTicketProblemTypeGet';
// 营销API
import {
  PDD_PROMOTION_COUPON_CLOSE,
  PDD_PROMOTION_COUPON_CLOSE_RESPONSE_KEY,
  PddPromotionCouponCloseRequestInterface,
  PddPromotionCouponCloseResponseInterface,
  PddPromotionCouponClosePromotionCouponBatchCloseResponseResponseInterface,
} from './yingXiao/PddPromotionCouponClose';
import {
  PDD_PROMOTION_COUPON_QUANTITY_ADD,
  PDD_PROMOTION_COUPON_QUANTITY_ADD_RESPONSE_KEY,
  PddPromotionCouponQuantityAddRequestInterface,
  PddPromotionCouponQuantityAddResponseInterface,
  PddPromotionCouponQuantityAddCouponQuantityAddResponseResponseInterface,
} from './yingXiao/PddPromotionCouponQuantityAdd';
import {
  PDD_PROMOTION_GOODS_COUPON_CREATE,
  PDD_PROMOTION_GOODS_COUPON_CREATE_RESPONSE_KEY,
  PddPromotionGoodsCouponCreateRequestInterface,
  PddPromotionGoodsCouponCreateResponseInterface,
  PddPromotionGoodsCouponCreateGoodsCouponBatchCreateResponseResponseInterface,
} from './yingXiao/PddPromotionGoodsCouponCreate';
import {
  PDD_PROMOTION_GOODS_COUPON_LIST_GET,
  PDD_PROMOTION_GOODS_COUPON_LIST_GET_RESPONSE_KEY,
  PddPromotionGoodsCouponListGetRequestInterface,
  PddPromotionGoodsCouponListGetResponseInterface,
  PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseResponseInterface,
} from './yingXiao/PddPromotionGoodsCouponListGet';
import {
  PDD_PROMOTION_HOME_COUPON_CREATE,
  PDD_PROMOTION_HOME_COUPON_CREATE_RESPONSE_KEY,
  PddPromotionHomeCouponCreateRequestInterface,
  PddPromotionHomeCouponCreateResponseInterface,
  PddPromotionHomeCouponCreateHomeCouponBatchCreateResponseResponseInterface,
} from './yingXiao/PddPromotionHomeCouponCreate';
import {
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET,
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET_RESPONSE_KEY,
  PddPromotionMerchantCouponListGetRequestInterface,
  PddPromotionMerchantCouponListGetResponseInterface,
  PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseResponseInterface,
} from './yingXiao/PddPromotionMerchantCouponListGet';
// 卡券API
import {
  PDD_VOUCHER_APPOINTMENT_INFO_SEND,
  PDD_VOUCHER_APPOINTMENT_INFO_SEND_RESPONSE_KEY,
  PddVoucherAppointmentInfoSendRequestInterface,
  PddVoucherAppointmentInfoSendResponseInterface,
  PddVoucherAppointmentInfoSendVoucherAppointmentInfoSendResponseResponseInterface,
} from './kaQuan/PddVoucherAppointmentInfoSend';
import {
  PDD_VOUCHER_OTA_CARD_VERIFICATION,
  PDD_VOUCHER_OTA_CARD_VERIFICATION_RESPONSE_KEY,
  PddVoucherOtaCardVerificationRequestInterface,
  PddVoucherOtaCardVerificationResponseInterface,
  PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResponseInterface,
} from './kaQuan/PddVoucherOtaCardVerification';
import {
  PDD_VOUCHER_PHYSICAL_GOODS_SEND,
  PDD_VOUCHER_PHYSICAL_GOODS_SEND_RESPONSE_KEY,
  PddVoucherPhysicalGoodsSendRequestInterface,
  PddVoucherPhysicalGoodsSendResponseInterface,
  PddVoucherPhysicalGoodsSendVoucherPhysicalVoucherSendResponseResponseInterface,
} from './kaQuan/PddVoucherPhysicalGoodsSend';
import {
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION,
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION_RESPONSE_KEY,
  PddVoucherVirtualCardVerificationRequestInterface,
  PddVoucherVirtualCardVerificationResponseInterface,
  PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseResponseInterface,
} from './kaQuan/PddVoucherVirtualCardVerification';
import {
  PDD_VOUCHER_VOUCHER_COMPLAIN,
  PDD_VOUCHER_VOUCHER_COMPLAIN_RESPONSE_KEY,
  PddVoucherVoucherComplainRequestInterface,
  PddVoucherVoucherComplainResponseInterface,
  PddVoucherVoucherComplainVoucherVoucherComplainResponseResponseInterface,
} from './kaQuan/PddVoucherVoucherComplain';
import {
  PDD_VOUCHER_VOUCHER_INFO_SEND,
  PDD_VOUCHER_VOUCHER_INFO_SEND_RESPONSE_KEY,
  PddVoucherVoucherInfoSendRequestInterface,
  PddVoucherVoucherInfoSendResponseInterface,
  PddVoucherVoucherInfoSendVoucherVoucherInfoSendResponseResponseInterface,
} from './kaQuan/PddVoucherVoucherInfoSend';
// 发票API
import {
  PDD_INVOICE_APPLICATION_QUERY,
  PDD_INVOICE_APPLICATION_QUERY_RESPONSE_KEY,
  PddInvoiceApplicationQueryRequestInterface,
  PddInvoiceApplicationQueryResponseInterface,
  PddInvoiceApplicationQueryInvoiceApplicationQueryResponseResponseInterface,
} from './faPiao/PddInvoiceApplicationQuery';
import {
  PDD_INVOICE_APPLICATION_UPDATE,
  PDD_INVOICE_APPLICATION_UPDATE_RESPONSE_KEY,
  PddInvoiceApplicationUpdateRequestInterface,
  PddInvoiceApplicationUpdateResponseInterface,
  PddInvoiceApplicationUpdateInvoiceApplicationUpdateResponseResponseInterface,
} from './faPiao/PddInvoiceApplicationUpdate';
import {
  PDD_INVOICE_DETAIL_INVALID,
  PDD_INVOICE_DETAIL_INVALID_RESPONSE_KEY,
  PddInvoiceDetailInvalidRequestInterface,
  PddInvoiceDetailInvalidResponseInterface,
  PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResponseInterface,
} from './faPiao/PddInvoiceDetailInvalid';
import {
  PDD_INVOICE_DETAIL_QUERY,
  PDD_INVOICE_DETAIL_QUERY_RESPONSE_KEY,
  PddInvoiceDetailQueryRequestInterface,
  PddInvoiceDetailQueryResponseInterface,
  PddInvoiceDetailQueryInvoiceDetailQueryResponseResponseInterface,
} from './faPiao/PddInvoiceDetailQuery';
import {
  PDD_INVOICE_DETAIL_UPLOAD,
  PDD_INVOICE_DETAIL_UPLOAD_RESPONSE_KEY,
  PddInvoiceDetailUploadRequestInterface,
  PddInvoiceDetailUploadResponseInterface,
  PddInvoiceDetailUploadInvoiceDetailUploadResponseResponseInterface,
} from './faPiao/PddInvoiceDetailUpload';
// 店铺API
import {
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY,
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY_RESPONSE_KEY,
  PddMallCpsProtocolStatusQueryRequestInterface,
  PddMallCpsProtocolStatusQueryResponseInterface,
  PddMallCpsProtocolStatusQueryMallCpsProtocolStatusQueryResponseResponseInterface,
} from './dianPu/PddMallCpsProtocolStatusQuery';
import {
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET,
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET_RESPONSE_KEY,
  PddMallInfoBondedWarehouseGetRequestInterface,
  PddMallInfoBondedWarehouseGetResponseInterface,
  PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseResponseInterface,
} from './dianPu/PddMallInfoBondedWarehouseGet';
import {
  PDD_MALL_INFO_GET,
  PDD_MALL_INFO_GET_RESPONSE_KEY,
  PddMallInfoGetRequestInterface,
  PddMallInfoGetResponseInterface,
  PddMallInfoGetMallInfoGetResponseResponseInterface,
} from './dianPu/PddMallInfoGet';
import {
  PDD_MALL_INFO_GROUP_ADD_STORE_POST,
  PDD_MALL_INFO_GROUP_ADD_STORE_POST_RESPONSE_KEY,
  PddMallInfoGroupAddStorePostRequestInterface,
  PddMallInfoGroupAddStorePostResponseInterface,
  PddMallInfoGroupAddStorePostMallInfoGroupAddStorePostResponseResponseInterface,
} from './dianPu/PddMallInfoGroupAddStorePost';
import {
  PDD_MALL_INFO_GROUP_LIST_STORE_GET,
  PDD_MALL_INFO_GROUP_LIST_STORE_GET_RESPONSE_KEY,
  PddMallInfoGroupListStoreGetRequestInterface,
  PddMallInfoGroupListStoreGetResponseInterface,
  PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseResponseInterface,
} from './dianPu/PddMallInfoGroupListStoreGet';
import {
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET,
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET_RESPONSE_KEY,
  PddMallInfoGroupRemoveStoreGetRequestInterface,
  PddMallInfoGroupRemoveStoreGetResponseInterface,
  PddMallInfoGroupRemoveStoreGetMallInfoGroupRemoveStoreGetResponseResponseInterface,
} from './dianPu/PddMallInfoGroupRemoveStoreGet';
import {
  PDD_MALL_INFO_STORE_CREATE_POST,
  PDD_MALL_INFO_STORE_CREATE_POST_RESPONSE_KEY,
  PddMallInfoStoreCreatePostRequestInterface,
  PddMallInfoStoreCreatePostResponseInterface,
  PddMallInfoStoreCreatePostMallInfoStoreCreatePostResponseResponseInterface,
} from './dianPu/PddMallInfoStoreCreatePost';
import {
  PDD_MALL_INFO_STORE_CREATE_POST_NOPOI,
  PddMallInfoStoreCreatePostNopoiRequestInterface,
  PddMallInfoStoreCreatePostNopoiResponseInterface,
} from './dianPu/PddMallInfoStoreCreatePostNopoi';
import {
  PDD_MALL_INFO_STORE_DELETE_POST,
  PDD_MALL_INFO_STORE_DELETE_POST_RESPONSE_KEY,
  PddMallInfoStoreDeletePostRequestInterface,
  PddMallInfoStoreDeletePostResponseInterface,
  PddMallInfoStoreDeletePostMallInfoStoreDeletePostResponseResponseInterface,
} from './dianPu/PddMallInfoStoreDeletePost';
import {
  PDD_MALL_INFO_STORE_GET,
  PddMallInfoStoreGetRequestInterface,
  PddMallInfoStoreGetResponseInterface,
} from './dianPu/PddMallInfoStoreGet';
import {
  PDD_MALL_INFO_STORE_UPDATE_POST,
  PDD_MALL_INFO_STORE_UPDATE_POST_RESPONSE_KEY,
  PddMallInfoStoreUpdatePostRequestInterface,
  PddMallInfoStoreUpdatePostResponseInterface,
  PddMallInfoStoreUpdatePostMallInfoStoreUpdatePostResponseResponseInterface,
} from './dianPu/PddMallInfoStoreUpdatePost';
import {
  PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI,
  PddMallInfoStoreUpdatePostNopoiRequestInterface,
  PddMallInfoStoreUpdatePostNopoiResponseInterface,
} from './dianPu/PddMallInfoStoreUpdatePostNopoi';
import {
  PDD_QRPAY_PAYEE_REGISTER,
  PDD_QRPAY_PAYEE_REGISTER_RESPONSE_KEY,
  PddQrpayPayeeRegisterRequestInterface,
  PddQrpayPayeeRegisterResponseInterface,
  PddQrpayPayeeRegisterQrpayPayeeRegisterResponseResponseInterface,
} from './dianPu/PddQrpayPayeeRegister';
// 营销短信API
import {
  PDD_SMS_ADD_CROWD,
  PDD_SMS_ADD_CROWD_RESPONSE_KEY,
  PddSmsAddCrowdRequestInterface,
  PddSmsAddCrowdResponseInterface,
  PddSmsAddCrowdSmsAddCrowdResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsAddCrowd';
import {
  PDD_SMS_CREATE_CUSTOM_TEMPLATE,
  PDD_SMS_CREATE_CUSTOM_TEMPLATE_RESPONSE_KEY,
  PddSmsCreateCustomTemplateRequestInterface,
  PddSmsCreateCustomTemplateResponseInterface,
  PddSmsCreateCustomTemplateSmsCreateCustomTemplateResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsCreateCustomTemplate';
import {
  PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY,
  PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY_RESPONSE_KEY,
  PddSmsCrowdsPeopleNumberQueryRequestInterface,
  PddSmsCrowdsPeopleNumberQueryResponseInterface,
  PddSmsCrowdsPeopleNumberQuerySmsCrowsPeopleNumberQueryResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsCrowdsPeopleNumberQuery';
import {
  PDD_SMS_CROWDS_QUERY,
  PDD_SMS_CROWDS_QUERY_RESPONSE_KEY,
  PddSmsCrowdsQueryRequestInterface,
  PddSmsCrowdsQueryResponseInterface,
  PddSmsCrowdsQuerySmsCrowsQueryResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsCrowdsQuery';
import {
  PDD_SMS_CUSTOM_SETTING,
  PDD_SMS_CUSTOM_SETTING_RESPONSE_KEY,
  PddSmsCustomSettingRequestInterface,
  PddSmsCustomSettingResponseInterface,
  PddSmsCustomSettingSmsCustomSettingResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsCustomSetting';
import {
  PDD_SMS_CUSTOM_TEMPLATE_QUERY,
  PDD_SMS_CUSTOM_TEMPLATE_QUERY_RESPONSE_KEY,
  PddSmsCustomTemplateQueryRequestInterface,
  PddSmsCustomTemplateQueryResponseInterface,
  PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsCustomTemplateQuery';
import {
  PDD_SMS_REMAIN_DETAIL_QUERY,
  PDD_SMS_REMAIN_DETAIL_QUERY_RESPONSE_KEY,
  PddSmsRemainDetailQueryRequestInterface,
  PddSmsRemainDetailQueryResponseInterface,
  PddSmsRemainDetailQuerySmsRemainDetailQueryResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsRemainDetailQuery';
import {
  PDD_SMS_REMAIN_SETTING,
  PDD_SMS_REMAIN_SETTING_RESPONSE_KEY,
  PddSmsRemainSettingRequestInterface,
  PddSmsRemainSettingResponseInterface,
  PddSmsRemainSettingSmsRemainSettingResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsRemainSetting';
import {
  PDD_SMS_REMAIN_SETTING_DETAIL_QUERY,
  PDD_SMS_REMAIN_SETTING_DETAIL_QUERY_RESPONSE_KEY,
  PddSmsRemainSettingDetailQueryRequestInterface,
  PddSmsRemainSettingDetailQueryResponseInterface,
  PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsRemainSettingDetailQuery';
import {
  PDD_SMS_SELL_DELETING,
  PDD_SMS_SELL_DELETING_RESPONSE_KEY,
  PddSmsSellDeletingRequestInterface,
  PddSmsSellDeletingResponseInterface,
  PddSmsSellDeletingSmsSellDeletingResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsSellDeleting';
import {
  PDD_SMS_SELL_RECORD_LIST_QUERY,
  PDD_SMS_SELL_RECORD_LIST_QUERY_RESPONSE_KEY,
  PddSmsSellRecordListQueryRequestInterface,
  PddSmsSellRecordListQueryResponseInterface,
  PddSmsSellRecordListQuerySmsSellRecordListQueryResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsSellRecordListQuery';
import {
  PDD_SMS_SELL_SETTING,
  PDD_SMS_SELL_SETTING_RESPONSE_KEY,
  PddSmsSellSettingRequestInterface,
  PddSmsSellSettingResponseInterface,
  PddSmsSellSettingSmsSellSettingResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsSellSetting';
import {
  PDD_SMS_SELL_SETTING_DETAIL_QUERY,
  PDD_SMS_SELL_SETTING_DETAIL_QUERY_RESPONSE_KEY,
  PddSmsSellSettingDetailQueryRequestInterface,
  PddSmsSellSettingDetailQueryResponseInterface,
  PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsSellSettingDetailQuery';
import {
  PDD_SMS_SELL_SETTING_RECORD_CANCEL,
  PDD_SMS_SELL_SETTING_RECORD_CANCEL_RESPONSE_KEY,
  PddSmsSellSettingRecordCancelRequestInterface,
  PddSmsSellSettingRecordCancelResponseInterface,
  PddSmsSellSettingRecordCancelSmsSellSettingRecordCancelResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsSellSettingRecordCancel';
import {
  PDD_SMS_SEND_RECORD_LIST_QUERY,
  PDD_SMS_SEND_RECORD_LIST_QUERY_RESPONSE_KEY,
  PddSmsSendRecordListQueryRequestInterface,
  PddSmsSendRecordListQueryResponseInterface,
  PddSmsSendRecordListQuerySmsSendRecordListQueryResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsSendRecordListQuery';
import {
  PDD_SMS_SHORT_STATISTIC_QUERY,
  PDD_SMS_SHORT_STATISTIC_QUERY_RESPONSE_KEY,
  PddSmsShortStatisticQueryRequestInterface,
  PddSmsShortStatisticQueryResponseInterface,
  PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsShortStatisticQuery';
import {
  PDD_SMS_TEMPLATE_QUERY,
  PDD_SMS_TEMPLATE_QUERY_RESPONSE_KEY,
  PddSmsTemplateQueryRequestInterface,
  PddSmsTemplateQueryResponseInterface,
  PddSmsTemplateQuerySmsTemplateQueryResponseResponseInterface,
} from './yingXiaoDuanXin/PddSmsTemplateQuery';
// 工具API
import {
  PDD_TIME_GET,
  PDD_TIME_GET_RESPONSE_KEY,
  PddTimeGetRequestInterface,
  PddTimeGetResponseInterface,
  PddTimeGetTimeGetResponseResponseInterface,
} from './gongJu/PddTimeGet';
import {
  PDD_UTIL_DIVIDE_BASE64_IMAGE,
  PddUtilDivideBase64ImageRequestInterface,
  PddUtilDivideBase64ImageResponseInterface,
} from './gongJu/PddUtilDivideBase64Image';
// 仓储API
import {
  PDD_EXPRESS_ADD_DEPOT,
  PddExpressAddDepotRequestInterface,
  PddExpressAddDepotResponseInterface,
} from './cangChu/PddExpressAddDepot';
import {
  PDD_EXPRESS_CHANGE_DEPOT_INFO,
  PddExpressChangeDepotInfoRequestInterface,
  PddExpressChangeDepotInfoResponseInterface,
} from './cangChu/PddExpressChangeDepotInfo';
import {
  PDD_EXPRESS_DEPOT_INFO_GET,
  PddExpressDepotInfoGetRequestInterface,
  PddExpressDepotInfoGetResponseInterface,
} from './cangChu/PddExpressDepotInfoGet';
import {
  PDD_EXPRESS_DEPOT_LIST_GET,
  PDD_EXPRESS_DEPOT_LIST_GET_RESPONSE_KEY,
  PddExpressDepotListGetRequestInterface,
  PddExpressDepotListGetResponseInterface,
  PddExpressDepotListGetOpenApiResponseResponseInterface,
} from './cangChu/PddExpressDepotListGet';
import {
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET,
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET_RESPONSE_KEY,
  PddExpressMallDepotSimpleGetRequestInterface,
  PddExpressMallDepotSimpleGetResponseInterface,
  PddExpressMallDepotSimpleGetOpenApiResponseResponseInterface,
} from './cangChu/PddExpressMallDepotSimpleGet';
import {
  PDD_EXPRESS_SEARCH_DEPOT,
  PDD_EXPRESS_SEARCH_DEPOT_RESPONSE_KEY,
  PddExpressSearchDepotRequestInterface,
  PddExpressSearchDepotResponseInterface,
  PddExpressSearchDepotOpenApiResponseResponseInterface,
} from './cangChu/PddExpressSearchDepot';
import {
  PDD_STOCK_DEPOT_PRIORITY_LIST,
  PDD_STOCK_DEPOT_PRIORITY_LIST_RESPONSE_KEY,
  PddStockDepotPriorityListRequestInterface,
  PddStockDepotPriorityListResponseInterface,
  PddStockDepotPriorityListOpenApiResponseResponseInterface,
} from './cangChu/PddStockDepotPriorityList';
import {
  PDD_STOCK_DEPOT_PRIORITY_UPDATE,
  PddStockDepotPriorityUpdateRequestInterface,
  PddStockDepotPriorityUpdateResponseInterface,
} from './cangChu/PddStockDepotPriorityUpdate';
import {
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY,
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY_RESPONSE_KEY,
  PddStockGoodsIdToSkuQueryRequestInterface,
  PddStockGoodsIdToSkuQueryResponseInterface,
  PddStockGoodsIdToSkuQueryOpenApiResponseResponseInterface,
} from './cangChu/PddStockGoodsIdToSkuQuery';
import {
  PDD_STOCK_WARE_CREATE,
  PddStockWareCreateRequestInterface,
  PddStockWareCreateResponseInterface,
} from './cangChu/PddStockWareCreate';
import {
  PDD_STOCK_WARE_DELETE,
  PddStockWareDeleteRequestInterface,
  PddStockWareDeleteResponseInterface,
} from './cangChu/PddStockWareDelete';
import {
  PDD_STOCK_WARE_DETAIL_QUERY,
  PDD_STOCK_WARE_DETAIL_QUERY_RESPONSE_KEY,
  PddStockWareDetailQueryRequestInterface,
  PddStockWareDetailQueryResponseInterface,
  PddStockWareDetailQueryOpenApiResponseResponseInterface,
} from './cangChu/PddStockWareDetailQuery';
import {
  PDD_STOCK_WARE_INFO_LIST,
  PDD_STOCK_WARE_INFO_LIST_RESPONSE_KEY,
  PddStockWareInfoListRequestInterface,
  PddStockWareInfoListResponseInterface,
  PddStockWareInfoListStockWareInfoListResponseResponseInterface,
} from './cangChu/PddStockWareInfoList';
import {
  PDD_STOCK_WARE_LIST,
  PDD_STOCK_WARE_LIST_RESPONSE_KEY,
  PddStockWareListRequestInterface,
  PddStockWareListResponseInterface,
  PddStockWareListOpenApiResponseResponseInterface,
} from './cangChu/PddStockWareList';
import {
  PDD_STOCK_WARE_MOVE,
  PddStockWareMoveRequestInterface,
  PddStockWareMoveResponseInterface,
} from './cangChu/PddStockWareMove';
import {
  PDD_STOCK_WARE_SKU_UPDATE,
  PddStockWareSkuUpdateRequestInterface,
  PddStockWareSkuUpdateResponseInterface,
} from './cangChu/PddStockWareSkuUpdate';
import {
  PDD_STOCK_WARE_UPDATE,
  PddStockWareUpdateRequestInterface,
  PddStockWareUpdateResponseInterface,
} from './cangChu/PddStockWareUpdate';
// 消息服务API
import {
  PDD_PMC_USER_CANCEL,
  PDD_PMC_USER_CANCEL_RESPONSE_KEY,
  PddPmcUserCancelRequestInterface,
  PddPmcUserCancelResponseInterface,
  PddPmcUserCancelPmcUserCancelResponseResponseInterface,
} from './xiaoXiFuWu/PddPmcUserCancel';
import {
  PDD_PMC_USER_GET,
  PDD_PMC_USER_GET_RESPONSE_KEY,
  PddPmcUserGetRequestInterface,
  PddPmcUserGetResponseInterface,
  PddPmcUserGetPmcUserGetResponseResponseInterface,
} from './xiaoXiFuWu/PddPmcUserGet';
import {
  PDD_PMC_USER_PERMIT,
  PDD_PMC_USER_PERMIT_RESPONSE_KEY,
  PddPmcUserPermitRequestInterface,
  PddPmcUserPermitResponseInterface,
  PddPmcUserPermitPmcUserPermitResponseResponseInterface,
} from './xiaoXiFuWu/PddPmcUserPermit';
// 财务API
import {
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET,
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET_RESPONSE_KEY,
  PddFinanceBalanceDailyBillUrlGetRequestInterface,
  PddFinanceBalanceDailyBillUrlGetResponseInterface,
  PddFinanceBalanceDailyBillUrlGetFinanceBalanceDailyBillUrlGetResponseResponseInterface,
} from './caiWu/PddFinanceBalanceDailyBillUrlGet';
// 电子面单API
import {
  PDD_CLOUDPRINT_CMDPRINT_RENDER,
  PDD_CLOUDPRINT_CMDPRINT_RENDER_RESPONSE_KEY,
  PddCloudprintCmdprintRenderRequestInterface,
  PddCloudprintCmdprintRenderResponseInterface,
  PddCloudprintCmdprintRenderCloudprintCmdprintRenderResponseResponseInterface,
} from './dianZiMianDan/PddCloudprintCmdprintRender';
import {
  PDD_CLOUDPRINT_CUSTOMARES_GET,
  PDD_CLOUDPRINT_CUSTOMARES_GET_RESPONSE_KEY,
  PddCloudprintCustomaresGetRequestInterface,
  PddCloudprintCustomaresGetResponseInterface,
  PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResponseInterface,
} from './dianZiMianDan/PddCloudprintCustomaresGet';
import {
  PDD_CLOUDPRINT_STDTEMPLATES_GET,
  PDD_CLOUDPRINT_STDTEMPLATES_GET_RESPONSE_KEY,
  PddCloudprintStdtemplatesGetRequestInterface,
  PddCloudprintStdtemplatesGetResponseInterface,
  PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResponseInterface,
} from './dianZiMianDan/PddCloudprintStdtemplatesGet';
import {
  PDD_WAYBILL_CANCEL,
  PDD_WAYBILL_CANCEL_RESPONSE_KEY,
  PddWaybillCancelRequestInterface,
  PddWaybillCancelResponseInterface,
  PddWaybillCancelPddWaybillCancelResponseResponseInterface,
} from './dianZiMianDan/PddWaybillCancel';
import {
  PDD_WAYBILL_GET,
  PDD_WAYBILL_GET_RESPONSE_KEY,
  PddWaybillGetRequestInterface,
  PddWaybillGetResponseInterface,
  PddWaybillGetPddWaybillGetResponseResponseInterface,
} from './dianZiMianDan/PddWaybillGet';
import {
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE,
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE_RESPONSE_KEY,
  PddWaybillQueryByWaybillcodeRequestInterface,
  PddWaybillQueryByWaybillcodeResponseInterface,
  PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseResponseInterface,
} from './dianZiMianDan/PddWaybillQueryByWaybillcode';
import {
  PDD_WAYBILL_SEARCH,
  PDD_WAYBILL_SEARCH_RESPONSE_KEY,
  PddWaybillSearchRequestInterface,
  PddWaybillSearchResponseInterface,
  PddWaybillSearchPddWaybillSearchResponseResponseInterface,
} from './dianZiMianDan/PddWaybillSearch';
import {
  PDD_WAYBILL_UPDATE,
  PDD_WAYBILL_UPDATE_RESPONSE_KEY,
  PddWaybillUpdateRequestInterface,
  PddWaybillUpdateResponseInterface,
  PddWaybillUpdatePddWaybillUpdateResponseResponseInterface,
} from './dianZiMianDan/PddWaybillUpdate';
// 开平短信服务API
import {
  PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD,
  PddOpenMsgServiceQueryExpressMsgRecordRequestInterface,
  PddOpenMsgServiceQueryExpressMsgRecordResponseInterface,
} from './kaiPingDuanXinFuWu/PddOpenMsgServiceQueryExpressMsgRecord';
import {
  PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD,
  PddOpenMsgServiceQueryMsgRecordRequestInterface,
  PddOpenMsgServiceQueryMsgRecordResponseInterface,
} from './kaiPingDuanXinFuWu/PddOpenMsgServiceQueryMsgRecord';
import {
  PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG,
  PddOpenMsgServiceSendBatchMsgRequestInterface,
  PddOpenMsgServiceSendBatchMsgResponseInterface,
} from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendBatchMsg';
import {
  PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG,
  PddOpenMsgServiceSendExpressMsgRequestInterface,
  PddOpenMsgServiceSendExpressMsgResponseInterface,
} from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendExpressMsg';
import {
  PDD_OPEN_MSG_SERVICE_SEND_MSG,
  PddOpenMsgServiceSendMsgRequestInterface,
  PddOpenMsgServiceSendMsgResponseInterface,
} from './kaiPingDuanXinFuWu/PddOpenMsgServiceSendMsg';
// 服务市场API
import {
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET,
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET_RESPONSE_KEY,
  PddServicemarketSettlementbillGetRequestInterface,
  PddServicemarketSettlementbillGetResponseInterface,
  PddServicemarketSettlementbillGetSettlementBillSearchResponseResponseInterface,
} from './fuWuShiChang/PddServicemarketSettlementbillGet';
import {
  PDD_SERVICEMARKET_TRADELIST_GET,
  PDD_SERVICEMARKET_TRADELIST_GET_RESPONSE_KEY,
  PddServicemarketTradelistGetRequestInterface,
  PddServicemarketTradelistGetResponseInterface,
  PddServicemarketTradelistGetMallBalanceFlowSearchResponseResponseInterface,
} from './fuWuShiChang/PddServicemarketTradelistGet';
import {
  PDD_VAS_ORDER_SEARCH,
  PDD_VAS_ORDER_SEARCH_RESPONSE_KEY,
  PddVasOrderSearchRequestInterface,
  PddVasOrderSearchResponseInterface,
  PddVasOrderSearchVasOrderSearchResponseResponseInterface,
} from './fuWuShiChang/PddVasOrderSearch';
// 商家工单API
import {
  PDD_MALL_TICKET_DETAIL,
  PDD_MALL_TICKET_DETAIL_RESPONSE_KEY,
  PddMallTicketDetailRequestInterface,
  PddMallTicketDetailResponseInterface,
  PddMallTicketDetailMallTicketDetailResponseResponseInterface,
} from './shangJiaGongDan/PddMallTicketDetail';
import {
  PDD_MALL_TICKET_LIST,
  PDD_MALL_TICKET_LIST_RESPONSE_KEY,
  PddMallTicketListRequestInterface,
  PddMallTicketListResponseInterface,
  PddMallTicketListMallTicketListResponseResponseInterface,
} from './shangJiaGongDan/PddMallTicketList';
import {
  PDD_MALL_TICKET_NOTIFY,
  PddMallTicketNotifyRequestInterface,
  PddMallTicketNotifyResponseInterface,
} from './shangJiaGongDan/PddMallTicketNotify';
// 短信供应商API
import {
  PDD_SMS_DETAILBILL_PUSH,
  PddSmsDetailbillPushRequestInterface,
  PddSmsDetailbillPushResponseInterface,
} from './duanXinGongYingShang/PddSmsDetailbillPush';
import {
  PDD_SMS_VENDOR_COMPLAINT_CREATE,
  PddSmsVendorComplaintCreateRequestInterface,
  PddSmsVendorComplaintCreateResponseInterface,
} from './duanXinGongYingShang/PddSmsVendorComplaintCreate';
const PddResponseTypeAndRequestTypeMapping = {
  [PDD_ORDER_INFORMATION_GET]: PDD_ORDER_INFORMATION_GET_RESPONSE_KEY,
  [PDD_ORDER_LIST_GET]: PDD_ORDER_LIST_GET_RESPONSE_KEY,
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PDD_ORDER_NUMBER_LIST_INCREMENT_GET_RESPONSE_KEY,
  [PDD_ORDER_STATUS_GET]: PDD_ORDER_STATUS_GET_RESPONSE_KEY,
  [PDD_LOGISTICS_ADDRESS_GET]: PDD_LOGISTICS_ADDRESS_GET_RESPONSE_KEY,
  [PDD_LOGISTICS_COMPANIES_GET]: PDD_LOGISTICS_COMPANIES_GET_RESPONSE_KEY,
  [PDD_LOGISTICS_ONLINE_CREATE]: PDD_LOGISTICS_ONLINE_CREATE_RESPONSE_KEY,
  [PDD_LOGISTICS_ONLINE_SEND]: PDD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY,
  [PDD_LOGISTICS_ONLINE_STATUS_QUERY]: PDD_LOGISTICS_ONLINE_STATUS_QUERY_RESPONSE_KEY,
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL_RESPONSE_KEY,
  [PDD_REFUND_ADDRESS_LIST_GET]: PDD_REFUND_ADDRESS_LIST_GET_RESPONSE_KEY,
  [PDD_REFUND_LIST_INCREMENT_GET]: PDD_REFUND_LIST_INCREMENT_GET_RESPONSE_KEY,
  [PDD_REFUND_STATUS_CHECK]: PDD_REFUND_STATUS_CHECK_RESPONSE_KEY,
  [PDD_VIRTUAL_GAME_SERVER_QUERY]: PDD_VIRTUAL_GAME_SERVER_QUERY_RESPONSE_KEY,
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY_RESPONSE_KEY,
  [PDD_AD_BALANCE_GET]: PDD_AD_BALANCE_GET_RESPONSE_KEY,
  [PDD_AD_BID_QUERY_PROFILE]: PDD_AD_BID_QUERY_PROFILE_RESPONSE_KEY,
  [PDD_AD_CAN_CREATE_PLAN]: PDD_AD_CAN_CREATE_PLAN_RESPONSE_KEY,
  [PDD_AD_CHART_BYKEYWORD_GET]: PDD_AD_CHART_BYKEYWORD_GET_RESPONSE_KEY,
  [PDD_AD_CREATE_LOCATION_BID]: PDD_AD_CREATE_LOCATION_BID_RESPONSE_KEY,
  [PDD_AD_CREATE_UNIT_BID]: PDD_AD_CREATE_UNIT_BID_RESPONSE_KEY,
  [PDD_AD_CREATIVE_CREATE]: PDD_AD_CREATIVE_CREATE_RESPONSE_KEY,
  [PDD_AD_CREATIVE_HISTORY_REPORT_GET]: PDD_AD_CREATIVE_HISTORY_REPORT_GET_RESPONSE_KEY,
  [PDD_AD_CREATIVE_QUERY]: PDD_AD_CREATIVE_QUERY_RESPONSE_KEY,
  [PDD_AD_CREATIVE_REPORT_GET]: PDD_AD_CREATIVE_REPORT_GET_RESPONSE_KEY,
  [PDD_AD_DELETE_BID]: PDD_AD_DELETE_BID_RESPONSE_KEY,
  [PDD_AD_DELETE_LOCATION_BID]: PDD_AD_DELETE_LOCATION_BID_RESPONSE_KEY,
  [PDD_AD_HISTORY_KEYWORD_REPORT_GET]: PDD_AD_HISTORY_KEYWORD_REPORT_GET_RESPONSE_KEY,
  [PDD_AD_HISTORY_PLAN_REPORT_GET]: PDD_AD_HISTORY_PLAN_REPORT_GET_RESPONSE_KEY,
  [PDD_AD_HISTORY_REPORT_GET]: PDD_AD_HISTORY_REPORT_GET_RESPONSE_KEY,
  [PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET]: PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET_RESPONSE_KEY,
  [PDD_AD_HISTORY_RT_PLAN_REPORT_GET]: PDD_AD_HISTORY_RT_PLAN_REPORT_GET_RESPONSE_KEY,
  [PDD_AD_HISTORY_RT_REPORT_GET]: PDD_AD_HISTORY_RT_REPORT_GET_RESPONSE_KEY,
  [PDD_AD_HISTORY_RT_UNIT_REPORT_GET]: PDD_AD_HISTORY_RT_UNIT_REPORT_GET_RESPONSE_KEY,
  [PDD_AD_HISTORY_UNIT_REPORT_GET]: PDD_AD_HISTORY_UNIT_REPORT_GET_RESPONSE_KEY,
  [PDD_AD_KEYWORD_CREATE]: PDD_AD_KEYWORD_CREATE_RESPONSE_KEY,
  [PDD_AD_KEYWORD_DELETE]: PDD_AD_KEYWORD_DELETE_RESPONSE_KEY,
  [PDD_AD_KEYWORD_RCOMMENDED_GET]: PDD_AD_KEYWORD_RCOMMENDED_GET_RESPONSE_KEY,
  [PDD_AD_KEYWORD_RELEVANCE_GET]: PDD_AD_KEYWORD_RELEVANCE_GET_RESPONSE_KEY,
  [PDD_AD_KEYWORD_UPDATE]: PDD_AD_KEYWORD_UPDATE_RESPONSE_KEY,
  [PDD_AD_PLAN_CREATE]: PDD_AD_PLAN_CREATE_RESPONSE_KEY,
  [PDD_AD_PLAN_DELETE]: PDD_AD_PLAN_DELETE_RESPONSE_KEY,
  [PDD_AD_PLAN_INFO_LIST_GET]: PDD_AD_PLAN_INFO_LIST_GET_RESPONSE_KEY,
  [PDD_AD_PLAN_MAX_COST_UPDATE]: PDD_AD_PLAN_MAX_COST_UPDATE_RESPONSE_KEY,
  [PDD_AD_PLAN_NAME_UPDATE]: PDD_AD_PLAN_NAME_UPDATE_RESPONSE_KEY,
  [PDD_AD_PLAN_OPT_STATUS_UPDATE]: PDD_AD_PLAN_OPT_STATUS_UPDATE_RESPONSE_KEY,
  [PDD_AD_QUERY_BID_LIST]: PDD_AD_QUERY_BID_LIST_RESPONSE_KEY,
  [PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT]: PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT_RESPONSE_KEY,
  [PDD_AD_QUERY_LOCATION_BID_LIST]: PDD_AD_QUERY_LOCATION_BID_LIST_RESPONSE_KEY,
  [PDD_AD_QUERY_LOCATION_BID_PV_LIST]: PDD_AD_QUERY_LOCATION_BID_PV_LIST_RESPONSE_KEY,
  [PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT]: PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT_RESPONSE_KEY,
  [PDD_AD_UNIT_CREATE]: PDD_AD_UNIT_CREATE_RESPONSE_KEY,
  [PDD_AD_UNIT_DELETE]: PDD_AD_UNIT_DELETE_RESPONSE_KEY,
  [PDD_AD_UNIT_GET_BY_PLAN_ID]: PDD_AD_UNIT_GET_BY_PLAN_ID_RESPONSE_KEY,
  [PDD_AD_UNIT_OPT_STATUS_UPDATE]: PDD_AD_UNIT_OPT_STATUS_UPDATE_RESPONSE_KEY,
  [PDD_AD_UPDATE_BID]: PDD_AD_UPDATE_BID_RESPONSE_KEY,
  [PDD_AD_UPDATE_LOCATION_BID]: PDD_AD_UPDATE_LOCATION_BID_RESPONSE_KEY,
  [PDD_GOODS_ADD]: PDD_GOODS_ADD_RESPONSE_KEY,
  [PDD_GOODS_AUTHORIZATION_CATS]: PDD_GOODS_AUTHORIZATION_CATS_RESPONSE_KEY,
  [PDD_GOODS_CAT_TEMPLATE_GET]: PDD_GOODS_CAT_TEMPLATE_GET_RESPONSE_KEY,
  [PDD_GOODS_CATS_GET]: PDD_GOODS_CATS_GET_RESPONSE_KEY,
  [PDD_GOODS_COMMIT_DETAIL_GET]: PDD_GOODS_COMMIT_DETAIL_GET_RESPONSE_KEY,
  [PDD_GOODS_COMMIT_LIST_GET]: PDD_GOODS_COMMIT_LIST_GET_RESPONSE_KEY,
  [PDD_GOODS_COMMIT_STATUS_GET]: PDD_GOODS_COMMIT_STATUS_GET_RESPONSE_KEY,
  [PDD_GOODS_COUNTRY_GET]: PDD_GOODS_COUNTRY_GET_RESPONSE_KEY,
  [PDD_GOODS_CPS_MALL_UNIT_CHANGE]: PDD_GOODS_CPS_MALL_UNIT_CHANGE_RESPONSE_KEY,
  [PDD_GOODS_CPS_MALL_UNIT_PAUSE]: PDD_GOODS_CPS_MALL_UNIT_PAUSE_RESPONSE_KEY,
  [PDD_GOODS_CPS_MALL_UNIT_QUERY]: PDD_GOODS_CPS_MALL_UNIT_QUERY_RESPONSE_KEY,
  [PDD_GOODS_CPS_MALL_UNIT_RESUME]: PDD_GOODS_CPS_MALL_UNIT_RESUME_RESPONSE_KEY,
  [PDD_GOODS_CPS_UNIT_DELETE]: PDD_GOODS_CPS_UNIT_DELETE_RESPONSE_KEY,
  [PDD_GOODS_DETAIL_GET]: PDD_GOODS_DETAIL_GET_RESPONSE_KEY,
  [PDD_GOODS_EDIT_GOODS_COMMIT]: PDD_GOODS_EDIT_GOODS_COMMIT_RESPONSE_KEY,
  [PDD_GOODS_GET_RELATION]: PDD_GOODS_GET_RELATION_RESPONSE_KEY,
  [PDD_GOODS_IMAGE_UPLOAD]: PDD_GOODS_IMAGE_UPLOAD_RESPONSE_KEY,
  [PDD_GOODS_INFORMATION_GET]: PDD_GOODS_INFORMATION_GET_RESPONSE_KEY,
  [PDD_GOODS_INFORMATION_UPDATE]: PDD_GOODS_INFORMATION_UPDATE_RESPONSE_KEY,
  [PDD_GOODS_LATEST_COMMIT_STATUS_GET]: PDD_GOODS_LATEST_COMMIT_STATUS_GET_RESPONSE_KEY,
  [PDD_GOODS_LIST_GET]: PDD_GOODS_LIST_GET_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE]: PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE]: PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL]: PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST]: PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE]: PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_TEMPLATE_CREATE]: PDD_GOODS_LOGISTICS_TEMPLATE_CREATE_RESPONSE_KEY,
  [PDD_GOODS_LOGISTICS_TEMPLATE_GET]: PDD_GOODS_LOGISTICS_TEMPLATE_GET_RESPONSE_KEY,
  [PDD_GOODS_OPT_GET]: PDD_GOODS_OPT_GET_RESPONSE_KEY,
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PDD_GOODS_OUTER_CAT_MAPPING_GET_RESPONSE_KEY,
  [PDD_GOODS_QUANTITY_UPDATE]: PDD_GOODS_QUANTITY_UPDATE_RESPONSE_KEY,
  [PDD_GOODS_RELATION_SET]: PDD_GOODS_RELATION_SET_RESPONSE_KEY,
  [PDD_GOODS_SALE_STATUS_SET]: PDD_GOODS_SALE_STATUS_SET_RESPONSE_KEY,
  [PDD_GOODS_SKU_PRICE_UPDATE]: PDD_GOODS_SKU_PRICE_UPDATE_RESPONSE_KEY,
  [PDD_GOODS_SPEC_GET]: PDD_GOODS_SPEC_GET_RESPONSE_KEY,
  [PDD_GOODS_SPEC_ID_GET]: PDD_GOODS_SPEC_ID_GET_RESPONSE_KEY,
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PDD_GOODS_SUBMIT_GOODS_COMMIT_RESPONSE_KEY,
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH_RESPONSE_KEY,
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: PDD_GOOODS_SKU_MEASUREMENT_LIST_RESPONSE_KEY,
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: PDD_ONE_EXPRESS_COST_TEMPLATE_RESPONSE_KEY,
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PDD_DDK_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_COUPON_INFO_QUERY]: PDD_DDK_COUPON_INFO_QUERY_RESPONSE_KEY,
  [PDD_DDK_FINANCE_CPA_QUERY]: PDD_DDK_FINANCE_CPA_QUERY_RESPONSE_KEY,
  [PDD_DDK_GOODS_BASIC_INFO_GET]: PDD_DDK_GOODS_BASIC_INFO_GET_RESPONSE_KEY,
  [PDD_DDK_GOODS_DETAIL]: PDD_DDK_GOODS_DETAIL_RESPONSE_KEY,
  [PDD_DDK_GOODS_PID_GENERATE]: PDD_DDK_GOODS_PID_GENERATE_RESPONSE_KEY,
  [PDD_DDK_GOODS_PID_QUERY]: PDD_DDK_GOODS_PID_QUERY_RESPONSE_KEY,
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PDD_DDK_GOODS_PROMOTION_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_GOODS_RECOMMEND_GET]: PDD_DDK_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  [PDD_DDK_GOODS_SEARCH]: PDD_DDK_GOODS_SEARCH_RESPONSE_KEY,
  [PDD_DDK_GOODS_UNIT_QUERY]: PDD_DDK_GOODS_UNIT_QUERY_RESPONSE_KEY,
  [PDD_DDK_GOODS_ZS_UNIT_URL_GEN]: PDD_DDK_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_LOTTERY_URL_GEN]: PDD_DDK_LOTTERY_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_MALL_GOODS_LIST_GET]: PDD_DDK_MALL_GOODS_LIST_GET_RESPONSE_KEY,
  [PDD_DDK_MALL_URL_GEN]: PDD_DDK_MALL_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_MERCHANT_LIST_GET]: PDD_DDK_MERCHANT_LIST_GET_RESPONSE_KEY,
  [PDD_DDK_ORDER_DETAIL_GET]: PDD_DDK_ORDER_DETAIL_GET_RESPONSE_KEY,
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PDD_DDK_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  [PDD_DDK_ORDER_LIST_RANGE_GET]: PDD_DDK_ORDER_LIST_RANGE_GET_RESPONSE_KEY,
  [PDD_DDK_RESOURCE_URL_GEN]: PDD_DDK_RESOURCE_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_RP_PROM_URL_GENERATE]: PDD_DDK_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_THEME_GOODS_SEARCH]: PDD_DDK_THEME_GOODS_SEARCH_RESPONSE_KEY,
  [PDD_DDK_THEME_LIST_GET]: PDD_DDK_THEME_LIST_GET_RESPONSE_KEY,
  [PDD_DDK_THEME_PROM_URL_GENERATE]: PDD_DDK_THEME_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_TOP_GOODS_LIST_QUERY]: PDD_DDK_TOP_GOODS_LIST_QUERY_RESPONSE_KEY,
  [PDD_DDK_WEAPP_QRCODE_URL_GEN]: PDD_DDK_WEAPP_QRCODE_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET]: PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  [PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE]: PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_PID_GENERATE]: PDD_DDK_OAUTH_GOODS_PID_GENERATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_PID_QUERY]: PDD_DDK_OAUTH_GOODS_PID_QUERY_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_RECOMMEND_GET]: PDD_DDK_OAUTH_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  [PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN]: PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_OAUTH_LOTTERY_URL_GEN]: PDD_DDK_OAUTH_LOTTERY_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_OAUTH_MALL_URL_GEN]: PDD_DDK_OAUTH_MALL_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PDD_DDK_OAUTH_ORDER_DETAIL_GET_RESPONSE_KEY,
  [PDD_DDK_OAUTH_RESOURCE_URL_GEN]: PDD_DDK_OAUTH_RESOURCE_URL_GEN_RESPONSE_KEY,
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: PDD_DDK_OAUTH_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE]: PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE_RESPONSE_KEY,
  [PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY]: PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY_RESPONSE_KEY,
  [PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET]: PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET_RESPONSE_KEY,
  [PDD_LOGISTICS_CS_MESSAGE_SEND]: PDD_LOGISTICS_CS_MESSAGE_SEND_RESPONSE_KEY,
  [PDD_LOGISTICS_CS_SESSION_CLOSE]: PDD_LOGISTICS_CS_SESSION_CLOSE_RESPONSE_KEY,
  [PDD_LOGISTICS_CS_SESSION_START]: PDD_LOGISTICS_CS_SESSION_START_RESPONSE_KEY,
  [PDD_LOGISTICS_TICKET_GET]: PDD_LOGISTICS_TICKET_GET_RESPONSE_KEY,
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PDD_LOGISTICS_TICKET_IMAGE_UPLOAD_RESPONSE_KEY,
  [PDD_LOGISTICS_TICKET_NOTIFY]: PDD_LOGISTICS_TICKET_NOTIFY_RESPONSE_KEY,
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET_RESPONSE_KEY,
  [PDD_PROMOTION_COUPON_CLOSE]: PDD_PROMOTION_COUPON_CLOSE_RESPONSE_KEY,
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PDD_PROMOTION_COUPON_QUANTITY_ADD_RESPONSE_KEY,
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PDD_PROMOTION_GOODS_COUPON_CREATE_RESPONSE_KEY,
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PDD_PROMOTION_GOODS_COUPON_LIST_GET_RESPONSE_KEY,
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PDD_PROMOTION_HOME_COUPON_CREATE_RESPONSE_KEY,
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PDD_PROMOTION_MERCHANT_COUPON_LIST_GET_RESPONSE_KEY,
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PDD_VOUCHER_APPOINTMENT_INFO_SEND_RESPONSE_KEY,
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PDD_VOUCHER_OTA_CARD_VERIFICATION_RESPONSE_KEY,
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PDD_VOUCHER_PHYSICAL_GOODS_SEND_RESPONSE_KEY,
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION_RESPONSE_KEY,
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PDD_VOUCHER_VOUCHER_COMPLAIN_RESPONSE_KEY,
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PDD_VOUCHER_VOUCHER_INFO_SEND_RESPONSE_KEY,
  [PDD_INVOICE_APPLICATION_QUERY]: PDD_INVOICE_APPLICATION_QUERY_RESPONSE_KEY,
  [PDD_INVOICE_APPLICATION_UPDATE]: PDD_INVOICE_APPLICATION_UPDATE_RESPONSE_KEY,
  [PDD_INVOICE_DETAIL_INVALID]: PDD_INVOICE_DETAIL_INVALID_RESPONSE_KEY,
  [PDD_INVOICE_DETAIL_QUERY]: PDD_INVOICE_DETAIL_QUERY_RESPONSE_KEY,
  [PDD_INVOICE_DETAIL_UPLOAD]: PDD_INVOICE_DETAIL_UPLOAD_RESPONSE_KEY,
  [PDD_MALL_CPS_PROTOCOL_STATUS_QUERY]: PDD_MALL_CPS_PROTOCOL_STATUS_QUERY_RESPONSE_KEY,
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PDD_MALL_INFO_BONDED_WAREHOUSE_GET_RESPONSE_KEY,
  [PDD_MALL_INFO_GET]: PDD_MALL_INFO_GET_RESPONSE_KEY,
  [PDD_MALL_INFO_GROUP_ADD_STORE_POST]: PDD_MALL_INFO_GROUP_ADD_STORE_POST_RESPONSE_KEY,
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: PDD_MALL_INFO_GROUP_LIST_STORE_GET_RESPONSE_KEY,
  [PDD_MALL_INFO_GROUP_REMOVE_STORE_GET]: PDD_MALL_INFO_GROUP_REMOVE_STORE_GET_RESPONSE_KEY,
  [PDD_MALL_INFO_STORE_CREATE_POST]: PDD_MALL_INFO_STORE_CREATE_POST_RESPONSE_KEY,
  [PDD_MALL_INFO_STORE_DELETE_POST]: PDD_MALL_INFO_STORE_DELETE_POST_RESPONSE_KEY,
  [PDD_MALL_INFO_STORE_UPDATE_POST]: PDD_MALL_INFO_STORE_UPDATE_POST_RESPONSE_KEY,
  [PDD_QRPAY_PAYEE_REGISTER]: PDD_QRPAY_PAYEE_REGISTER_RESPONSE_KEY,
  [PDD_SMS_ADD_CROWD]: PDD_SMS_ADD_CROWD_RESPONSE_KEY,
  [PDD_SMS_CREATE_CUSTOM_TEMPLATE]: PDD_SMS_CREATE_CUSTOM_TEMPLATE_RESPONSE_KEY,
  [PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY]: PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY_RESPONSE_KEY,
  [PDD_SMS_CROWDS_QUERY]: PDD_SMS_CROWDS_QUERY_RESPONSE_KEY,
  [PDD_SMS_CUSTOM_SETTING]: PDD_SMS_CUSTOM_SETTING_RESPONSE_KEY,
  [PDD_SMS_CUSTOM_TEMPLATE_QUERY]: PDD_SMS_CUSTOM_TEMPLATE_QUERY_RESPONSE_KEY,
  [PDD_SMS_REMAIN_DETAIL_QUERY]: PDD_SMS_REMAIN_DETAIL_QUERY_RESPONSE_KEY,
  [PDD_SMS_REMAIN_SETTING]: PDD_SMS_REMAIN_SETTING_RESPONSE_KEY,
  [PDD_SMS_REMAIN_SETTING_DETAIL_QUERY]: PDD_SMS_REMAIN_SETTING_DETAIL_QUERY_RESPONSE_KEY,
  [PDD_SMS_SELL_DELETING]: PDD_SMS_SELL_DELETING_RESPONSE_KEY,
  [PDD_SMS_SELL_RECORD_LIST_QUERY]: PDD_SMS_SELL_RECORD_LIST_QUERY_RESPONSE_KEY,
  [PDD_SMS_SELL_SETTING]: PDD_SMS_SELL_SETTING_RESPONSE_KEY,
  [PDD_SMS_SELL_SETTING_DETAIL_QUERY]: PDD_SMS_SELL_SETTING_DETAIL_QUERY_RESPONSE_KEY,
  [PDD_SMS_SELL_SETTING_RECORD_CANCEL]: PDD_SMS_SELL_SETTING_RECORD_CANCEL_RESPONSE_KEY,
  [PDD_SMS_SEND_RECORD_LIST_QUERY]: PDD_SMS_SEND_RECORD_LIST_QUERY_RESPONSE_KEY,
  [PDD_SMS_SHORT_STATISTIC_QUERY]: PDD_SMS_SHORT_STATISTIC_QUERY_RESPONSE_KEY,
  [PDD_SMS_TEMPLATE_QUERY]: PDD_SMS_TEMPLATE_QUERY_RESPONSE_KEY,
  [PDD_TIME_GET]: PDD_TIME_GET_RESPONSE_KEY,
  [PDD_EXPRESS_DEPOT_LIST_GET]: PDD_EXPRESS_DEPOT_LIST_GET_RESPONSE_KEY,
  [PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET]: PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET_RESPONSE_KEY,
  [PDD_EXPRESS_SEARCH_DEPOT]: PDD_EXPRESS_SEARCH_DEPOT_RESPONSE_KEY,
  [PDD_STOCK_DEPOT_PRIORITY_LIST]: PDD_STOCK_DEPOT_PRIORITY_LIST_RESPONSE_KEY,
  [PDD_STOCK_GOODS_ID_TO_SKU_QUERY]: PDD_STOCK_GOODS_ID_TO_SKU_QUERY_RESPONSE_KEY,
  [PDD_STOCK_WARE_DETAIL_QUERY]: PDD_STOCK_WARE_DETAIL_QUERY_RESPONSE_KEY,
  [PDD_STOCK_WARE_INFO_LIST]: PDD_STOCK_WARE_INFO_LIST_RESPONSE_KEY,
  [PDD_STOCK_WARE_LIST]: PDD_STOCK_WARE_LIST_RESPONSE_KEY,
  [PDD_PMC_USER_CANCEL]: PDD_PMC_USER_CANCEL_RESPONSE_KEY,
  [PDD_PMC_USER_GET]: PDD_PMC_USER_GET_RESPONSE_KEY,
  [PDD_PMC_USER_PERMIT]: PDD_PMC_USER_PERMIT_RESPONSE_KEY,
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET_RESPONSE_KEY,
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: PDD_CLOUDPRINT_CMDPRINT_RENDER_RESPONSE_KEY,
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: PDD_CLOUDPRINT_CUSTOMARES_GET_RESPONSE_KEY,
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PDD_CLOUDPRINT_STDTEMPLATES_GET_RESPONSE_KEY,
  [PDD_WAYBILL_CANCEL]: PDD_WAYBILL_CANCEL_RESPONSE_KEY,
  [PDD_WAYBILL_GET]: PDD_WAYBILL_GET_RESPONSE_KEY,
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: PDD_WAYBILL_QUERY_BY_WAYBILLCODE_RESPONSE_KEY,
  [PDD_WAYBILL_SEARCH]: PDD_WAYBILL_SEARCH_RESPONSE_KEY,
  [PDD_WAYBILL_UPDATE]: PDD_WAYBILL_UPDATE_RESPONSE_KEY,
  [PDD_SERVICEMARKET_SETTLEMENTBILL_GET]: PDD_SERVICEMARKET_SETTLEMENTBILL_GET_RESPONSE_KEY,
  [PDD_SERVICEMARKET_TRADELIST_GET]: PDD_SERVICEMARKET_TRADELIST_GET_RESPONSE_KEY,
  [PDD_VAS_ORDER_SEARCH]: PDD_VAS_ORDER_SEARCH_RESPONSE_KEY,
  [PDD_MALL_TICKET_DETAIL]: PDD_MALL_TICKET_DETAIL_RESPONSE_KEY,
  [PDD_MALL_TICKET_LIST]: PDD_MALL_TICKET_LIST_RESPONSE_KEY,
};
export {
  PDD_ERP_ORDER_SYNC,
  PddErpOrderSyncRequestInterface,
  PddErpOrderSyncResponseInterface,
  PDD_ORDER_INFORMATION_GET,
  PDD_ORDER_INFORMATION_GET_RESPONSE_KEY,
  PddOrderInformationGetRequestInterface,
  PddOrderInformationGetResponseInterface,
  PddOrderInformationGetOrderInfoGetResponseResponseInterface,
  PDD_ORDER_LIST_GET,
  PDD_ORDER_LIST_GET_RESPONSE_KEY,
  PddOrderListGetRequestInterface,
  PddOrderListGetResponseInterface,
  PddOrderListGetOrderListGetResponseResponseInterface,
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET,
  PDD_ORDER_NUMBER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddOrderNumberListIncrementGetRequestInterface,
  PddOrderNumberListIncrementGetResponseInterface,
  PddOrderNumberListIncrementGetOrderSnIncrementGetResponseResponseInterface,
  PDD_ORDER_STATUS_GET,
  PDD_ORDER_STATUS_GET_RESPONSE_KEY,
  PddOrderStatusGetRequestInterface,
  PddOrderStatusGetResponseInterface,
  PddOrderStatusGetOrderStatusGetResponseResponseInterface,
  PDD_LOGISTICS_ADDRESS_GET,
  PDD_LOGISTICS_ADDRESS_GET_RESPONSE_KEY,
  PddLogisticsAddressGetRequestInterface,
  PddLogisticsAddressGetResponseInterface,
  PddLogisticsAddressGetLogisticsAddressGetResponseResponseInterface,
  PDD_LOGISTICS_COMPANIES_GET,
  PDD_LOGISTICS_COMPANIES_GET_RESPONSE_KEY,
  PddLogisticsCompaniesGetRequestInterface,
  PddLogisticsCompaniesGetResponseInterface,
  PddLogisticsCompaniesGetLogisticsCompaniesGetResponseResponseInterface,
  PDD_LOGISTICS_ONLINE_CREATE,
  PDD_LOGISTICS_ONLINE_CREATE_RESPONSE_KEY,
  PddLogisticsOnlineCreateRequestInterface,
  PddLogisticsOnlineCreateResponseInterface,
  PddLogisticsOnlineCreateLogisticsOnlineCreateResponseResponseInterface,
  PDD_LOGISTICS_ONLINE_SEND,
  PDD_LOGISTICS_ONLINE_SEND_RESPONSE_KEY,
  PddLogisticsOnlineSendRequestInterface,
  PddLogisticsOnlineSendResponseInterface,
  PddLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface,
  PDD_LOGISTICS_ONLINE_STATUS_QUERY,
  PDD_LOGISTICS_ONLINE_STATUS_QUERY_RESPONSE_KEY,
  PddLogisticsOnlineStatusQueryRequestInterface,
  PddLogisticsOnlineStatusQueryResponseInterface,
  PddLogisticsOnlineStatusQueryLogisticsOnlineStatusQueryResponseResponseInterface,
  PDD_LOGISTICS_ORDERTRACE_GET,
  PddLogisticsOrdertraceGetRequestInterface,
  PddLogisticsOrdertraceGetResponseInterface,
  PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE,
  PddNextoneLogisticsWarehouseUpdateRequestInterface,
  PddNextoneLogisticsWarehouseUpdateResponseInterface,
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL,
  PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL_RESPONSE_KEY,
  PddRdcPddgeniusSendgoodsCancelRequestInterface,
  PddRdcPddgeniusSendgoodsCancelResponseInterface,
  PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResponseInterface,
  PDD_REFUND_ADDRESS_LIST_GET,
  PDD_REFUND_ADDRESS_LIST_GET_RESPONSE_KEY,
  PddRefundAddressListGetRequestInterface,
  PddRefundAddressListGetResponseInterface,
  PddRefundAddressListGetRefundAddressListGetResponseResponseInterface,
  PDD_REFUND_INFORMATION_GET,
  PddRefundInformationGetRequestInterface,
  PddRefundInformationGetResponseInterface,
  PDD_REFUND_LIST_INCREMENT_GET,
  PDD_REFUND_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddRefundListIncrementGetRequestInterface,
  PddRefundListIncrementGetResponseInterface,
  PddRefundListIncrementGetRefundIncrementGetResponseResponseInterface,
  PDD_REFUND_STATUS_CHECK,
  PDD_REFUND_STATUS_CHECK_RESPONSE_KEY,
  PddRefundStatusCheckRequestInterface,
  PddRefundStatusCheckResponseInterface,
  PddRefundStatusCheckRefundStatusCheckResponseResponseInterface,
  PDD_VIRTUAL_GAME_SERVER_QUERY,
  PDD_VIRTUAL_GAME_SERVER_QUERY_RESPONSE_KEY,
  PddVirtualGameServerQueryRequestInterface,
  PddVirtualGameServerQueryResponseInterface,
  PddVirtualGameServerQueryGameServerQueryResponseResponseInterface,
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY,
  PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY_RESPONSE_KEY,
  PddVirtualMobileChargeNotifyRequestInterface,
  PddVirtualMobileChargeNotifyResponseInterface,
  PddVirtualMobileChargeNotifyMobileChargeNotifyResponseResponseInterface,
  PDD_AD_BALANCE_GET,
  PDD_AD_BALANCE_GET_RESPONSE_KEY,
  PddAdBalanceGetRequestInterface,
  PddAdBalanceGetResponseInterface,
  PddAdBalanceGetAdBalanceGetResponseResponseInterface,
  PDD_AD_BID_QUERY_PROFILE,
  PDD_AD_BID_QUERY_PROFILE_RESPONSE_KEY,
  PddAdBidQueryProfileRequestInterface,
  PddAdBidQueryProfileResponseInterface,
  PddAdBidQueryProfileOpenApiResponseResponseInterface,
  PDD_AD_CAN_CREATE_PLAN,
  PDD_AD_CAN_CREATE_PLAN_RESPONSE_KEY,
  PddAdCanCreatePlanRequestInterface,
  PddAdCanCreatePlanResponseInterface,
  PddAdCanCreatePlanAdPlanCreateResponseResponseInterface,
  PDD_AD_CHART_BYKEYWORD_GET,
  PDD_AD_CHART_BYKEYWORD_GET_RESPONSE_KEY,
  PddAdChartBykeywordGetRequestInterface,
  PddAdChartBykeywordGetResponseInterface,
  PddAdChartBykeywordGetAdKeywordDailyReportResponseResponseInterface,
  PDD_AD_CREATE_LOCATION_BID,
  PDD_AD_CREATE_LOCATION_BID_RESPONSE_KEY,
  PddAdCreateLocationBidRequestInterface,
  PddAdCreateLocationBidResponseInterface,
  PddAdCreateLocationBidOpenApiResponseResponseInterface,
  PDD_AD_CREATE_UNIT_BID,
  PDD_AD_CREATE_UNIT_BID_RESPONSE_KEY,
  PddAdCreateUnitBidRequestInterface,
  PddAdCreateUnitBidResponseInterface,
  PddAdCreateUnitBidOpenApiResponseResponseInterface,
  PDD_AD_CREATIVE_CREATE,
  PDD_AD_CREATIVE_CREATE_RESPONSE_KEY,
  PddAdCreativeCreateRequestInterface,
  PddAdCreativeCreateResponseInterface,
  PddAdCreativeCreateOpenApiResponseResponseInterface,
  PDD_AD_CREATIVE_DELETE,
  PddAdCreativeDeleteRequestInterface,
  PddAdCreativeDeleteResponseInterface,
  PDD_AD_CREATIVE_HISTORY_REPORT_GET,
  PDD_AD_CREATIVE_HISTORY_REPORT_GET_RESPONSE_KEY,
  PddAdCreativeHistoryReportGetRequestInterface,
  PddAdCreativeHistoryReportGetResponseInterface,
  PddAdCreativeHistoryReportGetOpenApiResponseResponseInterface,
  PDD_AD_CREATIVE_QUERY,
  PDD_AD_CREATIVE_QUERY_RESPONSE_KEY,
  PddAdCreativeQueryRequestInterface,
  PddAdCreativeQueryResponseInterface,
  PddAdCreativeQueryOpenApiResponseResponseInterface,
  PDD_AD_CREATIVE_REPORT_GET,
  PDD_AD_CREATIVE_REPORT_GET_RESPONSE_KEY,
  PddAdCreativeReportGetRequestInterface,
  PddAdCreativeReportGetResponseInterface,
  PddAdCreativeReportGetAdCreativeReportGetResponseResponseInterface,
  PDD_AD_CREATIVE_UPDATE,
  PddAdCreativeUpdateRequestInterface,
  PddAdCreativeUpdateResponseInterface,
  PDD_AD_DELETE_BID,
  PDD_AD_DELETE_BID_RESPONSE_KEY,
  PddAdDeleteBidRequestInterface,
  PddAdDeleteBidResponseInterface,
  PddAdDeleteBidOpenApiResponseResponseInterface,
  PDD_AD_DELETE_LOCATION_BID,
  PDD_AD_DELETE_LOCATION_BID_RESPONSE_KEY,
  PddAdDeleteLocationBidRequestInterface,
  PddAdDeleteLocationBidResponseInterface,
  PddAdDeleteLocationBidOpenApiResponseResponseInterface,
  PDD_AD_HISTORY_KEYWORD_REPORT_GET,
  PDD_AD_HISTORY_KEYWORD_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryKeywordReportGetRequestInterface,
  PddAdHistoryKeywordReportGetResponseInterface,
  PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResponseInterface,
  PDD_AD_HISTORY_PLAN_REPORT_GET,
  PDD_AD_HISTORY_PLAN_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryPlanReportGetRequestInterface,
  PddAdHistoryPlanReportGetResponseInterface,
  PddAdHistoryPlanReportGetAdPlanHistoryReportGetResponseResponseInterface,
  PDD_AD_HISTORY_REPORT_GET,
  PDD_AD_HISTORY_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryReportGetRequestInterface,
  PddAdHistoryReportGetResponseInterface,
  PddAdHistoryReportGetAdMallHistoryReportResponseResponseInterface,
  PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET,
  PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryRtKeywordReportGetRequestInterface,
  PddAdHistoryRtKeywordReportGetResponseInterface,
  PddAdHistoryRtKeywordReportGetAdKeywordRealTimeReportResponseResponseInterface,
  PDD_AD_HISTORY_RT_PLAN_REPORT_GET,
  PDD_AD_HISTORY_RT_PLAN_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryRtPlanReportGetRequestInterface,
  PddAdHistoryRtPlanReportGetResponseInterface,
  PddAdHistoryRtPlanReportGetAdPlanRealTimeReportResponseResponseInterface,
  PDD_AD_HISTORY_RT_REPORT_GET,
  PDD_AD_HISTORY_RT_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryRtReportGetRequestInterface,
  PddAdHistoryRtReportGetResponseInterface,
  PddAdHistoryRtReportGetAdMallRealTimeReportResponseResponseInterface,
  PDD_AD_HISTORY_RT_UNIT_REPORT_GET,
  PDD_AD_HISTORY_RT_UNIT_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryRtUnitReportGetRequestInterface,
  PddAdHistoryRtUnitReportGetResponseInterface,
  PddAdHistoryRtUnitReportGetAdUnitRealTimeReportResponseResponseInterface,
  PDD_AD_HISTORY_UNIT_REPORT_GET,
  PDD_AD_HISTORY_UNIT_REPORT_GET_RESPONSE_KEY,
  PddAdHistoryUnitReportGetRequestInterface,
  PddAdHistoryUnitReportGetResponseInterface,
  PddAdHistoryUnitReportGetAdUnitHistoryReportGetResponseResponseInterface,
  PDD_AD_KEYWORD_CREATE,
  PDD_AD_KEYWORD_CREATE_RESPONSE_KEY,
  PddAdKeywordCreateRequestInterface,
  PddAdKeywordCreateResponseInterface,
  PddAdKeywordCreateAdKeywordCreateResponseResponseInterface,
  PDD_AD_KEYWORD_DAILY_REPORT,
  PddAdKeywordDailyReportRequestInterface,
  PddAdKeywordDailyReportResponseInterface,
  PDD_AD_KEYWORD_DELETE,
  PDD_AD_KEYWORD_DELETE_RESPONSE_KEY,
  PddAdKeywordDeleteRequestInterface,
  PddAdKeywordDeleteResponseInterface,
  PddAdKeywordDeleteAdKeywordDeleteResponseResponseInterface,
  PDD_AD_KEYWORD_RCOMMENDED_GET,
  PDD_AD_KEYWORD_RCOMMENDED_GET_RESPONSE_KEY,
  PddAdKeywordRcommendedGetRequestInterface,
  PddAdKeywordRcommendedGetResponseInterface,
  PddAdKeywordRcommendedGetAdRecommendedKeywordListResponseResponseInterface,
  PDD_AD_KEYWORD_RELEVANCE_GET,
  PDD_AD_KEYWORD_RELEVANCE_GET_RESPONSE_KEY,
  PddAdKeywordRelevanceGetRequestInterface,
  PddAdKeywordRelevanceGetResponseInterface,
  PddAdKeywordRelevanceGetAdKeywordRelevanceListResponseResponseInterface,
  PDD_AD_KEYWORD_UPDATE,
  PDD_AD_KEYWORD_UPDATE_RESPONSE_KEY,
  PddAdKeywordUpdateRequestInterface,
  PddAdKeywordUpdateResponseInterface,
  PddAdKeywordUpdateAdKeywordUpdateResponseResponseInterface,
  PDD_AD_PLAN_CREATE,
  PDD_AD_PLAN_CREATE_RESPONSE_KEY,
  PddAdPlanCreateRequestInterface,
  PddAdPlanCreateResponseInterface,
  PddAdPlanCreateAdPlanCreateResponseResponseInterface,
  PDD_AD_PLAN_DELETE,
  PDD_AD_PLAN_DELETE_RESPONSE_KEY,
  PddAdPlanDeleteRequestInterface,
  PddAdPlanDeleteResponseInterface,
  PddAdPlanDeleteAdPlanDeleteResponseResponseInterface,
  PDD_AD_PLAN_DISCOUNT_UPDATE,
  PddAdPlanDiscountUpdateRequestInterface,
  PddAdPlanDiscountUpdateResponseInterface,
  PDD_AD_PLAN_INFO_LIST_GET,
  PDD_AD_PLAN_INFO_LIST_GET_RESPONSE_KEY,
  PddAdPlanInfoListGetRequestInterface,
  PddAdPlanInfoListGetResponseInterface,
  PddAdPlanInfoListGetAdPlanInfoListResponseResponseInterface,
  PDD_AD_PLAN_MAX_COST_UPDATE,
  PDD_AD_PLAN_MAX_COST_UPDATE_RESPONSE_KEY,
  PddAdPlanMaxCostUpdateRequestInterface,
  PddAdPlanMaxCostUpdateResponseInterface,
  PddAdPlanMaxCostUpdateAdPlanMaxCostUpdateResponseResponseInterface,
  PDD_AD_PLAN_NAME_UPDATE,
  PDD_AD_PLAN_NAME_UPDATE_RESPONSE_KEY,
  PddAdPlanNameUpdateRequestInterface,
  PddAdPlanNameUpdateResponseInterface,
  PddAdPlanNameUpdateAdPlanNameUpdateResponseResponseInterface,
  PDD_AD_PLAN_OPT_STATUS_UPDATE,
  PDD_AD_PLAN_OPT_STATUS_UPDATE_RESPONSE_KEY,
  PddAdPlanOptStatusUpdateRequestInterface,
  PddAdPlanOptStatusUpdateResponseInterface,
  PddAdPlanOptStatusUpdateAdPlanOptStatusUpdateResponseResponseInterface,
  PDD_AD_QUERY_BID_LIST,
  PDD_AD_QUERY_BID_LIST_RESPONSE_KEY,
  PddAdQueryBidListRequestInterface,
  PddAdQueryBidListResponseInterface,
  PddAdQueryBidListOpenApiResponseResponseInterface,
  PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT,
  PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT_RESPONSE_KEY,
  PddAdQueryLocationBidHistoryReportRequestInterface,
  PddAdQueryLocationBidHistoryReportResponseInterface,
  PddAdQueryLocationBidHistoryReportOpenApiResponseResponseInterface,
  PDD_AD_QUERY_LOCATION_BID_LIST,
  PDD_AD_QUERY_LOCATION_BID_LIST_RESPONSE_KEY,
  PddAdQueryLocationBidListRequestInterface,
  PddAdQueryLocationBidListResponseInterface,
  PddAdQueryLocationBidListOpenApiResponseResponseInterface,
  PDD_AD_QUERY_LOCATION_BID_PV_LIST,
  PDD_AD_QUERY_LOCATION_BID_PV_LIST_RESPONSE_KEY,
  PddAdQueryLocationBidPvListRequestInterface,
  PddAdQueryLocationBidPvListResponseInterface,
  PddAdQueryLocationBidPvListOpenApiResponseResponseInterface,
  PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT,
  PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT_RESPONSE_KEY,
  PddAdQueryUnitBidHistoryReportRequestInterface,
  PddAdQueryUnitBidHistoryReportResponseInterface,
  PddAdQueryUnitBidHistoryReportOpenApiResponseResponseInterface,
  PDD_AD_UNIT_CREATE,
  PDD_AD_UNIT_CREATE_RESPONSE_KEY,
  PddAdUnitCreateRequestInterface,
  PddAdUnitCreateResponseInterface,
  PddAdUnitCreateAdUnitCreateResponseResponseInterface,
  PDD_AD_UNIT_DELETE,
  PDD_AD_UNIT_DELETE_RESPONSE_KEY,
  PddAdUnitDeleteRequestInterface,
  PddAdUnitDeleteResponseInterface,
  PddAdUnitDeleteAdUnitDeleteResponseResponseInterface,
  PDD_AD_UNIT_GET_BY_PLAN_ID,
  PDD_AD_UNIT_GET_BY_PLAN_ID_RESPONSE_KEY,
  PddAdUnitGetByPlanIdRequestInterface,
  PddAdUnitGetByPlanIdResponseInterface,
  PddAdUnitGetByPlanIdAdUnitBaseInfoListResponseResponseInterface,
  PDD_AD_UNIT_OPT_STATUS_UPDATE,
  PDD_AD_UNIT_OPT_STATUS_UPDATE_RESPONSE_KEY,
  PddAdUnitOptStatusUpdateRequestInterface,
  PddAdUnitOptStatusUpdateResponseInterface,
  PddAdUnitOptStatusUpdateAdUnitOptStatusUpdateResponseResponseInterface,
  PDD_AD_UPDATE_BID,
  PDD_AD_UPDATE_BID_RESPONSE_KEY,
  PddAdUpdateBidRequestInterface,
  PddAdUpdateBidResponseInterface,
  PddAdUpdateBidOpenApiResponseResponseInterface,
  PDD_AD_UPDATE_LOCATION_BID,
  PDD_AD_UPDATE_LOCATION_BID_RESPONSE_KEY,
  PddAdUpdateLocationBidRequestInterface,
  PddAdUpdateLocationBidResponseInterface,
  PddAdUpdateLocationBidOpenApiResponseResponseInterface,
  PDD_DELETE_DRAFT_COMMIT,
  PddDeleteDraftCommitRequestInterface,
  PddDeleteDraftCommitResponseInterface,
  PDD_DELETE_GOODS_COMMIT,
  PddDeleteGoodsCommitRequestInterface,
  PddDeleteGoodsCommitResponseInterface,
  PDD_GOODS_ADD,
  PDD_GOODS_ADD_RESPONSE_KEY,
  PddGoodsAddRequestInterface,
  PddGoodsAddResponseInterface,
  PddGoodsAddGoodsAddResponseResponseInterface,
  PDD_GOODS_AUTHORIZATION_CATS,
  PDD_GOODS_AUTHORIZATION_CATS_RESPONSE_KEY,
  PddGoodsAuthorizationCatsRequestInterface,
  PddGoodsAuthorizationCatsResponseInterface,
  PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseResponseInterface,
  PDD_GOODS_CAT_TEMPLATE_GET,
  PDD_GOODS_CAT_TEMPLATE_GET_RESPONSE_KEY,
  PddGoodsCatTemplateGetRequestInterface,
  PddGoodsCatTemplateGetResponseInterface,
  PddGoodsCatTemplateGetOpenApiResponseResponseInterface,
  PDD_GOODS_CATS_GET,
  PDD_GOODS_CATS_GET_RESPONSE_KEY,
  PddGoodsCatsGetRequestInterface,
  PddGoodsCatsGetResponseInterface,
  PddGoodsCatsGetGoodsCatsGetResponseResponseInterface,
  PDD_GOODS_COMMIT_DETAIL_GET,
  PDD_GOODS_COMMIT_DETAIL_GET_RESPONSE_KEY,
  PddGoodsCommitDetailGetRequestInterface,
  PddGoodsCommitDetailGetResponseInterface,
  PddGoodsCommitDetailGetGoodsCommitDetailResponseResponseInterface,
  PDD_GOODS_COMMIT_LIST_GET,
  PDD_GOODS_COMMIT_LIST_GET_RESPONSE_KEY,
  PddGoodsCommitListGetRequestInterface,
  PddGoodsCommitListGetResponseInterface,
  PddGoodsCommitListGetGoodsCommitListGetResponseResponseInterface,
  PDD_GOODS_COMMIT_STATUS_GET,
  PDD_GOODS_COMMIT_STATUS_GET_RESPONSE_KEY,
  PddGoodsCommitStatusGetRequestInterface,
  PddGoodsCommitStatusGetResponseInterface,
  PddGoodsCommitStatusGetGoodsCommitStatusGetResponseResponseInterface,
  PDD_GOODS_COUNTRY_GET,
  PDD_GOODS_COUNTRY_GET_RESPONSE_KEY,
  PddGoodsCountryGetRequestInterface,
  PddGoodsCountryGetResponseInterface,
  PddGoodsCountryGetGoodsCountryGetResponseResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_CHANGE,
  PDD_GOODS_CPS_MALL_UNIT_CHANGE_RESPONSE_KEY,
  PddGoodsCpsMallUnitChangeRequestInterface,
  PddGoodsCpsMallUnitChangeResponseInterface,
  PddGoodsCpsMallUnitChangeGoodsCpsMallUnitChangeResponseResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_CREATE,
  PddGoodsCpsMallUnitCreateRequestInterface,
  PddGoodsCpsMallUnitCreateResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_PAUSE,
  PDD_GOODS_CPS_MALL_UNIT_PAUSE_RESPONSE_KEY,
  PddGoodsCpsMallUnitPauseRequestInterface,
  PddGoodsCpsMallUnitPauseResponseInterface,
  PddGoodsCpsMallUnitPauseGoodsCpsMallUnitQueryResponseResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_QUERY,
  PDD_GOODS_CPS_MALL_UNIT_QUERY_RESPONSE_KEY,
  PddGoodsCpsMallUnitQueryRequestInterface,
  PddGoodsCpsMallUnitQueryResponseInterface,
  PddGoodsCpsMallUnitQueryGoodsCpsMallUnitQueryResponseResponseInterface,
  PDD_GOODS_CPS_MALL_UNIT_RESUME,
  PDD_GOODS_CPS_MALL_UNIT_RESUME_RESPONSE_KEY,
  PddGoodsCpsMallUnitResumeRequestInterface,
  PddGoodsCpsMallUnitResumeResponseInterface,
  PddGoodsCpsMallUnitResumeGoodsCpsMallUnitResumeResponseResponseInterface,
  PDD_GOODS_CPS_UNIT_CHANGE,
  PddGoodsCpsUnitChangeRequestInterface,
  PddGoodsCpsUnitChangeResponseInterface,
  PDD_GOODS_CPS_UNIT_CREATE,
  PddGoodsCpsUnitCreateRequestInterface,
  PddGoodsCpsUnitCreateResponseInterface,
  PDD_GOODS_CPS_UNIT_DELETE,
  PDD_GOODS_CPS_UNIT_DELETE_RESPONSE_KEY,
  PddGoodsCpsUnitDeleteRequestInterface,
  PddGoodsCpsUnitDeleteResponseInterface,
  PddGoodsCpsUnitDeleteGoodsCpsUnitDeleteResponseResponseInterface,
  PDD_GOODS_CPS_UNIT_QUERY,
  PddGoodsCpsUnitQueryRequestInterface,
  PddGoodsCpsUnitQueryResponseInterface,
  PDD_GOODS_DETAIL_GET,
  PDD_GOODS_DETAIL_GET_RESPONSE_KEY,
  PddGoodsDetailGetRequestInterface,
  PddGoodsDetailGetResponseInterface,
  PddGoodsDetailGetGoodsDetailGetResponseResponseInterface,
  PDD_GOODS_EDIT_GOODS_COMMIT,
  PDD_GOODS_EDIT_GOODS_COMMIT_RESPONSE_KEY,
  PddGoodsEditGoodsCommitRequestInterface,
  PddGoodsEditGoodsCommitResponseInterface,
  PddGoodsEditGoodsCommitGoodsUpdateResponseResponseInterface,
  PDD_GOODS_GET_RELATION,
  PDD_GOODS_GET_RELATION_RESPONSE_KEY,
  PddGoodsGetRelationRequestInterface,
  PddGoodsGetRelationResponseInterface,
  PddGoodsGetRelationQueryGoodsRelationResponseResponseInterface,
  PDD_GOODS_IMAGE_UPLOAD,
  PDD_GOODS_IMAGE_UPLOAD_RESPONSE_KEY,
  PddGoodsImageUploadRequestInterface,
  PddGoodsImageUploadResponseInterface,
  PddGoodsImageUploadGoodsImageUploadResponseResponseInterface,
  PDD_GOODS_INFORMATION_GET,
  PDD_GOODS_INFORMATION_GET_RESPONSE_KEY,
  PddGoodsInformationGetRequestInterface,
  PddGoodsInformationGetResponseInterface,
  PddGoodsInformationGetGoodsInfoGetResponseResponseInterface,
  PDD_GOODS_INFORMATION_UPDATE,
  PDD_GOODS_INFORMATION_UPDATE_RESPONSE_KEY,
  PddGoodsInformationUpdateRequestInterface,
  PddGoodsInformationUpdateResponseInterface,
  PddGoodsInformationUpdateGoodsUpdateResponseResponseInterface,
  PDD_GOODS_LATEST_COMMIT_STATUS_GET,
  PDD_GOODS_LATEST_COMMIT_STATUS_GET_RESPONSE_KEY,
  PddGoodsLatestCommitStatusGetRequestInterface,
  PddGoodsLatestCommitStatusGetResponseInterface,
  PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseResponseInterface,
  PDD_GOODS_LIST_GET,
  PDD_GOODS_LIST_GET_RESPONSE_KEY,
  PddGoodsListGetRequestInterface,
  PddGoodsListGetResponseInterface,
  PddGoodsListGetGoodsListGetResponseResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateCreateRequestInterface,
  PddGoodsLogisticsSerTemplateCreateResponseInterface,
  PddGoodsLogisticsSerTemplateCreateGoodsLogisticsSerTemplateCreateResponseResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateDeleteRequestInterface,
  PddGoodsLogisticsSerTemplateDeleteResponseInterface,
  PddGoodsLogisticsSerTemplateDeleteGoodsLogisticsSerTemplateDeleteResponseResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateDetailRequestInterface,
  PddGoodsLogisticsSerTemplateDetailResponseInterface,
  PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateListRequestInterface,
  PddGoodsLogisticsSerTemplateListResponseInterface,
  PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseResponseInterface,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE,
  PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE_RESPONSE_KEY,
  PddGoodsLogisticsSerTemplateUpdateRequestInterface,
  PddGoodsLogisticsSerTemplateUpdateResponseInterface,
  PddGoodsLogisticsSerTemplateUpdateGoodsLogisticsSerTemplateCreateResponseResponseInterface,
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE,
  PDD_GOODS_LOGISTICS_TEMPLATE_CREATE_RESPONSE_KEY,
  PddGoodsLogisticsTemplateCreateRequestInterface,
  PddGoodsLogisticsTemplateCreateResponseInterface,
  PddGoodsLogisticsTemplateCreateGoodsLogisticsTemplateCreateResponseResponseInterface,
  PDD_GOODS_LOGISTICS_TEMPLATE_GET,
  PDD_GOODS_LOGISTICS_TEMPLATE_GET_RESPONSE_KEY,
  PddGoodsLogisticsTemplateGetRequestInterface,
  PddGoodsLogisticsTemplateGetResponseInterface,
  PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface,
  PDD_GOODS_OPT_GET,
  PDD_GOODS_OPT_GET_RESPONSE_KEY,
  PddGoodsOptGetRequestInterface,
  PddGoodsOptGetResponseInterface,
  PddGoodsOptGetGoodsOptGetResponseResponseInterface,
  PDD_GOODS_OUTER_CAT_MAPPING_GET,
  PDD_GOODS_OUTER_CAT_MAPPING_GET_RESPONSE_KEY,
  PddGoodsOuterCatMappingGetRequestInterface,
  PddGoodsOuterCatMappingGetResponseInterface,
  PddGoodsOuterCatMappingGetOuterCatMappingGetResponseResponseInterface,
  PDD_GOODS_QUANTITY_UPDATE,
  PDD_GOODS_QUANTITY_UPDATE_RESPONSE_KEY,
  PddGoodsQuantityUpdateRequestInterface,
  PddGoodsQuantityUpdateResponseInterface,
  PddGoodsQuantityUpdateGoodsQuantityUpdateResponseResponseInterface,
  PDD_GOODS_RELATION_SET,
  PDD_GOODS_RELATION_SET_RESPONSE_KEY,
  PddGoodsRelationSetRequestInterface,
  PddGoodsRelationSetResponseInterface,
  PddGoodsRelationSetGoodsRelationSetResponseResponseInterface,
  PDD_GOODS_SALE_STATUS_SET,
  PDD_GOODS_SALE_STATUS_SET_RESPONSE_KEY,
  PddGoodsSaleStatusSetRequestInterface,
  PddGoodsSaleStatusSetResponseInterface,
  PddGoodsSaleStatusSetGoodsSaleStatusSetResponseResponseInterface,
  PDD_GOODS_SKU_PRICE_UPDATE,
  PDD_GOODS_SKU_PRICE_UPDATE_RESPONSE_KEY,
  PddGoodsSkuPriceUpdateRequestInterface,
  PddGoodsSkuPriceUpdateResponseInterface,
  PddGoodsSkuPriceUpdateGoodsUpdateSkuPriceResponseResponseInterface,
  PDD_GOODS_SPEC_GET,
  PDD_GOODS_SPEC_GET_RESPONSE_KEY,
  PddGoodsSpecGetRequestInterface,
  PddGoodsSpecGetResponseInterface,
  PddGoodsSpecGetGoodsSpecGetResponseResponseInterface,
  PDD_GOODS_SPEC_ID_GET,
  PDD_GOODS_SPEC_ID_GET_RESPONSE_KEY,
  PddGoodsSpecIdGetRequestInterface,
  PddGoodsSpecIdGetResponseInterface,
  PddGoodsSpecIdGetGoodsSpecIdGetResponseResponseInterface,
  PDD_GOODS_SUBMIT_GOODS_COMMIT,
  PDD_GOODS_SUBMIT_GOODS_COMMIT_RESPONSE_KEY,
  PddGoodsSubmitGoodsCommitRequestInterface,
  PddGoodsSubmitGoodsCommitResponseInterface,
  PddGoodsSubmitGoodsCommitGoodsUpdateResponseResponseInterface,
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH,
  PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH_RESPONSE_KEY,
  PddGoodsTemplatePropertyValueSearchRequestInterface,
  PddGoodsTemplatePropertyValueSearchResponseInterface,
  PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseResponseInterface,
  PDD_GOOODS_SKU_MEASUREMENT_LIST,
  PDD_GOOODS_SKU_MEASUREMENT_LIST_RESPONSE_KEY,
  PddGooodsSkuMeasurementListRequestInterface,
  PddGooodsSkuMeasurementListResponseInterface,
  PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseResponseInterface,
  PDD_ONE_EXPRESS_COST_TEMPLATE,
  PDD_ONE_EXPRESS_COST_TEMPLATE_RESPONSE_KEY,
  PddOneExpressCostTemplateRequestInterface,
  PddOneExpressCostTemplateResponseInterface,
  PddOneExpressCostTemplateOneExpressCostTemplateResponseResponseInterface,
  PDD_DDK_CMS_PROM_URL_GENERATE,
  PDD_DDK_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkCmsPromUrlGenerateRequestInterface,
  PddDdkCmsPromUrlGenerateResponseInterface,
  PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_COUPON_INFO_QUERY,
  PDD_DDK_COUPON_INFO_QUERY_RESPONSE_KEY,
  PddDdkCouponInfoQueryRequestInterface,
  PddDdkCouponInfoQueryResponseInterface,
  PddDdkCouponInfoQueryDdkCouponInfoQueryResponseResponseInterface,
  PDD_DDK_FINANCE_CPA_QUERY,
  PDD_DDK_FINANCE_CPA_QUERY_RESPONSE_KEY,
  PddDdkFinanceCpaQueryRequestInterface,
  PddDdkFinanceCpaQueryResponseInterface,
  PddDdkFinanceCpaQueryFinanceCpaQueryResponseResponseInterface,
  PDD_DDK_GOODS_BASIC_INFO_GET,
  PDD_DDK_GOODS_BASIC_INFO_GET_RESPONSE_KEY,
  PddDdkGoodsBasicInfoGetRequestInterface,
  PddDdkGoodsBasicInfoGetResponseInterface,
  PddDdkGoodsBasicInfoGetGoodsBasicDetailResponseResponseInterface,
  PDD_DDK_GOODS_DETAIL,
  PDD_DDK_GOODS_DETAIL_RESPONSE_KEY,
  PddDdkGoodsDetailRequestInterface,
  PddDdkGoodsDetailResponseInterface,
  PddDdkGoodsDetailGoodsDetailResponseResponseInterface,
  PDD_DDK_GOODS_PID_GENERATE,
  PDD_DDK_GOODS_PID_GENERATE_RESPONSE_KEY,
  PddDdkGoodsPidGenerateRequestInterface,
  PddDdkGoodsPidGenerateResponseInterface,
  PddDdkGoodsPidGeneratePIdGenerateResponseResponseInterface,
  PDD_DDK_GOODS_PID_QUERY,
  PDD_DDK_GOODS_PID_QUERY_RESPONSE_KEY,
  PddDdkGoodsPidQueryRequestInterface,
  PddDdkGoodsPidQueryResponseInterface,
  PddDdkGoodsPidQueryPIdQueryResponseResponseInterface,
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE,
  PDD_DDK_GOODS_PROMOTION_URL_GENERATE_RESPONSE_KEY,
  PddDdkGoodsPromotionUrlGenerateRequestInterface,
  PddDdkGoodsPromotionUrlGenerateResponseInterface,
  PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_GOODS_RECOMMEND_GET,
  PDD_DDK_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  PddDdkGoodsRecommendGetRequestInterface,
  PddDdkGoodsRecommendGetResponseInterface,
  PddDdkGoodsRecommendGetGoodsBasicDetailResponseResponseInterface,
  PDD_DDK_GOODS_SEARCH,
  PDD_DDK_GOODS_SEARCH_RESPONSE_KEY,
  PddDdkGoodsSearchRequestInterface,
  PddDdkGoodsSearchResponseInterface,
  PddDdkGoodsSearchGoodsSearchResponseResponseInterface,
  PDD_DDK_GOODS_UNIT_QUERY,
  PDD_DDK_GOODS_UNIT_QUERY_RESPONSE_KEY,
  PddDdkGoodsUnitQueryRequestInterface,
  PddDdkGoodsUnitQueryResponseInterface,
  PddDdkGoodsUnitQueryDdkGoodsUnitQueryResponseResponseInterface,
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN,
  PDD_DDK_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  PddDdkGoodsZsUnitUrlGenRequestInterface,
  PddDdkGoodsZsUnitUrlGenResponseInterface,
  PddDdkGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface,
  PDD_DDK_LOTTERY_URL_GEN,
  PDD_DDK_LOTTERY_URL_GEN_RESPONSE_KEY,
  PddDdkLotteryUrlGenRequestInterface,
  PddDdkLotteryUrlGenResponseInterface,
  PddDdkLotteryUrlGenLotteryUrlResponseResponseInterface,
  PDD_DDK_MALL_GOODS_LIST_GET,
  PDD_DDK_MALL_GOODS_LIST_GET_RESPONSE_KEY,
  PddDdkMallGoodsListGetRequestInterface,
  PddDdkMallGoodsListGetResponseInterface,
  PddDdkMallGoodsListGetGoodsInfoListResponseResponseInterface,
  PDD_DDK_MALL_URL_GEN,
  PDD_DDK_MALL_URL_GEN_RESPONSE_KEY,
  PddDdkMallUrlGenRequestInterface,
  PddDdkMallUrlGenResponseInterface,
  PddDdkMallUrlGenMallCouponGenerateUrlResponseResponseInterface,
  PDD_DDK_MERCHANT_LIST_GET,
  PDD_DDK_MERCHANT_LIST_GET_RESPONSE_KEY,
  PddDdkMerchantListGetRequestInterface,
  PddDdkMerchantListGetResponseInterface,
  PddDdkMerchantListGetMerchantListResponseResponseInterface,
  PDD_DDK_ORDER_DETAIL_GET,
  PDD_DDK_ORDER_DETAIL_GET_RESPONSE_KEY,
  PddDdkOrderDetailGetRequestInterface,
  PddDdkOrderDetailGetResponseInterface,
  PddDdkOrderDetailGetOrderDetailResponseResponseInterface,
  PDD_DDK_ORDER_LIST_INCREMENT_GET,
  PDD_DDK_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddDdkOrderListIncrementGetRequestInterface,
  PddDdkOrderListIncrementGetResponseInterface,
  PddDdkOrderListIncrementGetOrderListGetResponseResponseInterface,
  PDD_DDK_ORDER_LIST_RANGE_GET,
  PDD_DDK_ORDER_LIST_RANGE_GET_RESPONSE_KEY,
  PddDdkOrderListRangeGetRequestInterface,
  PddDdkOrderListRangeGetResponseInterface,
  PddDdkOrderListRangeGetOrderListGetResponseResponseInterface,
  PDD_DDK_RESOURCE_URL_GEN,
  PDD_DDK_RESOURCE_URL_GEN_RESPONSE_KEY,
  PddDdkResourceUrlGenRequestInterface,
  PddDdkResourceUrlGenResponseInterface,
  PddDdkResourceUrlGenResourceUrlResponseResponseInterface,
  PDD_DDK_RP_PROM_URL_GENERATE,
  PDD_DDK_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkRpPromUrlGenerateRequestInterface,
  PddDdkRpPromUrlGenerateResponseInterface,
  PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_THEME_GOODS_SEARCH,
  PDD_DDK_THEME_GOODS_SEARCH_RESPONSE_KEY,
  PddDdkThemeGoodsSearchRequestInterface,
  PddDdkThemeGoodsSearchResponseInterface,
  PddDdkThemeGoodsSearchThemeListGetResponseResponseInterface,
  PDD_DDK_THEME_LIST_GET,
  PDD_DDK_THEME_LIST_GET_RESPONSE_KEY,
  PddDdkThemeListGetRequestInterface,
  PddDdkThemeListGetResponseInterface,
  PddDdkThemeListGetThemeListGetResponseResponseInterface,
  PDD_DDK_THEME_PROM_URL_GENERATE,
  PDD_DDK_THEME_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkThemePromUrlGenerateRequestInterface,
  PddDdkThemePromUrlGenerateResponseInterface,
  PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_TOP_GOODS_LIST_QUERY,
  PDD_DDK_TOP_GOODS_LIST_QUERY_RESPONSE_KEY,
  PddDdkTopGoodsListQueryRequestInterface,
  PddDdkTopGoodsListQueryResponseInterface,
  PddDdkTopGoodsListQueryTopGoodsListGetResponseResponseInterface,
  PDD_DDK_WEAPP_QRCODE_URL_GEN,
  PDD_DDK_WEAPP_QRCODE_URL_GEN_RESPONSE_KEY,
  PddDdkWeappQrcodeUrlGenRequestInterface,
  PddDdkWeappQrcodeUrlGenResponseInterface,
  PddDdkWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface,
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET,
  PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET_RESPONSE_KEY,
  PddDdkAllOrderListIncrementGetRequestInterface,
  PddDdkAllOrderListIncrementGetResponseInterface,
  PddDdkAllOrderListIncrementGetOrderListGetResponseResponseInterface,
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthCmsPromUrlGenerateRequestInterface,
  PddDdkOauthCmsPromUrlGenerateResponseInterface,
  PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_PID_GENERATE,
  PDD_DDK_OAUTH_GOODS_PID_GENERATE_RESPONSE_KEY,
  PddDdkOauthGoodsPidGenerateRequestInterface,
  PddDdkOauthGoodsPidGenerateResponseInterface,
  PddDdkOauthGoodsPidGeneratePIdGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_PID_QUERY,
  PDD_DDK_OAUTH_GOODS_PID_QUERY_RESPONSE_KEY,
  PddDdkOauthGoodsPidQueryRequestInterface,
  PddDdkOauthGoodsPidQueryResponseInterface,
  PddDdkOauthGoodsPidQueryPIdQueryResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthGoodsPromUrlGenerateRequestInterface,
  PddDdkOauthGoodsPromUrlGenerateResponseInterface,
  PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET,
  PDD_DDK_OAUTH_GOODS_RECOMMEND_GET_RESPONSE_KEY,
  PddDdkOauthGoodsRecommendGetRequestInterface,
  PddDdkOauthGoodsRecommendGetResponseInterface,
  PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseResponseInterface,
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN,
  PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN_RESPONSE_KEY,
  PddDdkOauthGoodsZsUnitUrlGenRequestInterface,
  PddDdkOauthGoodsZsUnitUrlGenResponseInterface,
  PddDdkOauthGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_LOTTERY_URL_GEN,
  PDD_DDK_OAUTH_LOTTERY_URL_GEN_RESPONSE_KEY,
  PddDdkOauthLotteryUrlGenRequestInterface,
  PddDdkOauthLotteryUrlGenResponseInterface,
  PddDdkOauthLotteryUrlGenLotteryUrlResponseResponseInterface,
  PDD_DDK_OAUTH_MALL_URL_GEN,
  PDD_DDK_OAUTH_MALL_URL_GEN_RESPONSE_KEY,
  PddDdkOauthMallUrlGenRequestInterface,
  PddDdkOauthMallUrlGenResponseInterface,
  PddDdkOauthMallUrlGenMallCouponGenerateUrlResponseResponseInterface,
  PDD_DDK_OAUTH_ORDER_DETAIL_GET,
  PDD_DDK_OAUTH_ORDER_DETAIL_GET_RESPONSE_KEY,
  PddDdkOauthOrderDetailGetRequestInterface,
  PddDdkOauthOrderDetailGetResponseInterface,
  PddDdkOauthOrderDetailGetOrderDetailResponseResponseInterface,
  PDD_DDK_OAUTH_RESOURCE_URL_GEN,
  PDD_DDK_OAUTH_RESOURCE_URL_GEN_RESPONSE_KEY,
  PddDdkOauthResourceUrlGenRequestInterface,
  PddDdkOauthResourceUrlGenResponseInterface,
  PddDdkOauthResourceUrlGenResourceUrlResponseResponseInterface,
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_RP_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthRpPromUrlGenerateRequestInterface,
  PddDdkOauthRpPromUrlGenerateResponseInterface,
  PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE,
  PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE_RESPONSE_KEY,
  PddDdkOauthThemePromUrlGenerateRequestInterface,
  PddDdkOauthThemePromUrlGenerateResponseInterface,
  PddDdkOauthThemePromUrlGenerateThemePromotionUrlGenerateResponseResponseInterface,
  PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY,
  PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY_RESPONSE_KEY,
  PddDdkOauthTopGoodsListQueryRequestInterface,
  PddDdkOauthTopGoodsListQueryResponseInterface,
  PddDdkOauthTopGoodsListQueryTopGoodsListGetResponseResponseInterface,
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET,
  PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET_RESPONSE_KEY,
  PddLogisticsCsHistoryMessageGetRequestInterface,
  PddLogisticsCsHistoryMessageGetResponseInterface,
  PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseResponseInterface,
  PDD_LOGISTICS_CS_MESSAGE_SEND,
  PDD_LOGISTICS_CS_MESSAGE_SEND_RESPONSE_KEY,
  PddLogisticsCsMessageSendRequestInterface,
  PddLogisticsCsMessageSendResponseInterface,
  PddLogisticsCsMessageSendLogisticsCsMessageSendResponseResponseInterface,
  PDD_LOGISTICS_CS_SESSION_CLOSE,
  PDD_LOGISTICS_CS_SESSION_CLOSE_RESPONSE_KEY,
  PddLogisticsCsSessionCloseRequestInterface,
  PddLogisticsCsSessionCloseResponseInterface,
  PddLogisticsCsSessionCloseLogisticsCsSessionCloseResponseResponseInterface,
  PDD_LOGISTICS_CS_SESSION_START,
  PDD_LOGISTICS_CS_SESSION_START_RESPONSE_KEY,
  PddLogisticsCsSessionStartRequestInterface,
  PddLogisticsCsSessionStartResponseInterface,
  PddLogisticsCsSessionStartLogisticsCsSessionStartResponseResponseInterface,
  PDD_LOGISTICS_TICKET_GET,
  PDD_LOGISTICS_TICKET_GET_RESPONSE_KEY,
  PddLogisticsTicketGetRequestInterface,
  PddLogisticsTicketGetResponseInterface,
  PddLogisticsTicketGetLogisticsTicketGetResponseResponseInterface,
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD,
  PDD_LOGISTICS_TICKET_IMAGE_UPLOAD_RESPONSE_KEY,
  PddLogisticsTicketImageUploadRequestInterface,
  PddLogisticsTicketImageUploadResponseInterface,
  PddLogisticsTicketImageUploadLogisticsTicketImageUploadResponseResponseInterface,
  PDD_LOGISTICS_TICKET_NOTIFY,
  PDD_LOGISTICS_TICKET_NOTIFY_RESPONSE_KEY,
  PddLogisticsTicketNotifyRequestInterface,
  PddLogisticsTicketNotifyResponseInterface,
  PddLogisticsTicketNotifyLogisticsTicketNotifyResponseResponseInterface,
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET,
  PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET_RESPONSE_KEY,
  PddLogisticsTicketProblemTypeGetRequestInterface,
  PddLogisticsTicketProblemTypeGetResponseInterface,
  PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseResponseInterface,
  PDD_PROMOTION_COUPON_CLOSE,
  PDD_PROMOTION_COUPON_CLOSE_RESPONSE_KEY,
  PddPromotionCouponCloseRequestInterface,
  PddPromotionCouponCloseResponseInterface,
  PddPromotionCouponClosePromotionCouponBatchCloseResponseResponseInterface,
  PDD_PROMOTION_COUPON_QUANTITY_ADD,
  PDD_PROMOTION_COUPON_QUANTITY_ADD_RESPONSE_KEY,
  PddPromotionCouponQuantityAddRequestInterface,
  PddPromotionCouponQuantityAddResponseInterface,
  PddPromotionCouponQuantityAddCouponQuantityAddResponseResponseInterface,
  PDD_PROMOTION_GOODS_COUPON_CREATE,
  PDD_PROMOTION_GOODS_COUPON_CREATE_RESPONSE_KEY,
  PddPromotionGoodsCouponCreateRequestInterface,
  PddPromotionGoodsCouponCreateResponseInterface,
  PddPromotionGoodsCouponCreateGoodsCouponBatchCreateResponseResponseInterface,
  PDD_PROMOTION_GOODS_COUPON_LIST_GET,
  PDD_PROMOTION_GOODS_COUPON_LIST_GET_RESPONSE_KEY,
  PddPromotionGoodsCouponListGetRequestInterface,
  PddPromotionGoodsCouponListGetResponseInterface,
  PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseResponseInterface,
  PDD_PROMOTION_HOME_COUPON_CREATE,
  PDD_PROMOTION_HOME_COUPON_CREATE_RESPONSE_KEY,
  PddPromotionHomeCouponCreateRequestInterface,
  PddPromotionHomeCouponCreateResponseInterface,
  PddPromotionHomeCouponCreateHomeCouponBatchCreateResponseResponseInterface,
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET,
  PDD_PROMOTION_MERCHANT_COUPON_LIST_GET_RESPONSE_KEY,
  PddPromotionMerchantCouponListGetRequestInterface,
  PddPromotionMerchantCouponListGetResponseInterface,
  PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseResponseInterface,
  PDD_VOUCHER_APPOINTMENT_INFO_SEND,
  PDD_VOUCHER_APPOINTMENT_INFO_SEND_RESPONSE_KEY,
  PddVoucherAppointmentInfoSendRequestInterface,
  PddVoucherAppointmentInfoSendResponseInterface,
  PddVoucherAppointmentInfoSendVoucherAppointmentInfoSendResponseResponseInterface,
  PDD_VOUCHER_OTA_CARD_VERIFICATION,
  PDD_VOUCHER_OTA_CARD_VERIFICATION_RESPONSE_KEY,
  PddVoucherOtaCardVerificationRequestInterface,
  PddVoucherOtaCardVerificationResponseInterface,
  PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResponseInterface,
  PDD_VOUCHER_PHYSICAL_GOODS_SEND,
  PDD_VOUCHER_PHYSICAL_GOODS_SEND_RESPONSE_KEY,
  PddVoucherPhysicalGoodsSendRequestInterface,
  PddVoucherPhysicalGoodsSendResponseInterface,
  PddVoucherPhysicalGoodsSendVoucherPhysicalVoucherSendResponseResponseInterface,
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION,
  PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION_RESPONSE_KEY,
  PddVoucherVirtualCardVerificationRequestInterface,
  PddVoucherVirtualCardVerificationResponseInterface,
  PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseResponseInterface,
  PDD_VOUCHER_VOUCHER_COMPLAIN,
  PDD_VOUCHER_VOUCHER_COMPLAIN_RESPONSE_KEY,
  PddVoucherVoucherComplainRequestInterface,
  PddVoucherVoucherComplainResponseInterface,
  PddVoucherVoucherComplainVoucherVoucherComplainResponseResponseInterface,
  PDD_VOUCHER_VOUCHER_INFO_SEND,
  PDD_VOUCHER_VOUCHER_INFO_SEND_RESPONSE_KEY,
  PddVoucherVoucherInfoSendRequestInterface,
  PddVoucherVoucherInfoSendResponseInterface,
  PddVoucherVoucherInfoSendVoucherVoucherInfoSendResponseResponseInterface,
  PDD_INVOICE_APPLICATION_QUERY,
  PDD_INVOICE_APPLICATION_QUERY_RESPONSE_KEY,
  PddInvoiceApplicationQueryRequestInterface,
  PddInvoiceApplicationQueryResponseInterface,
  PddInvoiceApplicationQueryInvoiceApplicationQueryResponseResponseInterface,
  PDD_INVOICE_APPLICATION_UPDATE,
  PDD_INVOICE_APPLICATION_UPDATE_RESPONSE_KEY,
  PddInvoiceApplicationUpdateRequestInterface,
  PddInvoiceApplicationUpdateResponseInterface,
  PddInvoiceApplicationUpdateInvoiceApplicationUpdateResponseResponseInterface,
  PDD_INVOICE_DETAIL_INVALID,
  PDD_INVOICE_DETAIL_INVALID_RESPONSE_KEY,
  PddInvoiceDetailInvalidRequestInterface,
  PddInvoiceDetailInvalidResponseInterface,
  PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResponseInterface,
  PDD_INVOICE_DETAIL_QUERY,
  PDD_INVOICE_DETAIL_QUERY_RESPONSE_KEY,
  PddInvoiceDetailQueryRequestInterface,
  PddInvoiceDetailQueryResponseInterface,
  PddInvoiceDetailQueryInvoiceDetailQueryResponseResponseInterface,
  PDD_INVOICE_DETAIL_UPLOAD,
  PDD_INVOICE_DETAIL_UPLOAD_RESPONSE_KEY,
  PddInvoiceDetailUploadRequestInterface,
  PddInvoiceDetailUploadResponseInterface,
  PddInvoiceDetailUploadInvoiceDetailUploadResponseResponseInterface,
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY,
  PDD_MALL_CPS_PROTOCOL_STATUS_QUERY_RESPONSE_KEY,
  PddMallCpsProtocolStatusQueryRequestInterface,
  PddMallCpsProtocolStatusQueryResponseInterface,
  PddMallCpsProtocolStatusQueryMallCpsProtocolStatusQueryResponseResponseInterface,
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET,
  PDD_MALL_INFO_BONDED_WAREHOUSE_GET_RESPONSE_KEY,
  PddMallInfoBondedWarehouseGetRequestInterface,
  PddMallInfoBondedWarehouseGetResponseInterface,
  PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseResponseInterface,
  PDD_MALL_INFO_GET,
  PDD_MALL_INFO_GET_RESPONSE_KEY,
  PddMallInfoGetRequestInterface,
  PddMallInfoGetResponseInterface,
  PddMallInfoGetMallInfoGetResponseResponseInterface,
  PDD_MALL_INFO_GROUP_ADD_STORE_POST,
  PDD_MALL_INFO_GROUP_ADD_STORE_POST_RESPONSE_KEY,
  PddMallInfoGroupAddStorePostRequestInterface,
  PddMallInfoGroupAddStorePostResponseInterface,
  PddMallInfoGroupAddStorePostMallInfoGroupAddStorePostResponseResponseInterface,
  PDD_MALL_INFO_GROUP_LIST_STORE_GET,
  PDD_MALL_INFO_GROUP_LIST_STORE_GET_RESPONSE_KEY,
  PddMallInfoGroupListStoreGetRequestInterface,
  PddMallInfoGroupListStoreGetResponseInterface,
  PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseResponseInterface,
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET,
  PDD_MALL_INFO_GROUP_REMOVE_STORE_GET_RESPONSE_KEY,
  PddMallInfoGroupRemoveStoreGetRequestInterface,
  PddMallInfoGroupRemoveStoreGetResponseInterface,
  PddMallInfoGroupRemoveStoreGetMallInfoGroupRemoveStoreGetResponseResponseInterface,
  PDD_MALL_INFO_STORE_CREATE_POST,
  PDD_MALL_INFO_STORE_CREATE_POST_RESPONSE_KEY,
  PddMallInfoStoreCreatePostRequestInterface,
  PddMallInfoStoreCreatePostResponseInterface,
  PddMallInfoStoreCreatePostMallInfoStoreCreatePostResponseResponseInterface,
  PDD_MALL_INFO_STORE_CREATE_POST_NOPOI,
  PddMallInfoStoreCreatePostNopoiRequestInterface,
  PddMallInfoStoreCreatePostNopoiResponseInterface,
  PDD_MALL_INFO_STORE_DELETE_POST,
  PDD_MALL_INFO_STORE_DELETE_POST_RESPONSE_KEY,
  PddMallInfoStoreDeletePostRequestInterface,
  PddMallInfoStoreDeletePostResponseInterface,
  PddMallInfoStoreDeletePostMallInfoStoreDeletePostResponseResponseInterface,
  PDD_MALL_INFO_STORE_GET,
  PddMallInfoStoreGetRequestInterface,
  PddMallInfoStoreGetResponseInterface,
  PDD_MALL_INFO_STORE_UPDATE_POST,
  PDD_MALL_INFO_STORE_UPDATE_POST_RESPONSE_KEY,
  PddMallInfoStoreUpdatePostRequestInterface,
  PddMallInfoStoreUpdatePostResponseInterface,
  PddMallInfoStoreUpdatePostMallInfoStoreUpdatePostResponseResponseInterface,
  PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI,
  PddMallInfoStoreUpdatePostNopoiRequestInterface,
  PddMallInfoStoreUpdatePostNopoiResponseInterface,
  PDD_QRPAY_PAYEE_REGISTER,
  PDD_QRPAY_PAYEE_REGISTER_RESPONSE_KEY,
  PddQrpayPayeeRegisterRequestInterface,
  PddQrpayPayeeRegisterResponseInterface,
  PddQrpayPayeeRegisterQrpayPayeeRegisterResponseResponseInterface,
  PDD_SMS_ADD_CROWD,
  PDD_SMS_ADD_CROWD_RESPONSE_KEY,
  PddSmsAddCrowdRequestInterface,
  PddSmsAddCrowdResponseInterface,
  PddSmsAddCrowdSmsAddCrowdResponseResponseInterface,
  PDD_SMS_CREATE_CUSTOM_TEMPLATE,
  PDD_SMS_CREATE_CUSTOM_TEMPLATE_RESPONSE_KEY,
  PddSmsCreateCustomTemplateRequestInterface,
  PddSmsCreateCustomTemplateResponseInterface,
  PddSmsCreateCustomTemplateSmsCreateCustomTemplateResponseResponseInterface,
  PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY,
  PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY_RESPONSE_KEY,
  PddSmsCrowdsPeopleNumberQueryRequestInterface,
  PddSmsCrowdsPeopleNumberQueryResponseInterface,
  PddSmsCrowdsPeopleNumberQuerySmsCrowsPeopleNumberQueryResponseResponseInterface,
  PDD_SMS_CROWDS_QUERY,
  PDD_SMS_CROWDS_QUERY_RESPONSE_KEY,
  PddSmsCrowdsQueryRequestInterface,
  PddSmsCrowdsQueryResponseInterface,
  PddSmsCrowdsQuerySmsCrowsQueryResponseResponseInterface,
  PDD_SMS_CUSTOM_SETTING,
  PDD_SMS_CUSTOM_SETTING_RESPONSE_KEY,
  PddSmsCustomSettingRequestInterface,
  PddSmsCustomSettingResponseInterface,
  PddSmsCustomSettingSmsCustomSettingResponseResponseInterface,
  PDD_SMS_CUSTOM_TEMPLATE_QUERY,
  PDD_SMS_CUSTOM_TEMPLATE_QUERY_RESPONSE_KEY,
  PddSmsCustomTemplateQueryRequestInterface,
  PddSmsCustomTemplateQueryResponseInterface,
  PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResponseInterface,
  PDD_SMS_REMAIN_DETAIL_QUERY,
  PDD_SMS_REMAIN_DETAIL_QUERY_RESPONSE_KEY,
  PddSmsRemainDetailQueryRequestInterface,
  PddSmsRemainDetailQueryResponseInterface,
  PddSmsRemainDetailQuerySmsRemainDetailQueryResponseResponseInterface,
  PDD_SMS_REMAIN_SETTING,
  PDD_SMS_REMAIN_SETTING_RESPONSE_KEY,
  PddSmsRemainSettingRequestInterface,
  PddSmsRemainSettingResponseInterface,
  PddSmsRemainSettingSmsRemainSettingResponseResponseInterface,
  PDD_SMS_REMAIN_SETTING_DETAIL_QUERY,
  PDD_SMS_REMAIN_SETTING_DETAIL_QUERY_RESPONSE_KEY,
  PddSmsRemainSettingDetailQueryRequestInterface,
  PddSmsRemainSettingDetailQueryResponseInterface,
  PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResponseInterface,
  PDD_SMS_SELL_DELETING,
  PDD_SMS_SELL_DELETING_RESPONSE_KEY,
  PddSmsSellDeletingRequestInterface,
  PddSmsSellDeletingResponseInterface,
  PddSmsSellDeletingSmsSellDeletingResponseResponseInterface,
  PDD_SMS_SELL_RECORD_LIST_QUERY,
  PDD_SMS_SELL_RECORD_LIST_QUERY_RESPONSE_KEY,
  PddSmsSellRecordListQueryRequestInterface,
  PddSmsSellRecordListQueryResponseInterface,
  PddSmsSellRecordListQuerySmsSellRecordListQueryResponseResponseInterface,
  PDD_SMS_SELL_SETTING,
  PDD_SMS_SELL_SETTING_RESPONSE_KEY,
  PddSmsSellSettingRequestInterface,
  PddSmsSellSettingResponseInterface,
  PddSmsSellSettingSmsSellSettingResponseResponseInterface,
  PDD_SMS_SELL_SETTING_DETAIL_QUERY,
  PDD_SMS_SELL_SETTING_DETAIL_QUERY_RESPONSE_KEY,
  PddSmsSellSettingDetailQueryRequestInterface,
  PddSmsSellSettingDetailQueryResponseInterface,
  PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseResponseInterface,
  PDD_SMS_SELL_SETTING_RECORD_CANCEL,
  PDD_SMS_SELL_SETTING_RECORD_CANCEL_RESPONSE_KEY,
  PddSmsSellSettingRecordCancelRequestInterface,
  PddSmsSellSettingRecordCancelResponseInterface,
  PddSmsSellSettingRecordCancelSmsSellSettingRecordCancelResponseResponseInterface,
  PDD_SMS_SEND_RECORD_LIST_QUERY,
  PDD_SMS_SEND_RECORD_LIST_QUERY_RESPONSE_KEY,
  PddSmsSendRecordListQueryRequestInterface,
  PddSmsSendRecordListQueryResponseInterface,
  PddSmsSendRecordListQuerySmsSendRecordListQueryResponseResponseInterface,
  PDD_SMS_SHORT_STATISTIC_QUERY,
  PDD_SMS_SHORT_STATISTIC_QUERY_RESPONSE_KEY,
  PddSmsShortStatisticQueryRequestInterface,
  PddSmsShortStatisticQueryResponseInterface,
  PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseResponseInterface,
  PDD_SMS_TEMPLATE_QUERY,
  PDD_SMS_TEMPLATE_QUERY_RESPONSE_KEY,
  PddSmsTemplateQueryRequestInterface,
  PddSmsTemplateQueryResponseInterface,
  PddSmsTemplateQuerySmsTemplateQueryResponseResponseInterface,
  PDD_TIME_GET,
  PDD_TIME_GET_RESPONSE_KEY,
  PddTimeGetRequestInterface,
  PddTimeGetResponseInterface,
  PddTimeGetTimeGetResponseResponseInterface,
  PDD_UTIL_DIVIDE_BASE64_IMAGE,
  PddUtilDivideBase64ImageRequestInterface,
  PddUtilDivideBase64ImageResponseInterface,
  PDD_EXPRESS_ADD_DEPOT,
  PddExpressAddDepotRequestInterface,
  PddExpressAddDepotResponseInterface,
  PDD_EXPRESS_CHANGE_DEPOT_INFO,
  PddExpressChangeDepotInfoRequestInterface,
  PddExpressChangeDepotInfoResponseInterface,
  PDD_EXPRESS_DEPOT_INFO_GET,
  PddExpressDepotInfoGetRequestInterface,
  PddExpressDepotInfoGetResponseInterface,
  PDD_EXPRESS_DEPOT_LIST_GET,
  PDD_EXPRESS_DEPOT_LIST_GET_RESPONSE_KEY,
  PddExpressDepotListGetRequestInterface,
  PddExpressDepotListGetResponseInterface,
  PddExpressDepotListGetOpenApiResponseResponseInterface,
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET,
  PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET_RESPONSE_KEY,
  PddExpressMallDepotSimpleGetRequestInterface,
  PddExpressMallDepotSimpleGetResponseInterface,
  PddExpressMallDepotSimpleGetOpenApiResponseResponseInterface,
  PDD_EXPRESS_SEARCH_DEPOT,
  PDD_EXPRESS_SEARCH_DEPOT_RESPONSE_KEY,
  PddExpressSearchDepotRequestInterface,
  PddExpressSearchDepotResponseInterface,
  PddExpressSearchDepotOpenApiResponseResponseInterface,
  PDD_STOCK_DEPOT_PRIORITY_LIST,
  PDD_STOCK_DEPOT_PRIORITY_LIST_RESPONSE_KEY,
  PddStockDepotPriorityListRequestInterface,
  PddStockDepotPriorityListResponseInterface,
  PddStockDepotPriorityListOpenApiResponseResponseInterface,
  PDD_STOCK_DEPOT_PRIORITY_UPDATE,
  PddStockDepotPriorityUpdateRequestInterface,
  PddStockDepotPriorityUpdateResponseInterface,
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY,
  PDD_STOCK_GOODS_ID_TO_SKU_QUERY_RESPONSE_KEY,
  PddStockGoodsIdToSkuQueryRequestInterface,
  PddStockGoodsIdToSkuQueryResponseInterface,
  PddStockGoodsIdToSkuQueryOpenApiResponseResponseInterface,
  PDD_STOCK_WARE_CREATE,
  PddStockWareCreateRequestInterface,
  PddStockWareCreateResponseInterface,
  PDD_STOCK_WARE_DELETE,
  PddStockWareDeleteRequestInterface,
  PddStockWareDeleteResponseInterface,
  PDD_STOCK_WARE_DETAIL_QUERY,
  PDD_STOCK_WARE_DETAIL_QUERY_RESPONSE_KEY,
  PddStockWareDetailQueryRequestInterface,
  PddStockWareDetailQueryResponseInterface,
  PddStockWareDetailQueryOpenApiResponseResponseInterface,
  PDD_STOCK_WARE_INFO_LIST,
  PDD_STOCK_WARE_INFO_LIST_RESPONSE_KEY,
  PddStockWareInfoListRequestInterface,
  PddStockWareInfoListResponseInterface,
  PddStockWareInfoListStockWareInfoListResponseResponseInterface,
  PDD_STOCK_WARE_LIST,
  PDD_STOCK_WARE_LIST_RESPONSE_KEY,
  PddStockWareListRequestInterface,
  PddStockWareListResponseInterface,
  PddStockWareListOpenApiResponseResponseInterface,
  PDD_STOCK_WARE_MOVE,
  PddStockWareMoveRequestInterface,
  PddStockWareMoveResponseInterface,
  PDD_STOCK_WARE_SKU_UPDATE,
  PddStockWareSkuUpdateRequestInterface,
  PddStockWareSkuUpdateResponseInterface,
  PDD_STOCK_WARE_UPDATE,
  PddStockWareUpdateRequestInterface,
  PddStockWareUpdateResponseInterface,
  PDD_PMC_USER_CANCEL,
  PDD_PMC_USER_CANCEL_RESPONSE_KEY,
  PddPmcUserCancelRequestInterface,
  PddPmcUserCancelResponseInterface,
  PddPmcUserCancelPmcUserCancelResponseResponseInterface,
  PDD_PMC_USER_GET,
  PDD_PMC_USER_GET_RESPONSE_KEY,
  PddPmcUserGetRequestInterface,
  PddPmcUserGetResponseInterface,
  PddPmcUserGetPmcUserGetResponseResponseInterface,
  PDD_PMC_USER_PERMIT,
  PDD_PMC_USER_PERMIT_RESPONSE_KEY,
  PddPmcUserPermitRequestInterface,
  PddPmcUserPermitResponseInterface,
  PddPmcUserPermitPmcUserPermitResponseResponseInterface,
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET,
  PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET_RESPONSE_KEY,
  PddFinanceBalanceDailyBillUrlGetRequestInterface,
  PddFinanceBalanceDailyBillUrlGetResponseInterface,
  PddFinanceBalanceDailyBillUrlGetFinanceBalanceDailyBillUrlGetResponseResponseInterface,
  PDD_CLOUDPRINT_CMDPRINT_RENDER,
  PDD_CLOUDPRINT_CMDPRINT_RENDER_RESPONSE_KEY,
  PddCloudprintCmdprintRenderRequestInterface,
  PddCloudprintCmdprintRenderResponseInterface,
  PddCloudprintCmdprintRenderCloudprintCmdprintRenderResponseResponseInterface,
  PDD_CLOUDPRINT_CUSTOMARES_GET,
  PDD_CLOUDPRINT_CUSTOMARES_GET_RESPONSE_KEY,
  PddCloudprintCustomaresGetRequestInterface,
  PddCloudprintCustomaresGetResponseInterface,
  PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResponseInterface,
  PDD_CLOUDPRINT_STDTEMPLATES_GET,
  PDD_CLOUDPRINT_STDTEMPLATES_GET_RESPONSE_KEY,
  PddCloudprintStdtemplatesGetRequestInterface,
  PddCloudprintStdtemplatesGetResponseInterface,
  PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResponseInterface,
  PDD_WAYBILL_CANCEL,
  PDD_WAYBILL_CANCEL_RESPONSE_KEY,
  PddWaybillCancelRequestInterface,
  PddWaybillCancelResponseInterface,
  PddWaybillCancelPddWaybillCancelResponseResponseInterface,
  PDD_WAYBILL_GET,
  PDD_WAYBILL_GET_RESPONSE_KEY,
  PddWaybillGetRequestInterface,
  PddWaybillGetResponseInterface,
  PddWaybillGetPddWaybillGetResponseResponseInterface,
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE,
  PDD_WAYBILL_QUERY_BY_WAYBILLCODE_RESPONSE_KEY,
  PddWaybillQueryByWaybillcodeRequestInterface,
  PddWaybillQueryByWaybillcodeResponseInterface,
  PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseResponseInterface,
  PDD_WAYBILL_SEARCH,
  PDD_WAYBILL_SEARCH_RESPONSE_KEY,
  PddWaybillSearchRequestInterface,
  PddWaybillSearchResponseInterface,
  PddWaybillSearchPddWaybillSearchResponseResponseInterface,
  PDD_WAYBILL_UPDATE,
  PDD_WAYBILL_UPDATE_RESPONSE_KEY,
  PddWaybillUpdateRequestInterface,
  PddWaybillUpdateResponseInterface,
  PddWaybillUpdatePddWaybillUpdateResponseResponseInterface,
  PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD,
  PddOpenMsgServiceQueryExpressMsgRecordRequestInterface,
  PddOpenMsgServiceQueryExpressMsgRecordResponseInterface,
  PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD,
  PddOpenMsgServiceQueryMsgRecordRequestInterface,
  PddOpenMsgServiceQueryMsgRecordResponseInterface,
  PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG,
  PddOpenMsgServiceSendBatchMsgRequestInterface,
  PddOpenMsgServiceSendBatchMsgResponseInterface,
  PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG,
  PddOpenMsgServiceSendExpressMsgRequestInterface,
  PddOpenMsgServiceSendExpressMsgResponseInterface,
  PDD_OPEN_MSG_SERVICE_SEND_MSG,
  PddOpenMsgServiceSendMsgRequestInterface,
  PddOpenMsgServiceSendMsgResponseInterface,
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET,
  PDD_SERVICEMARKET_SETTLEMENTBILL_GET_RESPONSE_KEY,
  PddServicemarketSettlementbillGetRequestInterface,
  PddServicemarketSettlementbillGetResponseInterface,
  PddServicemarketSettlementbillGetSettlementBillSearchResponseResponseInterface,
  PDD_SERVICEMARKET_TRADELIST_GET,
  PDD_SERVICEMARKET_TRADELIST_GET_RESPONSE_KEY,
  PddServicemarketTradelistGetRequestInterface,
  PddServicemarketTradelistGetResponseInterface,
  PddServicemarketTradelistGetMallBalanceFlowSearchResponseResponseInterface,
  PDD_VAS_ORDER_SEARCH,
  PDD_VAS_ORDER_SEARCH_RESPONSE_KEY,
  PddVasOrderSearchRequestInterface,
  PddVasOrderSearchResponseInterface,
  PddVasOrderSearchVasOrderSearchResponseResponseInterface,
  PDD_MALL_TICKET_DETAIL,
  PDD_MALL_TICKET_DETAIL_RESPONSE_KEY,
  PddMallTicketDetailRequestInterface,
  PddMallTicketDetailResponseInterface,
  PddMallTicketDetailMallTicketDetailResponseResponseInterface,
  PDD_MALL_TICKET_LIST,
  PDD_MALL_TICKET_LIST_RESPONSE_KEY,
  PddMallTicketListRequestInterface,
  PddMallTicketListResponseInterface,
  PddMallTicketListMallTicketListResponseResponseInterface,
  PDD_MALL_TICKET_NOTIFY,
  PddMallTicketNotifyRequestInterface,
  PddMallTicketNotifyResponseInterface,
  PDD_SMS_DETAILBILL_PUSH,
  PddSmsDetailbillPushRequestInterface,
  PddSmsDetailbillPushResponseInterface,
  PDD_SMS_VENDOR_COMPLAINT_CREATE,
  PddSmsVendorComplaintCreateRequestInterface,
  PddSmsVendorComplaintCreateResponseInterface,
  PddResponseTypeAndRequestTypeMapping,
};
export interface PddCollectRequestInterface {
  [PDD_ERP_ORDER_SYNC]: PddErpOrderSyncRequestInterface;
  [PDD_ORDER_INFORMATION_GET]: PddOrderInformationGetRequestInterface;
  [PDD_ORDER_LIST_GET]: PddOrderListGetRequestInterface;
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PddOrderNumberListIncrementGetRequestInterface;
  [PDD_ORDER_STATUS_GET]: PddOrderStatusGetRequestInterface;
  [PDD_LOGISTICS_ADDRESS_GET]: PddLogisticsAddressGetRequestInterface;
  [PDD_LOGISTICS_COMPANIES_GET]: PddLogisticsCompaniesGetRequestInterface;
  [PDD_LOGISTICS_ONLINE_CREATE]: PddLogisticsOnlineCreateRequestInterface;
  [PDD_LOGISTICS_ONLINE_SEND]: PddLogisticsOnlineSendRequestInterface;
  [PDD_LOGISTICS_ONLINE_STATUS_QUERY]: PddLogisticsOnlineStatusQueryRequestInterface;
  [PDD_LOGISTICS_ORDERTRACE_GET]: PddLogisticsOrdertraceGetRequestInterface;
  [PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE]: PddNextoneLogisticsWarehouseUpdateRequestInterface;
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PddRdcPddgeniusSendgoodsCancelRequestInterface;
  [PDD_REFUND_ADDRESS_LIST_GET]: PddRefundAddressListGetRequestInterface;
  [PDD_REFUND_INFORMATION_GET]: PddRefundInformationGetRequestInterface;
  [PDD_REFUND_LIST_INCREMENT_GET]: PddRefundListIncrementGetRequestInterface;
  [PDD_REFUND_STATUS_CHECK]: PddRefundStatusCheckRequestInterface;
  [PDD_VIRTUAL_GAME_SERVER_QUERY]: PddVirtualGameServerQueryRequestInterface;
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PddVirtualMobileChargeNotifyRequestInterface;
  [PDD_AD_BALANCE_GET]: PddAdBalanceGetRequestInterface;
  [PDD_AD_BID_QUERY_PROFILE]: PddAdBidQueryProfileRequestInterface;
  [PDD_AD_CAN_CREATE_PLAN]: PddAdCanCreatePlanRequestInterface;
  [PDD_AD_CHART_BYKEYWORD_GET]: PddAdChartBykeywordGetRequestInterface;
  [PDD_AD_CREATE_LOCATION_BID]: PddAdCreateLocationBidRequestInterface;
  [PDD_AD_CREATE_UNIT_BID]: PddAdCreateUnitBidRequestInterface;
  [PDD_AD_CREATIVE_CREATE]: PddAdCreativeCreateRequestInterface;
  [PDD_AD_CREATIVE_DELETE]: PddAdCreativeDeleteRequestInterface;
  [PDD_AD_CREATIVE_HISTORY_REPORT_GET]: PddAdCreativeHistoryReportGetRequestInterface;
  [PDD_AD_CREATIVE_QUERY]: PddAdCreativeQueryRequestInterface;
  [PDD_AD_CREATIVE_REPORT_GET]: PddAdCreativeReportGetRequestInterface;
  [PDD_AD_CREATIVE_UPDATE]: PddAdCreativeUpdateRequestInterface;
  [PDD_AD_DELETE_BID]: PddAdDeleteBidRequestInterface;
  [PDD_AD_DELETE_LOCATION_BID]: PddAdDeleteLocationBidRequestInterface;
  [PDD_AD_HISTORY_KEYWORD_REPORT_GET]: PddAdHistoryKeywordReportGetRequestInterface;
  [PDD_AD_HISTORY_PLAN_REPORT_GET]: PddAdHistoryPlanReportGetRequestInterface;
  [PDD_AD_HISTORY_REPORT_GET]: PddAdHistoryReportGetRequestInterface;
  [PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET]: PddAdHistoryRtKeywordReportGetRequestInterface;
  [PDD_AD_HISTORY_RT_PLAN_REPORT_GET]: PddAdHistoryRtPlanReportGetRequestInterface;
  [PDD_AD_HISTORY_RT_REPORT_GET]: PddAdHistoryRtReportGetRequestInterface;
  [PDD_AD_HISTORY_RT_UNIT_REPORT_GET]: PddAdHistoryRtUnitReportGetRequestInterface;
  [PDD_AD_HISTORY_UNIT_REPORT_GET]: PddAdHistoryUnitReportGetRequestInterface;
  [PDD_AD_KEYWORD_CREATE]: PddAdKeywordCreateRequestInterface;
  [PDD_AD_KEYWORD_DAILY_REPORT]: PddAdKeywordDailyReportRequestInterface;
  [PDD_AD_KEYWORD_DELETE]: PddAdKeywordDeleteRequestInterface;
  [PDD_AD_KEYWORD_RCOMMENDED_GET]: PddAdKeywordRcommendedGetRequestInterface;
  [PDD_AD_KEYWORD_RELEVANCE_GET]: PddAdKeywordRelevanceGetRequestInterface;
  [PDD_AD_KEYWORD_UPDATE]: PddAdKeywordUpdateRequestInterface;
  [PDD_AD_PLAN_CREATE]: PddAdPlanCreateRequestInterface;
  [PDD_AD_PLAN_DELETE]: PddAdPlanDeleteRequestInterface;
  [PDD_AD_PLAN_DISCOUNT_UPDATE]: PddAdPlanDiscountUpdateRequestInterface;
  [PDD_AD_PLAN_INFO_LIST_GET]: PddAdPlanInfoListGetRequestInterface;
  [PDD_AD_PLAN_MAX_COST_UPDATE]: PddAdPlanMaxCostUpdateRequestInterface;
  [PDD_AD_PLAN_NAME_UPDATE]: PddAdPlanNameUpdateRequestInterface;
  [PDD_AD_PLAN_OPT_STATUS_UPDATE]: PddAdPlanOptStatusUpdateRequestInterface;
  [PDD_AD_QUERY_BID_LIST]: PddAdQueryBidListRequestInterface;
  [PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT]: PddAdQueryLocationBidHistoryReportRequestInterface;
  [PDD_AD_QUERY_LOCATION_BID_LIST]: PddAdQueryLocationBidListRequestInterface;
  [PDD_AD_QUERY_LOCATION_BID_PV_LIST]: PddAdQueryLocationBidPvListRequestInterface;
  [PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT]: PddAdQueryUnitBidHistoryReportRequestInterface;
  [PDD_AD_UNIT_CREATE]: PddAdUnitCreateRequestInterface;
  [PDD_AD_UNIT_DELETE]: PddAdUnitDeleteRequestInterface;
  [PDD_AD_UNIT_GET_BY_PLAN_ID]: PddAdUnitGetByPlanIdRequestInterface;
  [PDD_AD_UNIT_OPT_STATUS_UPDATE]: PddAdUnitOptStatusUpdateRequestInterface;
  [PDD_AD_UPDATE_BID]: PddAdUpdateBidRequestInterface;
  [PDD_AD_UPDATE_LOCATION_BID]: PddAdUpdateLocationBidRequestInterface;
  [PDD_DELETE_DRAFT_COMMIT]: PddDeleteDraftCommitRequestInterface;
  [PDD_DELETE_GOODS_COMMIT]: PddDeleteGoodsCommitRequestInterface;
  [PDD_GOODS_ADD]: PddGoodsAddRequestInterface;
  [PDD_GOODS_AUTHORIZATION_CATS]: PddGoodsAuthorizationCatsRequestInterface;
  [PDD_GOODS_CAT_TEMPLATE_GET]: PddGoodsCatTemplateGetRequestInterface;
  [PDD_GOODS_CATS_GET]: PddGoodsCatsGetRequestInterface;
  [PDD_GOODS_COMMIT_DETAIL_GET]: PddGoodsCommitDetailGetRequestInterface;
  [PDD_GOODS_COMMIT_LIST_GET]: PddGoodsCommitListGetRequestInterface;
  [PDD_GOODS_COMMIT_STATUS_GET]: PddGoodsCommitStatusGetRequestInterface;
  [PDD_GOODS_COUNTRY_GET]: PddGoodsCountryGetRequestInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CHANGE]: PddGoodsCpsMallUnitChangeRequestInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CREATE]: PddGoodsCpsMallUnitCreateRequestInterface;
  [PDD_GOODS_CPS_MALL_UNIT_PAUSE]: PddGoodsCpsMallUnitPauseRequestInterface;
  [PDD_GOODS_CPS_MALL_UNIT_QUERY]: PddGoodsCpsMallUnitQueryRequestInterface;
  [PDD_GOODS_CPS_MALL_UNIT_RESUME]: PddGoodsCpsMallUnitResumeRequestInterface;
  [PDD_GOODS_CPS_UNIT_CHANGE]: PddGoodsCpsUnitChangeRequestInterface;
  [PDD_GOODS_CPS_UNIT_CREATE]: PddGoodsCpsUnitCreateRequestInterface;
  [PDD_GOODS_CPS_UNIT_DELETE]: PddGoodsCpsUnitDeleteRequestInterface;
  [PDD_GOODS_CPS_UNIT_QUERY]: PddGoodsCpsUnitQueryRequestInterface;
  [PDD_GOODS_DETAIL_GET]: PddGoodsDetailGetRequestInterface;
  [PDD_GOODS_EDIT_GOODS_COMMIT]: PddGoodsEditGoodsCommitRequestInterface;
  [PDD_GOODS_GET_RELATION]: PddGoodsGetRelationRequestInterface;
  [PDD_GOODS_IMAGE_UPLOAD]: PddGoodsImageUploadRequestInterface;
  [PDD_GOODS_INFORMATION_GET]: PddGoodsInformationGetRequestInterface;
  [PDD_GOODS_INFORMATION_UPDATE]: PddGoodsInformationUpdateRequestInterface;
  [PDD_GOODS_LATEST_COMMIT_STATUS_GET]: PddGoodsLatestCommitStatusGetRequestInterface;
  [PDD_GOODS_LIST_GET]: PddGoodsListGetRequestInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE]: PddGoodsLogisticsSerTemplateCreateRequestInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE]: PddGoodsLogisticsSerTemplateDeleteRequestInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL]: PddGoodsLogisticsSerTemplateDetailRequestInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST]: PddGoodsLogisticsSerTemplateListRequestInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE]: PddGoodsLogisticsSerTemplateUpdateRequestInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_CREATE]: PddGoodsLogisticsTemplateCreateRequestInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_GET]: PddGoodsLogisticsTemplateGetRequestInterface;
  [PDD_GOODS_OPT_GET]: PddGoodsOptGetRequestInterface;
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PddGoodsOuterCatMappingGetRequestInterface;
  [PDD_GOODS_QUANTITY_UPDATE]: PddGoodsQuantityUpdateRequestInterface;
  [PDD_GOODS_RELATION_SET]: PddGoodsRelationSetRequestInterface;
  [PDD_GOODS_SALE_STATUS_SET]: PddGoodsSaleStatusSetRequestInterface;
  [PDD_GOODS_SKU_PRICE_UPDATE]: PddGoodsSkuPriceUpdateRequestInterface;
  [PDD_GOODS_SPEC_GET]: PddGoodsSpecGetRequestInterface;
  [PDD_GOODS_SPEC_ID_GET]: PddGoodsSpecIdGetRequestInterface;
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PddGoodsSubmitGoodsCommitRequestInterface;
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: PddGoodsTemplatePropertyValueSearchRequestInterface;
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: PddGooodsSkuMeasurementListRequestInterface;
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: PddOneExpressCostTemplateRequestInterface;
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PddDdkCmsPromUrlGenerateRequestInterface;
  [PDD_DDK_COUPON_INFO_QUERY]: PddDdkCouponInfoQueryRequestInterface;
  [PDD_DDK_FINANCE_CPA_QUERY]: PddDdkFinanceCpaQueryRequestInterface;
  [PDD_DDK_GOODS_BASIC_INFO_GET]: PddDdkGoodsBasicInfoGetRequestInterface;
  [PDD_DDK_GOODS_DETAIL]: PddDdkGoodsDetailRequestInterface;
  [PDD_DDK_GOODS_PID_GENERATE]: PddDdkGoodsPidGenerateRequestInterface;
  [PDD_DDK_GOODS_PID_QUERY]: PddDdkGoodsPidQueryRequestInterface;
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PddDdkGoodsPromotionUrlGenerateRequestInterface;
  [PDD_DDK_GOODS_RECOMMEND_GET]: PddDdkGoodsRecommendGetRequestInterface;
  [PDD_DDK_GOODS_SEARCH]: PddDdkGoodsSearchRequestInterface;
  [PDD_DDK_GOODS_UNIT_QUERY]: PddDdkGoodsUnitQueryRequestInterface;
  [PDD_DDK_GOODS_ZS_UNIT_URL_GEN]: PddDdkGoodsZsUnitUrlGenRequestInterface;
  [PDD_DDK_LOTTERY_URL_GEN]: PddDdkLotteryUrlGenRequestInterface;
  [PDD_DDK_MALL_GOODS_LIST_GET]: PddDdkMallGoodsListGetRequestInterface;
  [PDD_DDK_MALL_URL_GEN]: PddDdkMallUrlGenRequestInterface;
  [PDD_DDK_MERCHANT_LIST_GET]: PddDdkMerchantListGetRequestInterface;
  [PDD_DDK_ORDER_DETAIL_GET]: PddDdkOrderDetailGetRequestInterface;
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PddDdkOrderListIncrementGetRequestInterface;
  [PDD_DDK_ORDER_LIST_RANGE_GET]: PddDdkOrderListRangeGetRequestInterface;
  [PDD_DDK_RESOURCE_URL_GEN]: PddDdkResourceUrlGenRequestInterface;
  [PDD_DDK_RP_PROM_URL_GENERATE]: PddDdkRpPromUrlGenerateRequestInterface;
  [PDD_DDK_THEME_GOODS_SEARCH]: PddDdkThemeGoodsSearchRequestInterface;
  [PDD_DDK_THEME_LIST_GET]: PddDdkThemeListGetRequestInterface;
  [PDD_DDK_THEME_PROM_URL_GENERATE]: PddDdkThemePromUrlGenerateRequestInterface;
  [PDD_DDK_TOP_GOODS_LIST_QUERY]: PddDdkTopGoodsListQueryRequestInterface;
  [PDD_DDK_WEAPP_QRCODE_URL_GEN]: PddDdkWeappQrcodeUrlGenRequestInterface;
  [PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET]: PddDdkAllOrderListIncrementGetRequestInterface;
  [PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE]: PddDdkOauthCmsPromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_GOODS_PID_GENERATE]: PddDdkOauthGoodsPidGenerateRequestInterface;
  [PDD_DDK_OAUTH_GOODS_PID_QUERY]: PddDdkOauthGoodsPidQueryRequestInterface;
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PddDdkOauthGoodsPromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_GOODS_RECOMMEND_GET]: PddDdkOauthGoodsRecommendGetRequestInterface;
  [PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN]: PddDdkOauthGoodsZsUnitUrlGenRequestInterface;
  [PDD_DDK_OAUTH_LOTTERY_URL_GEN]: PddDdkOauthLotteryUrlGenRequestInterface;
  [PDD_DDK_OAUTH_MALL_URL_GEN]: PddDdkOauthMallUrlGenRequestInterface;
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PddDdkOauthOrderDetailGetRequestInterface;
  [PDD_DDK_OAUTH_RESOURCE_URL_GEN]: PddDdkOauthResourceUrlGenRequestInterface;
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: PddDdkOauthRpPromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE]: PddDdkOauthThemePromUrlGenerateRequestInterface;
  [PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY]: PddDdkOauthTopGoodsListQueryRequestInterface;
  [PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET]: PddLogisticsCsHistoryMessageGetRequestInterface;
  [PDD_LOGISTICS_CS_MESSAGE_SEND]: PddLogisticsCsMessageSendRequestInterface;
  [PDD_LOGISTICS_CS_SESSION_CLOSE]: PddLogisticsCsSessionCloseRequestInterface;
  [PDD_LOGISTICS_CS_SESSION_START]: PddLogisticsCsSessionStartRequestInterface;
  [PDD_LOGISTICS_TICKET_GET]: PddLogisticsTicketGetRequestInterface;
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PddLogisticsTicketImageUploadRequestInterface;
  [PDD_LOGISTICS_TICKET_NOTIFY]: PddLogisticsTicketNotifyRequestInterface;
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PddLogisticsTicketProblemTypeGetRequestInterface;
  [PDD_PROMOTION_COUPON_CLOSE]: PddPromotionCouponCloseRequestInterface;
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PddPromotionCouponQuantityAddRequestInterface;
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PddPromotionGoodsCouponCreateRequestInterface;
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PddPromotionGoodsCouponListGetRequestInterface;
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PddPromotionHomeCouponCreateRequestInterface;
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PddPromotionMerchantCouponListGetRequestInterface;
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PddVoucherAppointmentInfoSendRequestInterface;
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PddVoucherOtaCardVerificationRequestInterface;
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PddVoucherPhysicalGoodsSendRequestInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PddVoucherVirtualCardVerificationRequestInterface;
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PddVoucherVoucherComplainRequestInterface;
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PddVoucherVoucherInfoSendRequestInterface;
  [PDD_INVOICE_APPLICATION_QUERY]: PddInvoiceApplicationQueryRequestInterface;
  [PDD_INVOICE_APPLICATION_UPDATE]: PddInvoiceApplicationUpdateRequestInterface;
  [PDD_INVOICE_DETAIL_INVALID]: PddInvoiceDetailInvalidRequestInterface;
  [PDD_INVOICE_DETAIL_QUERY]: PddInvoiceDetailQueryRequestInterface;
  [PDD_INVOICE_DETAIL_UPLOAD]: PddInvoiceDetailUploadRequestInterface;
  [PDD_MALL_CPS_PROTOCOL_STATUS_QUERY]: PddMallCpsProtocolStatusQueryRequestInterface;
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PddMallInfoBondedWarehouseGetRequestInterface;
  [PDD_MALL_INFO_GET]: PddMallInfoGetRequestInterface;
  [PDD_MALL_INFO_GROUP_ADD_STORE_POST]: PddMallInfoGroupAddStorePostRequestInterface;
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: PddMallInfoGroupListStoreGetRequestInterface;
  [PDD_MALL_INFO_GROUP_REMOVE_STORE_GET]: PddMallInfoGroupRemoveStoreGetRequestInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST]: PddMallInfoStoreCreatePostRequestInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST_NOPOI]: PddMallInfoStoreCreatePostNopoiRequestInterface;
  [PDD_MALL_INFO_STORE_DELETE_POST]: PddMallInfoStoreDeletePostRequestInterface;
  [PDD_MALL_INFO_STORE_GET]: PddMallInfoStoreGetRequestInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST]: PddMallInfoStoreUpdatePostRequestInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI]: PddMallInfoStoreUpdatePostNopoiRequestInterface;
  [PDD_QRPAY_PAYEE_REGISTER]: PddQrpayPayeeRegisterRequestInterface;
  [PDD_SMS_ADD_CROWD]: PddSmsAddCrowdRequestInterface;
  [PDD_SMS_CREATE_CUSTOM_TEMPLATE]: PddSmsCreateCustomTemplateRequestInterface;
  [PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY]: PddSmsCrowdsPeopleNumberQueryRequestInterface;
  [PDD_SMS_CROWDS_QUERY]: PddSmsCrowdsQueryRequestInterface;
  [PDD_SMS_CUSTOM_SETTING]: PddSmsCustomSettingRequestInterface;
  [PDD_SMS_CUSTOM_TEMPLATE_QUERY]: PddSmsCustomTemplateQueryRequestInterface;
  [PDD_SMS_REMAIN_DETAIL_QUERY]: PddSmsRemainDetailQueryRequestInterface;
  [PDD_SMS_REMAIN_SETTING]: PddSmsRemainSettingRequestInterface;
  [PDD_SMS_REMAIN_SETTING_DETAIL_QUERY]: PddSmsRemainSettingDetailQueryRequestInterface;
  [PDD_SMS_SELL_DELETING]: PddSmsSellDeletingRequestInterface;
  [PDD_SMS_SELL_RECORD_LIST_QUERY]: PddSmsSellRecordListQueryRequestInterface;
  [PDD_SMS_SELL_SETTING]: PddSmsSellSettingRequestInterface;
  [PDD_SMS_SELL_SETTING_DETAIL_QUERY]: PddSmsSellSettingDetailQueryRequestInterface;
  [PDD_SMS_SELL_SETTING_RECORD_CANCEL]: PddSmsSellSettingRecordCancelRequestInterface;
  [PDD_SMS_SEND_RECORD_LIST_QUERY]: PddSmsSendRecordListQueryRequestInterface;
  [PDD_SMS_SHORT_STATISTIC_QUERY]: PddSmsShortStatisticQueryRequestInterface;
  [PDD_SMS_TEMPLATE_QUERY]: PddSmsTemplateQueryRequestInterface;
  [PDD_TIME_GET]: PddTimeGetRequestInterface;
  [PDD_UTIL_DIVIDE_BASE64_IMAGE]: PddUtilDivideBase64ImageRequestInterface;
  [PDD_EXPRESS_ADD_DEPOT]: PddExpressAddDepotRequestInterface;
  [PDD_EXPRESS_CHANGE_DEPOT_INFO]: PddExpressChangeDepotInfoRequestInterface;
  [PDD_EXPRESS_DEPOT_INFO_GET]: PddExpressDepotInfoGetRequestInterface;
  [PDD_EXPRESS_DEPOT_LIST_GET]: PddExpressDepotListGetRequestInterface;
  [PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET]: PddExpressMallDepotSimpleGetRequestInterface;
  [PDD_EXPRESS_SEARCH_DEPOT]: PddExpressSearchDepotRequestInterface;
  [PDD_STOCK_DEPOT_PRIORITY_LIST]: PddStockDepotPriorityListRequestInterface;
  [PDD_STOCK_DEPOT_PRIORITY_UPDATE]: PddStockDepotPriorityUpdateRequestInterface;
  [PDD_STOCK_GOODS_ID_TO_SKU_QUERY]: PddStockGoodsIdToSkuQueryRequestInterface;
  [PDD_STOCK_WARE_CREATE]: PddStockWareCreateRequestInterface;
  [PDD_STOCK_WARE_DELETE]: PddStockWareDeleteRequestInterface;
  [PDD_STOCK_WARE_DETAIL_QUERY]: PddStockWareDetailQueryRequestInterface;
  [PDD_STOCK_WARE_INFO_LIST]: PddStockWareInfoListRequestInterface;
  [PDD_STOCK_WARE_LIST]: PddStockWareListRequestInterface;
  [PDD_STOCK_WARE_MOVE]: PddStockWareMoveRequestInterface;
  [PDD_STOCK_WARE_SKU_UPDATE]: PddStockWareSkuUpdateRequestInterface;
  [PDD_STOCK_WARE_UPDATE]: PddStockWareUpdateRequestInterface;
  [PDD_PMC_USER_CANCEL]: PddPmcUserCancelRequestInterface;
  [PDD_PMC_USER_GET]: PddPmcUserGetRequestInterface;
  [PDD_PMC_USER_PERMIT]: PddPmcUserPermitRequestInterface;
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PddFinanceBalanceDailyBillUrlGetRequestInterface;
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: PddCloudprintCmdprintRenderRequestInterface;
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: PddCloudprintCustomaresGetRequestInterface;
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PddCloudprintStdtemplatesGetRequestInterface;
  [PDD_WAYBILL_CANCEL]: PddWaybillCancelRequestInterface;
  [PDD_WAYBILL_GET]: PddWaybillGetRequestInterface;
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: PddWaybillQueryByWaybillcodeRequestInterface;
  [PDD_WAYBILL_SEARCH]: PddWaybillSearchRequestInterface;
  [PDD_WAYBILL_UPDATE]: PddWaybillUpdateRequestInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD]: PddOpenMsgServiceQueryExpressMsgRecordRequestInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD]: PddOpenMsgServiceQueryMsgRecordRequestInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG]: PddOpenMsgServiceSendBatchMsgRequestInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG]: PddOpenMsgServiceSendExpressMsgRequestInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_MSG]: PddOpenMsgServiceSendMsgRequestInterface;
  [PDD_SERVICEMARKET_SETTLEMENTBILL_GET]: PddServicemarketSettlementbillGetRequestInterface;
  [PDD_SERVICEMARKET_TRADELIST_GET]: PddServicemarketTradelistGetRequestInterface;
  [PDD_VAS_ORDER_SEARCH]: PddVasOrderSearchRequestInterface;
  [PDD_MALL_TICKET_DETAIL]: PddMallTicketDetailRequestInterface;
  [PDD_MALL_TICKET_LIST]: PddMallTicketListRequestInterface;
  [PDD_MALL_TICKET_NOTIFY]: PddMallTicketNotifyRequestInterface;
  [PDD_SMS_DETAILBILL_PUSH]: PddSmsDetailbillPushRequestInterface;
  [PDD_SMS_VENDOR_COMPLAINT_CREATE]: PddSmsVendorComplaintCreateRequestInterface;
}
export interface PddCollectRootResponseInterface {
  [PDD_ERP_ORDER_SYNC]: PddErpOrderSyncResponseInterface;
  [PDD_ORDER_INFORMATION_GET]: PddOrderInformationGetResponseInterface;
  [PDD_ORDER_LIST_GET]: PddOrderListGetResponseInterface;
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PddOrderNumberListIncrementGetResponseInterface;
  [PDD_ORDER_STATUS_GET]: PddOrderStatusGetResponseInterface;
  [PDD_LOGISTICS_ADDRESS_GET]: PddLogisticsAddressGetResponseInterface;
  [PDD_LOGISTICS_COMPANIES_GET]: PddLogisticsCompaniesGetResponseInterface;
  [PDD_LOGISTICS_ONLINE_CREATE]: PddLogisticsOnlineCreateResponseInterface;
  [PDD_LOGISTICS_ONLINE_SEND]: PddLogisticsOnlineSendResponseInterface;
  [PDD_LOGISTICS_ONLINE_STATUS_QUERY]: PddLogisticsOnlineStatusQueryResponseInterface;
  [PDD_LOGISTICS_ORDERTRACE_GET]: PddLogisticsOrdertraceGetResponseInterface;
  [PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE]: PddNextoneLogisticsWarehouseUpdateResponseInterface;
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PddRdcPddgeniusSendgoodsCancelResponseInterface;
  [PDD_REFUND_ADDRESS_LIST_GET]: PddRefundAddressListGetResponseInterface;
  [PDD_REFUND_INFORMATION_GET]: PddRefundInformationGetResponseInterface;
  [PDD_REFUND_LIST_INCREMENT_GET]: PddRefundListIncrementGetResponseInterface;
  [PDD_REFUND_STATUS_CHECK]: PddRefundStatusCheckResponseInterface;
  [PDD_VIRTUAL_GAME_SERVER_QUERY]: PddVirtualGameServerQueryResponseInterface;
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PddVirtualMobileChargeNotifyResponseInterface;
  [PDD_AD_BALANCE_GET]: PddAdBalanceGetResponseInterface;
  [PDD_AD_BID_QUERY_PROFILE]: PddAdBidQueryProfileResponseInterface;
  [PDD_AD_CAN_CREATE_PLAN]: PddAdCanCreatePlanResponseInterface;
  [PDD_AD_CHART_BYKEYWORD_GET]: PddAdChartBykeywordGetResponseInterface;
  [PDD_AD_CREATE_LOCATION_BID]: PddAdCreateLocationBidResponseInterface;
  [PDD_AD_CREATE_UNIT_BID]: PddAdCreateUnitBidResponseInterface;
  [PDD_AD_CREATIVE_CREATE]: PddAdCreativeCreateResponseInterface;
  [PDD_AD_CREATIVE_DELETE]: PddAdCreativeDeleteResponseInterface;
  [PDD_AD_CREATIVE_HISTORY_REPORT_GET]: PddAdCreativeHistoryReportGetResponseInterface;
  [PDD_AD_CREATIVE_QUERY]: PddAdCreativeQueryResponseInterface;
  [PDD_AD_CREATIVE_REPORT_GET]: PddAdCreativeReportGetResponseInterface;
  [PDD_AD_CREATIVE_UPDATE]: PddAdCreativeUpdateResponseInterface;
  [PDD_AD_DELETE_BID]: PddAdDeleteBidResponseInterface;
  [PDD_AD_DELETE_LOCATION_BID]: PddAdDeleteLocationBidResponseInterface;
  [PDD_AD_HISTORY_KEYWORD_REPORT_GET]: PddAdHistoryKeywordReportGetResponseInterface;
  [PDD_AD_HISTORY_PLAN_REPORT_GET]: PddAdHistoryPlanReportGetResponseInterface;
  [PDD_AD_HISTORY_REPORT_GET]: PddAdHistoryReportGetResponseInterface;
  [PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET]: PddAdHistoryRtKeywordReportGetResponseInterface;
  [PDD_AD_HISTORY_RT_PLAN_REPORT_GET]: PddAdHistoryRtPlanReportGetResponseInterface;
  [PDD_AD_HISTORY_RT_REPORT_GET]: PddAdHistoryRtReportGetResponseInterface;
  [PDD_AD_HISTORY_RT_UNIT_REPORT_GET]: PddAdHistoryRtUnitReportGetResponseInterface;
  [PDD_AD_HISTORY_UNIT_REPORT_GET]: PddAdHistoryUnitReportGetResponseInterface;
  [PDD_AD_KEYWORD_CREATE]: PddAdKeywordCreateResponseInterface;
  [PDD_AD_KEYWORD_DAILY_REPORT]: PddAdKeywordDailyReportResponseInterface;
  [PDD_AD_KEYWORD_DELETE]: PddAdKeywordDeleteResponseInterface;
  [PDD_AD_KEYWORD_RCOMMENDED_GET]: PddAdKeywordRcommendedGetResponseInterface;
  [PDD_AD_KEYWORD_RELEVANCE_GET]: PddAdKeywordRelevanceGetResponseInterface;
  [PDD_AD_KEYWORD_UPDATE]: PddAdKeywordUpdateResponseInterface;
  [PDD_AD_PLAN_CREATE]: PddAdPlanCreateResponseInterface;
  [PDD_AD_PLAN_DELETE]: PddAdPlanDeleteResponseInterface;
  [PDD_AD_PLAN_DISCOUNT_UPDATE]: PddAdPlanDiscountUpdateResponseInterface;
  [PDD_AD_PLAN_INFO_LIST_GET]: PddAdPlanInfoListGetResponseInterface;
  [PDD_AD_PLAN_MAX_COST_UPDATE]: PddAdPlanMaxCostUpdateResponseInterface;
  [PDD_AD_PLAN_NAME_UPDATE]: PddAdPlanNameUpdateResponseInterface;
  [PDD_AD_PLAN_OPT_STATUS_UPDATE]: PddAdPlanOptStatusUpdateResponseInterface;
  [PDD_AD_QUERY_BID_LIST]: PddAdQueryBidListResponseInterface;
  [PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT]: PddAdQueryLocationBidHistoryReportResponseInterface;
  [PDD_AD_QUERY_LOCATION_BID_LIST]: PddAdQueryLocationBidListResponseInterface;
  [PDD_AD_QUERY_LOCATION_BID_PV_LIST]: PddAdQueryLocationBidPvListResponseInterface;
  [PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT]: PddAdQueryUnitBidHistoryReportResponseInterface;
  [PDD_AD_UNIT_CREATE]: PddAdUnitCreateResponseInterface;
  [PDD_AD_UNIT_DELETE]: PddAdUnitDeleteResponseInterface;
  [PDD_AD_UNIT_GET_BY_PLAN_ID]: PddAdUnitGetByPlanIdResponseInterface;
  [PDD_AD_UNIT_OPT_STATUS_UPDATE]: PddAdUnitOptStatusUpdateResponseInterface;
  [PDD_AD_UPDATE_BID]: PddAdUpdateBidResponseInterface;
  [PDD_AD_UPDATE_LOCATION_BID]: PddAdUpdateLocationBidResponseInterface;
  [PDD_DELETE_DRAFT_COMMIT]: PddDeleteDraftCommitResponseInterface;
  [PDD_DELETE_GOODS_COMMIT]: PddDeleteGoodsCommitResponseInterface;
  [PDD_GOODS_ADD]: PddGoodsAddResponseInterface;
  [PDD_GOODS_AUTHORIZATION_CATS]: PddGoodsAuthorizationCatsResponseInterface;
  [PDD_GOODS_CAT_TEMPLATE_GET]: PddGoodsCatTemplateGetResponseInterface;
  [PDD_GOODS_CATS_GET]: PddGoodsCatsGetResponseInterface;
  [PDD_GOODS_COMMIT_DETAIL_GET]: PddGoodsCommitDetailGetResponseInterface;
  [PDD_GOODS_COMMIT_LIST_GET]: PddGoodsCommitListGetResponseInterface;
  [PDD_GOODS_COMMIT_STATUS_GET]: PddGoodsCommitStatusGetResponseInterface;
  [PDD_GOODS_COUNTRY_GET]: PddGoodsCountryGetResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CHANGE]: PddGoodsCpsMallUnitChangeResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CREATE]: PddGoodsCpsMallUnitCreateResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_PAUSE]: PddGoodsCpsMallUnitPauseResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_QUERY]: PddGoodsCpsMallUnitQueryResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_RESUME]: PddGoodsCpsMallUnitResumeResponseInterface;
  [PDD_GOODS_CPS_UNIT_CHANGE]: PddGoodsCpsUnitChangeResponseInterface;
  [PDD_GOODS_CPS_UNIT_CREATE]: PddGoodsCpsUnitCreateResponseInterface;
  [PDD_GOODS_CPS_UNIT_DELETE]: PddGoodsCpsUnitDeleteResponseInterface;
  [PDD_GOODS_CPS_UNIT_QUERY]: PddGoodsCpsUnitQueryResponseInterface;
  [PDD_GOODS_DETAIL_GET]: PddGoodsDetailGetResponseInterface;
  [PDD_GOODS_EDIT_GOODS_COMMIT]: PddGoodsEditGoodsCommitResponseInterface;
  [PDD_GOODS_GET_RELATION]: PddGoodsGetRelationResponseInterface;
  [PDD_GOODS_IMAGE_UPLOAD]: PddGoodsImageUploadResponseInterface;
  [PDD_GOODS_INFORMATION_GET]: PddGoodsInformationGetResponseInterface;
  [PDD_GOODS_INFORMATION_UPDATE]: PddGoodsInformationUpdateResponseInterface;
  [PDD_GOODS_LATEST_COMMIT_STATUS_GET]: PddGoodsLatestCommitStatusGetResponseInterface;
  [PDD_GOODS_LIST_GET]: PddGoodsListGetResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE]: PddGoodsLogisticsSerTemplateCreateResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE]: PddGoodsLogisticsSerTemplateDeleteResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL]: PddGoodsLogisticsSerTemplateDetailResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST]: PddGoodsLogisticsSerTemplateListResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE]: PddGoodsLogisticsSerTemplateUpdateResponseInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_CREATE]: PddGoodsLogisticsTemplateCreateResponseInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_GET]: PddGoodsLogisticsTemplateGetResponseInterface;
  [PDD_GOODS_OPT_GET]: PddGoodsOptGetResponseInterface;
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PddGoodsOuterCatMappingGetResponseInterface;
  [PDD_GOODS_QUANTITY_UPDATE]: PddGoodsQuantityUpdateResponseInterface;
  [PDD_GOODS_RELATION_SET]: PddGoodsRelationSetResponseInterface;
  [PDD_GOODS_SALE_STATUS_SET]: PddGoodsSaleStatusSetResponseInterface;
  [PDD_GOODS_SKU_PRICE_UPDATE]: PddGoodsSkuPriceUpdateResponseInterface;
  [PDD_GOODS_SPEC_GET]: PddGoodsSpecGetResponseInterface;
  [PDD_GOODS_SPEC_ID_GET]: PddGoodsSpecIdGetResponseInterface;
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PddGoodsSubmitGoodsCommitResponseInterface;
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: PddGoodsTemplatePropertyValueSearchResponseInterface;
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: PddGooodsSkuMeasurementListResponseInterface;
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: PddOneExpressCostTemplateResponseInterface;
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PddDdkCmsPromUrlGenerateResponseInterface;
  [PDD_DDK_COUPON_INFO_QUERY]: PddDdkCouponInfoQueryResponseInterface;
  [PDD_DDK_FINANCE_CPA_QUERY]: PddDdkFinanceCpaQueryResponseInterface;
  [PDD_DDK_GOODS_BASIC_INFO_GET]: PddDdkGoodsBasicInfoGetResponseInterface;
  [PDD_DDK_GOODS_DETAIL]: PddDdkGoodsDetailResponseInterface;
  [PDD_DDK_GOODS_PID_GENERATE]: PddDdkGoodsPidGenerateResponseInterface;
  [PDD_DDK_GOODS_PID_QUERY]: PddDdkGoodsPidQueryResponseInterface;
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PddDdkGoodsPromotionUrlGenerateResponseInterface;
  [PDD_DDK_GOODS_RECOMMEND_GET]: PddDdkGoodsRecommendGetResponseInterface;
  [PDD_DDK_GOODS_SEARCH]: PddDdkGoodsSearchResponseInterface;
  [PDD_DDK_GOODS_UNIT_QUERY]: PddDdkGoodsUnitQueryResponseInterface;
  [PDD_DDK_GOODS_ZS_UNIT_URL_GEN]: PddDdkGoodsZsUnitUrlGenResponseInterface;
  [PDD_DDK_LOTTERY_URL_GEN]: PddDdkLotteryUrlGenResponseInterface;
  [PDD_DDK_MALL_GOODS_LIST_GET]: PddDdkMallGoodsListGetResponseInterface;
  [PDD_DDK_MALL_URL_GEN]: PddDdkMallUrlGenResponseInterface;
  [PDD_DDK_MERCHANT_LIST_GET]: PddDdkMerchantListGetResponseInterface;
  [PDD_DDK_ORDER_DETAIL_GET]: PddDdkOrderDetailGetResponseInterface;
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PddDdkOrderListIncrementGetResponseInterface;
  [PDD_DDK_ORDER_LIST_RANGE_GET]: PddDdkOrderListRangeGetResponseInterface;
  [PDD_DDK_RESOURCE_URL_GEN]: PddDdkResourceUrlGenResponseInterface;
  [PDD_DDK_RP_PROM_URL_GENERATE]: PddDdkRpPromUrlGenerateResponseInterface;
  [PDD_DDK_THEME_GOODS_SEARCH]: PddDdkThemeGoodsSearchResponseInterface;
  [PDD_DDK_THEME_LIST_GET]: PddDdkThemeListGetResponseInterface;
  [PDD_DDK_THEME_PROM_URL_GENERATE]: PddDdkThemePromUrlGenerateResponseInterface;
  [PDD_DDK_TOP_GOODS_LIST_QUERY]: PddDdkTopGoodsListQueryResponseInterface;
  [PDD_DDK_WEAPP_QRCODE_URL_GEN]: PddDdkWeappQrcodeUrlGenResponseInterface;
  [PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET]: PddDdkAllOrderListIncrementGetResponseInterface;
  [PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE]: PddDdkOauthCmsPromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PID_GENERATE]: PddDdkOauthGoodsPidGenerateResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PID_QUERY]: PddDdkOauthGoodsPidQueryResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PddDdkOauthGoodsPromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_GOODS_RECOMMEND_GET]: PddDdkOauthGoodsRecommendGetResponseInterface;
  [PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN]: PddDdkOauthGoodsZsUnitUrlGenResponseInterface;
  [PDD_DDK_OAUTH_LOTTERY_URL_GEN]: PddDdkOauthLotteryUrlGenResponseInterface;
  [PDD_DDK_OAUTH_MALL_URL_GEN]: PddDdkOauthMallUrlGenResponseInterface;
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PddDdkOauthOrderDetailGetResponseInterface;
  [PDD_DDK_OAUTH_RESOURCE_URL_GEN]: PddDdkOauthResourceUrlGenResponseInterface;
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: PddDdkOauthRpPromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE]: PddDdkOauthThemePromUrlGenerateResponseInterface;
  [PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY]: PddDdkOauthTopGoodsListQueryResponseInterface;
  [PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET]: PddLogisticsCsHistoryMessageGetResponseInterface;
  [PDD_LOGISTICS_CS_MESSAGE_SEND]: PddLogisticsCsMessageSendResponseInterface;
  [PDD_LOGISTICS_CS_SESSION_CLOSE]: PddLogisticsCsSessionCloseResponseInterface;
  [PDD_LOGISTICS_CS_SESSION_START]: PddLogisticsCsSessionStartResponseInterface;
  [PDD_LOGISTICS_TICKET_GET]: PddLogisticsTicketGetResponseInterface;
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PddLogisticsTicketImageUploadResponseInterface;
  [PDD_LOGISTICS_TICKET_NOTIFY]: PddLogisticsTicketNotifyResponseInterface;
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PddLogisticsTicketProblemTypeGetResponseInterface;
  [PDD_PROMOTION_COUPON_CLOSE]: PddPromotionCouponCloseResponseInterface;
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PddPromotionCouponQuantityAddResponseInterface;
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PddPromotionGoodsCouponCreateResponseInterface;
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PddPromotionGoodsCouponListGetResponseInterface;
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PddPromotionHomeCouponCreateResponseInterface;
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PddPromotionMerchantCouponListGetResponseInterface;
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PddVoucherAppointmentInfoSendResponseInterface;
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PddVoucherOtaCardVerificationResponseInterface;
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PddVoucherPhysicalGoodsSendResponseInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PddVoucherVirtualCardVerificationResponseInterface;
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PddVoucherVoucherComplainResponseInterface;
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PddVoucherVoucherInfoSendResponseInterface;
  [PDD_INVOICE_APPLICATION_QUERY]: PddInvoiceApplicationQueryResponseInterface;
  [PDD_INVOICE_APPLICATION_UPDATE]: PddInvoiceApplicationUpdateResponseInterface;
  [PDD_INVOICE_DETAIL_INVALID]: PddInvoiceDetailInvalidResponseInterface;
  [PDD_INVOICE_DETAIL_QUERY]: PddInvoiceDetailQueryResponseInterface;
  [PDD_INVOICE_DETAIL_UPLOAD]: PddInvoiceDetailUploadResponseInterface;
  [PDD_MALL_CPS_PROTOCOL_STATUS_QUERY]: PddMallCpsProtocolStatusQueryResponseInterface;
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PddMallInfoBondedWarehouseGetResponseInterface;
  [PDD_MALL_INFO_GET]: PddMallInfoGetResponseInterface;
  [PDD_MALL_INFO_GROUP_ADD_STORE_POST]: PddMallInfoGroupAddStorePostResponseInterface;
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: PddMallInfoGroupListStoreGetResponseInterface;
  [PDD_MALL_INFO_GROUP_REMOVE_STORE_GET]: PddMallInfoGroupRemoveStoreGetResponseInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST]: PddMallInfoStoreCreatePostResponseInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST_NOPOI]: PddMallInfoStoreCreatePostNopoiResponseInterface;
  [PDD_MALL_INFO_STORE_DELETE_POST]: PddMallInfoStoreDeletePostResponseInterface;
  [PDD_MALL_INFO_STORE_GET]: PddMallInfoStoreGetResponseInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST]: PddMallInfoStoreUpdatePostResponseInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI]: PddMallInfoStoreUpdatePostNopoiResponseInterface;
  [PDD_QRPAY_PAYEE_REGISTER]: PddQrpayPayeeRegisterResponseInterface;
  [PDD_SMS_ADD_CROWD]: PddSmsAddCrowdResponseInterface;
  [PDD_SMS_CREATE_CUSTOM_TEMPLATE]: PddSmsCreateCustomTemplateResponseInterface;
  [PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY]: PddSmsCrowdsPeopleNumberQueryResponseInterface;
  [PDD_SMS_CROWDS_QUERY]: PddSmsCrowdsQueryResponseInterface;
  [PDD_SMS_CUSTOM_SETTING]: PddSmsCustomSettingResponseInterface;
  [PDD_SMS_CUSTOM_TEMPLATE_QUERY]: PddSmsCustomTemplateQueryResponseInterface;
  [PDD_SMS_REMAIN_DETAIL_QUERY]: PddSmsRemainDetailQueryResponseInterface;
  [PDD_SMS_REMAIN_SETTING]: PddSmsRemainSettingResponseInterface;
  [PDD_SMS_REMAIN_SETTING_DETAIL_QUERY]: PddSmsRemainSettingDetailQueryResponseInterface;
  [PDD_SMS_SELL_DELETING]: PddSmsSellDeletingResponseInterface;
  [PDD_SMS_SELL_RECORD_LIST_QUERY]: PddSmsSellRecordListQueryResponseInterface;
  [PDD_SMS_SELL_SETTING]: PddSmsSellSettingResponseInterface;
  [PDD_SMS_SELL_SETTING_DETAIL_QUERY]: PddSmsSellSettingDetailQueryResponseInterface;
  [PDD_SMS_SELL_SETTING_RECORD_CANCEL]: PddSmsSellSettingRecordCancelResponseInterface;
  [PDD_SMS_SEND_RECORD_LIST_QUERY]: PddSmsSendRecordListQueryResponseInterface;
  [PDD_SMS_SHORT_STATISTIC_QUERY]: PddSmsShortStatisticQueryResponseInterface;
  [PDD_SMS_TEMPLATE_QUERY]: PddSmsTemplateQueryResponseInterface;
  [PDD_TIME_GET]: PddTimeGetResponseInterface;
  [PDD_UTIL_DIVIDE_BASE64_IMAGE]: PddUtilDivideBase64ImageResponseInterface;
  [PDD_EXPRESS_ADD_DEPOT]: PddExpressAddDepotResponseInterface;
  [PDD_EXPRESS_CHANGE_DEPOT_INFO]: PddExpressChangeDepotInfoResponseInterface;
  [PDD_EXPRESS_DEPOT_INFO_GET]: PddExpressDepotInfoGetResponseInterface;
  [PDD_EXPRESS_DEPOT_LIST_GET]: PddExpressDepotListGetResponseInterface;
  [PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET]: PddExpressMallDepotSimpleGetResponseInterface;
  [PDD_EXPRESS_SEARCH_DEPOT]: PddExpressSearchDepotResponseInterface;
  [PDD_STOCK_DEPOT_PRIORITY_LIST]: PddStockDepotPriorityListResponseInterface;
  [PDD_STOCK_DEPOT_PRIORITY_UPDATE]: PddStockDepotPriorityUpdateResponseInterface;
  [PDD_STOCK_GOODS_ID_TO_SKU_QUERY]: PddStockGoodsIdToSkuQueryResponseInterface;
  [PDD_STOCK_WARE_CREATE]: PddStockWareCreateResponseInterface;
  [PDD_STOCK_WARE_DELETE]: PddStockWareDeleteResponseInterface;
  [PDD_STOCK_WARE_DETAIL_QUERY]: PddStockWareDetailQueryResponseInterface;
  [PDD_STOCK_WARE_INFO_LIST]: PddStockWareInfoListResponseInterface;
  [PDD_STOCK_WARE_LIST]: PddStockWareListResponseInterface;
  [PDD_STOCK_WARE_MOVE]: PddStockWareMoveResponseInterface;
  [PDD_STOCK_WARE_SKU_UPDATE]: PddStockWareSkuUpdateResponseInterface;
  [PDD_STOCK_WARE_UPDATE]: PddStockWareUpdateResponseInterface;
  [PDD_PMC_USER_CANCEL]: PddPmcUserCancelResponseInterface;
  [PDD_PMC_USER_GET]: PddPmcUserGetResponseInterface;
  [PDD_PMC_USER_PERMIT]: PddPmcUserPermitResponseInterface;
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PddFinanceBalanceDailyBillUrlGetResponseInterface;
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: PddCloudprintCmdprintRenderResponseInterface;
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: PddCloudprintCustomaresGetResponseInterface;
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PddCloudprintStdtemplatesGetResponseInterface;
  [PDD_WAYBILL_CANCEL]: PddWaybillCancelResponseInterface;
  [PDD_WAYBILL_GET]: PddWaybillGetResponseInterface;
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: PddWaybillQueryByWaybillcodeResponseInterface;
  [PDD_WAYBILL_SEARCH]: PddWaybillSearchResponseInterface;
  [PDD_WAYBILL_UPDATE]: PddWaybillUpdateResponseInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD]: PddOpenMsgServiceQueryExpressMsgRecordResponseInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD]: PddOpenMsgServiceQueryMsgRecordResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG]: PddOpenMsgServiceSendBatchMsgResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG]: PddOpenMsgServiceSendExpressMsgResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_MSG]: PddOpenMsgServiceSendMsgResponseInterface;
  [PDD_SERVICEMARKET_SETTLEMENTBILL_GET]: PddServicemarketSettlementbillGetResponseInterface;
  [PDD_SERVICEMARKET_TRADELIST_GET]: PddServicemarketTradelistGetResponseInterface;
  [PDD_VAS_ORDER_SEARCH]: PddVasOrderSearchResponseInterface;
  [PDD_MALL_TICKET_DETAIL]: PddMallTicketDetailResponseInterface;
  [PDD_MALL_TICKET_LIST]: PddMallTicketListResponseInterface;
  [PDD_MALL_TICKET_NOTIFY]: PddMallTicketNotifyResponseInterface;
  [PDD_SMS_DETAILBILL_PUSH]: PddSmsDetailbillPushResponseInterface;
  [PDD_SMS_VENDOR_COMPLAINT_CREATE]: PddSmsVendorComplaintCreateResponseInterface;
}
export interface PddCollectShortResponseInterface {
  [PDD_ERP_ORDER_SYNC]: PddErpOrderSyncResponseInterface;
  [PDD_ORDER_INFORMATION_GET]: PddOrderInformationGetOrderInfoGetResponseResponseInterface;
  [PDD_ORDER_LIST_GET]: PddOrderListGetOrderListGetResponseResponseInterface;
  [PDD_ORDER_NUMBER_LIST_INCREMENT_GET]: PddOrderNumberListIncrementGetOrderSnIncrementGetResponseResponseInterface;
  [PDD_ORDER_STATUS_GET]: PddOrderStatusGetOrderStatusGetResponseResponseInterface;
  [PDD_LOGISTICS_ADDRESS_GET]: PddLogisticsAddressGetLogisticsAddressGetResponseResponseInterface;
  [PDD_LOGISTICS_COMPANIES_GET]: PddLogisticsCompaniesGetLogisticsCompaniesGetResponseResponseInterface;
  [PDD_LOGISTICS_ONLINE_CREATE]: PddLogisticsOnlineCreateLogisticsOnlineCreateResponseResponseInterface;
  [PDD_LOGISTICS_ONLINE_SEND]: PddLogisticsOnlineSendLogisticsOnlineSendResponseResponseInterface;
  [PDD_LOGISTICS_ONLINE_STATUS_QUERY]: PddLogisticsOnlineStatusQueryLogisticsOnlineStatusQueryResponseResponseInterface;
  [PDD_LOGISTICS_ORDERTRACE_GET]: PddLogisticsOrdertraceGetResponseInterface;
  [PDD_NEXTONE_LOGISTICS_WAREHOUSE_UPDATE]: PddNextoneLogisticsWarehouseUpdateResponseInterface;
  [PDD_RDC_PDDGENIUS_SENDGOODS_CANCEL]: PddRdcPddgeniusSendgoodsCancelRdcPddgeniusSendgoodsCancelResponseResponseInterface;
  [PDD_REFUND_ADDRESS_LIST_GET]: PddRefundAddressListGetRefundAddressListGetResponseResponseInterface;
  [PDD_REFUND_INFORMATION_GET]: PddRefundInformationGetResponseInterface;
  [PDD_REFUND_LIST_INCREMENT_GET]: PddRefundListIncrementGetRefundIncrementGetResponseResponseInterface;
  [PDD_REFUND_STATUS_CHECK]: PddRefundStatusCheckRefundStatusCheckResponseResponseInterface;
  [PDD_VIRTUAL_GAME_SERVER_QUERY]: PddVirtualGameServerQueryGameServerQueryResponseResponseInterface;
  [PDD_VIRTUAL_MOBILE_CHARGE_NOTIFY]: PddVirtualMobileChargeNotifyMobileChargeNotifyResponseResponseInterface;
  [PDD_AD_BALANCE_GET]: PddAdBalanceGetAdBalanceGetResponseResponseInterface;
  [PDD_AD_BID_QUERY_PROFILE]: PddAdBidQueryProfileOpenApiResponseResponseInterface;
  [PDD_AD_CAN_CREATE_PLAN]: PddAdCanCreatePlanAdPlanCreateResponseResponseInterface;
  [PDD_AD_CHART_BYKEYWORD_GET]: PddAdChartBykeywordGetAdKeywordDailyReportResponseResponseInterface;
  [PDD_AD_CREATE_LOCATION_BID]: PddAdCreateLocationBidOpenApiResponseResponseInterface;
  [PDD_AD_CREATE_UNIT_BID]: PddAdCreateUnitBidOpenApiResponseResponseInterface;
  [PDD_AD_CREATIVE_CREATE]: PddAdCreativeCreateOpenApiResponseResponseInterface;
  [PDD_AD_CREATIVE_DELETE]: PddAdCreativeDeleteResponseInterface;
  [PDD_AD_CREATIVE_HISTORY_REPORT_GET]: PddAdCreativeHistoryReportGetOpenApiResponseResponseInterface;
  [PDD_AD_CREATIVE_QUERY]: PddAdCreativeQueryOpenApiResponseResponseInterface;
  [PDD_AD_CREATIVE_REPORT_GET]: PddAdCreativeReportGetAdCreativeReportGetResponseResponseInterface;
  [PDD_AD_CREATIVE_UPDATE]: PddAdCreativeUpdateResponseInterface;
  [PDD_AD_DELETE_BID]: PddAdDeleteBidOpenApiResponseResponseInterface;
  [PDD_AD_DELETE_LOCATION_BID]: PddAdDeleteLocationBidOpenApiResponseResponseInterface;
  [PDD_AD_HISTORY_KEYWORD_REPORT_GET]: PddAdHistoryKeywordReportGetAdKeywordHistoryReportGetResponseResponseInterface;
  [PDD_AD_HISTORY_PLAN_REPORT_GET]: PddAdHistoryPlanReportGetAdPlanHistoryReportGetResponseResponseInterface;
  [PDD_AD_HISTORY_REPORT_GET]: PddAdHistoryReportGetAdMallHistoryReportResponseResponseInterface;
  [PDD_AD_HISTORY_RT_KEYWORD_REPORT_GET]: PddAdHistoryRtKeywordReportGetAdKeywordRealTimeReportResponseResponseInterface;
  [PDD_AD_HISTORY_RT_PLAN_REPORT_GET]: PddAdHistoryRtPlanReportGetAdPlanRealTimeReportResponseResponseInterface;
  [PDD_AD_HISTORY_RT_REPORT_GET]: PddAdHistoryRtReportGetAdMallRealTimeReportResponseResponseInterface;
  [PDD_AD_HISTORY_RT_UNIT_REPORT_GET]: PddAdHistoryRtUnitReportGetAdUnitRealTimeReportResponseResponseInterface;
  [PDD_AD_HISTORY_UNIT_REPORT_GET]: PddAdHistoryUnitReportGetAdUnitHistoryReportGetResponseResponseInterface;
  [PDD_AD_KEYWORD_CREATE]: PddAdKeywordCreateAdKeywordCreateResponseResponseInterface;
  [PDD_AD_KEYWORD_DAILY_REPORT]: PddAdKeywordDailyReportResponseInterface;
  [PDD_AD_KEYWORD_DELETE]: PddAdKeywordDeleteAdKeywordDeleteResponseResponseInterface;
  [PDD_AD_KEYWORD_RCOMMENDED_GET]: PddAdKeywordRcommendedGetAdRecommendedKeywordListResponseResponseInterface;
  [PDD_AD_KEYWORD_RELEVANCE_GET]: PddAdKeywordRelevanceGetAdKeywordRelevanceListResponseResponseInterface;
  [PDD_AD_KEYWORD_UPDATE]: PddAdKeywordUpdateAdKeywordUpdateResponseResponseInterface;
  [PDD_AD_PLAN_CREATE]: PddAdPlanCreateAdPlanCreateResponseResponseInterface;
  [PDD_AD_PLAN_DELETE]: PddAdPlanDeleteAdPlanDeleteResponseResponseInterface;
  [PDD_AD_PLAN_DISCOUNT_UPDATE]: PddAdPlanDiscountUpdateResponseInterface;
  [PDD_AD_PLAN_INFO_LIST_GET]: PddAdPlanInfoListGetAdPlanInfoListResponseResponseInterface;
  [PDD_AD_PLAN_MAX_COST_UPDATE]: PddAdPlanMaxCostUpdateAdPlanMaxCostUpdateResponseResponseInterface;
  [PDD_AD_PLAN_NAME_UPDATE]: PddAdPlanNameUpdateAdPlanNameUpdateResponseResponseInterface;
  [PDD_AD_PLAN_OPT_STATUS_UPDATE]: PddAdPlanOptStatusUpdateAdPlanOptStatusUpdateResponseResponseInterface;
  [PDD_AD_QUERY_BID_LIST]: PddAdQueryBidListOpenApiResponseResponseInterface;
  [PDD_AD_QUERY_LOCATION_BID_HISTORY_REPORT]: PddAdQueryLocationBidHistoryReportOpenApiResponseResponseInterface;
  [PDD_AD_QUERY_LOCATION_BID_LIST]: PddAdQueryLocationBidListOpenApiResponseResponseInterface;
  [PDD_AD_QUERY_LOCATION_BID_PV_LIST]: PddAdQueryLocationBidPvListOpenApiResponseResponseInterface;
  [PDD_AD_QUERY_UNIT_BID_HISTORY_REPORT]: PddAdQueryUnitBidHistoryReportOpenApiResponseResponseInterface;
  [PDD_AD_UNIT_CREATE]: PddAdUnitCreateAdUnitCreateResponseResponseInterface;
  [PDD_AD_UNIT_DELETE]: PddAdUnitDeleteAdUnitDeleteResponseResponseInterface;
  [PDD_AD_UNIT_GET_BY_PLAN_ID]: PddAdUnitGetByPlanIdAdUnitBaseInfoListResponseResponseInterface;
  [PDD_AD_UNIT_OPT_STATUS_UPDATE]: PddAdUnitOptStatusUpdateAdUnitOptStatusUpdateResponseResponseInterface;
  [PDD_AD_UPDATE_BID]: PddAdUpdateBidOpenApiResponseResponseInterface;
  [PDD_AD_UPDATE_LOCATION_BID]: PddAdUpdateLocationBidOpenApiResponseResponseInterface;
  [PDD_DELETE_DRAFT_COMMIT]: PddDeleteDraftCommitResponseInterface;
  [PDD_DELETE_GOODS_COMMIT]: PddDeleteGoodsCommitResponseInterface;
  [PDD_GOODS_ADD]: PddGoodsAddGoodsAddResponseResponseInterface;
  [PDD_GOODS_AUTHORIZATION_CATS]: PddGoodsAuthorizationCatsGoodsAuthCatsGetResponseResponseInterface;
  [PDD_GOODS_CAT_TEMPLATE_GET]: PddGoodsCatTemplateGetOpenApiResponseResponseInterface;
  [PDD_GOODS_CATS_GET]: PddGoodsCatsGetGoodsCatsGetResponseResponseInterface;
  [PDD_GOODS_COMMIT_DETAIL_GET]: PddGoodsCommitDetailGetGoodsCommitDetailResponseResponseInterface;
  [PDD_GOODS_COMMIT_LIST_GET]: PddGoodsCommitListGetGoodsCommitListGetResponseResponseInterface;
  [PDD_GOODS_COMMIT_STATUS_GET]: PddGoodsCommitStatusGetGoodsCommitStatusGetResponseResponseInterface;
  [PDD_GOODS_COUNTRY_GET]: PddGoodsCountryGetGoodsCountryGetResponseResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CHANGE]: PddGoodsCpsMallUnitChangeGoodsCpsMallUnitChangeResponseResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_CREATE]: PddGoodsCpsMallUnitCreateResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_PAUSE]: PddGoodsCpsMallUnitPauseGoodsCpsMallUnitQueryResponseResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_QUERY]: PddGoodsCpsMallUnitQueryGoodsCpsMallUnitQueryResponseResponseInterface;
  [PDD_GOODS_CPS_MALL_UNIT_RESUME]: PddGoodsCpsMallUnitResumeGoodsCpsMallUnitResumeResponseResponseInterface;
  [PDD_GOODS_CPS_UNIT_CHANGE]: PddGoodsCpsUnitChangeResponseInterface;
  [PDD_GOODS_CPS_UNIT_CREATE]: PddGoodsCpsUnitCreateResponseInterface;
  [PDD_GOODS_CPS_UNIT_DELETE]: PddGoodsCpsUnitDeleteGoodsCpsUnitDeleteResponseResponseInterface;
  [PDD_GOODS_CPS_UNIT_QUERY]: PddGoodsCpsUnitQueryResponseInterface;
  [PDD_GOODS_DETAIL_GET]: PddGoodsDetailGetGoodsDetailGetResponseResponseInterface;
  [PDD_GOODS_EDIT_GOODS_COMMIT]: PddGoodsEditGoodsCommitGoodsUpdateResponseResponseInterface;
  [PDD_GOODS_GET_RELATION]: PddGoodsGetRelationQueryGoodsRelationResponseResponseInterface;
  [PDD_GOODS_IMAGE_UPLOAD]: PddGoodsImageUploadGoodsImageUploadResponseResponseInterface;
  [PDD_GOODS_INFORMATION_GET]: PddGoodsInformationGetGoodsInfoGetResponseResponseInterface;
  [PDD_GOODS_INFORMATION_UPDATE]: PddGoodsInformationUpdateGoodsUpdateResponseResponseInterface;
  [PDD_GOODS_LATEST_COMMIT_STATUS_GET]: PddGoodsLatestCommitStatusGetGoodsLatestCommitStatusGetResponseResponseInterface;
  [PDD_GOODS_LIST_GET]: PddGoodsListGetGoodsListGetResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_CREATE]: PddGoodsLogisticsSerTemplateCreateGoodsLogisticsSerTemplateCreateResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DELETE]: PddGoodsLogisticsSerTemplateDeleteGoodsLogisticsSerTemplateDeleteResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_DETAIL]: PddGoodsLogisticsSerTemplateDetailGoodsLogisticsSerTemplateDetailResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_LIST]: PddGoodsLogisticsSerTemplateListGoodsLogisticsSerTemplateListResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_SER_TEMPLATE_UPDATE]: PddGoodsLogisticsSerTemplateUpdateGoodsLogisticsSerTemplateCreateResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_CREATE]: PddGoodsLogisticsTemplateCreateGoodsLogisticsTemplateCreateResponseResponseInterface;
  [PDD_GOODS_LOGISTICS_TEMPLATE_GET]: PddGoodsLogisticsTemplateGetGoodsLogisticsTemplateGetResponseResponseInterface;
  [PDD_GOODS_OPT_GET]: PddGoodsOptGetGoodsOptGetResponseResponseInterface;
  [PDD_GOODS_OUTER_CAT_MAPPING_GET]: PddGoodsOuterCatMappingGetOuterCatMappingGetResponseResponseInterface;
  [PDD_GOODS_QUANTITY_UPDATE]: PddGoodsQuantityUpdateGoodsQuantityUpdateResponseResponseInterface;
  [PDD_GOODS_RELATION_SET]: PddGoodsRelationSetGoodsRelationSetResponseResponseInterface;
  [PDD_GOODS_SALE_STATUS_SET]: PddGoodsSaleStatusSetGoodsSaleStatusSetResponseResponseInterface;
  [PDD_GOODS_SKU_PRICE_UPDATE]: PddGoodsSkuPriceUpdateGoodsUpdateSkuPriceResponseResponseInterface;
  [PDD_GOODS_SPEC_GET]: PddGoodsSpecGetGoodsSpecGetResponseResponseInterface;
  [PDD_GOODS_SPEC_ID_GET]: PddGoodsSpecIdGetGoodsSpecIdGetResponseResponseInterface;
  [PDD_GOODS_SUBMIT_GOODS_COMMIT]: PddGoodsSubmitGoodsCommitGoodsUpdateResponseResponseInterface;
  [PDD_GOODS_TEMPLATE_PROPERTY_VALUE_SEARCH]: PddGoodsTemplatePropertyValueSearchGoodsTemplatePropValSearchResponseResponseInterface;
  [PDD_GOOODS_SKU_MEASUREMENT_LIST]: PddGooodsSkuMeasurementListGooodsSkuMeasurementListResponseResponseInterface;
  [PDD_ONE_EXPRESS_COST_TEMPLATE]: PddOneExpressCostTemplateOneExpressCostTemplateResponseResponseInterface;
  [PDD_DDK_CMS_PROM_URL_GENERATE]: PddDdkCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_COUPON_INFO_QUERY]: PddDdkCouponInfoQueryDdkCouponInfoQueryResponseResponseInterface;
  [PDD_DDK_FINANCE_CPA_QUERY]: PddDdkFinanceCpaQueryFinanceCpaQueryResponseResponseInterface;
  [PDD_DDK_GOODS_BASIC_INFO_GET]: PddDdkGoodsBasicInfoGetGoodsBasicDetailResponseResponseInterface;
  [PDD_DDK_GOODS_DETAIL]: PddDdkGoodsDetailGoodsDetailResponseResponseInterface;
  [PDD_DDK_GOODS_PID_GENERATE]: PddDdkGoodsPidGeneratePIdGenerateResponseResponseInterface;
  [PDD_DDK_GOODS_PID_QUERY]: PddDdkGoodsPidQueryPIdQueryResponseResponseInterface;
  [PDD_DDK_GOODS_PROMOTION_URL_GENERATE]: PddDdkGoodsPromotionUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_GOODS_RECOMMEND_GET]: PddDdkGoodsRecommendGetGoodsBasicDetailResponseResponseInterface;
  [PDD_DDK_GOODS_SEARCH]: PddDdkGoodsSearchGoodsSearchResponseResponseInterface;
  [PDD_DDK_GOODS_UNIT_QUERY]: PddDdkGoodsUnitQueryDdkGoodsUnitQueryResponseResponseInterface;
  [PDD_DDK_GOODS_ZS_UNIT_URL_GEN]: PddDdkGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface;
  [PDD_DDK_LOTTERY_URL_GEN]: PddDdkLotteryUrlGenLotteryUrlResponseResponseInterface;
  [PDD_DDK_MALL_GOODS_LIST_GET]: PddDdkMallGoodsListGetGoodsInfoListResponseResponseInterface;
  [PDD_DDK_MALL_URL_GEN]: PddDdkMallUrlGenMallCouponGenerateUrlResponseResponseInterface;
  [PDD_DDK_MERCHANT_LIST_GET]: PddDdkMerchantListGetMerchantListResponseResponseInterface;
  [PDD_DDK_ORDER_DETAIL_GET]: PddDdkOrderDetailGetOrderDetailResponseResponseInterface;
  [PDD_DDK_ORDER_LIST_INCREMENT_GET]: PddDdkOrderListIncrementGetOrderListGetResponseResponseInterface;
  [PDD_DDK_ORDER_LIST_RANGE_GET]: PddDdkOrderListRangeGetOrderListGetResponseResponseInterface;
  [PDD_DDK_RESOURCE_URL_GEN]: PddDdkResourceUrlGenResourceUrlResponseResponseInterface;
  [PDD_DDK_RP_PROM_URL_GENERATE]: PddDdkRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_THEME_GOODS_SEARCH]: PddDdkThemeGoodsSearchThemeListGetResponseResponseInterface;
  [PDD_DDK_THEME_LIST_GET]: PddDdkThemeListGetThemeListGetResponseResponseInterface;
  [PDD_DDK_THEME_PROM_URL_GENERATE]: PddDdkThemePromUrlGenerateThemePromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_TOP_GOODS_LIST_QUERY]: PddDdkTopGoodsListQueryTopGoodsListGetResponseResponseInterface;
  [PDD_DDK_WEAPP_QRCODE_URL_GEN]: PddDdkWeappQrcodeUrlGenWeappQrcodeGenerateResponseResponseInterface;
  [PDD_DDK_ALL_ORDER_LIST_INCREMENT_GET]: PddDdkAllOrderListIncrementGetOrderListGetResponseResponseInterface;
  [PDD_DDK_OAUTH_CMS_PROM_URL_GENERATE]: PddDdkOauthCmsPromUrlGenerateCmsPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PID_GENERATE]: PddDdkOauthGoodsPidGeneratePIdGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PID_QUERY]: PddDdkOauthGoodsPidQueryPIdQueryResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_PROM_URL_GENERATE]: PddDdkOauthGoodsPromUrlGenerateGoodsPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_RECOMMEND_GET]: PddDdkOauthGoodsRecommendGetGoodsBasicDetailResponseResponseInterface;
  [PDD_DDK_OAUTH_GOODS_ZS_UNIT_URL_GEN]: PddDdkOauthGoodsZsUnitUrlGenGoodsZsUnitGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_LOTTERY_URL_GEN]: PddDdkOauthLotteryUrlGenLotteryUrlResponseResponseInterface;
  [PDD_DDK_OAUTH_MALL_URL_GEN]: PddDdkOauthMallUrlGenMallCouponGenerateUrlResponseResponseInterface;
  [PDD_DDK_OAUTH_ORDER_DETAIL_GET]: PddDdkOauthOrderDetailGetOrderDetailResponseResponseInterface;
  [PDD_DDK_OAUTH_RESOURCE_URL_GEN]: PddDdkOauthResourceUrlGenResourceUrlResponseResponseInterface;
  [PDD_DDK_OAUTH_RP_PROM_URL_GENERATE]: PddDdkOauthRpPromUrlGenerateRpPromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_THEME_PROM_URL_GENERATE]: PddDdkOauthThemePromUrlGenerateThemePromotionUrlGenerateResponseResponseInterface;
  [PDD_DDK_OAUTH_TOP_GOODS_LIST_QUERY]: PddDdkOauthTopGoodsListQueryTopGoodsListGetResponseResponseInterface;
  [PDD_LOGISTICS_CS_HISTORY_MESSAGE_GET]: PddLogisticsCsHistoryMessageGetLogisticsCsHistoryMessageGetResponseResponseInterface;
  [PDD_LOGISTICS_CS_MESSAGE_SEND]: PddLogisticsCsMessageSendLogisticsCsMessageSendResponseResponseInterface;
  [PDD_LOGISTICS_CS_SESSION_CLOSE]: PddLogisticsCsSessionCloseLogisticsCsSessionCloseResponseResponseInterface;
  [PDD_LOGISTICS_CS_SESSION_START]: PddLogisticsCsSessionStartLogisticsCsSessionStartResponseResponseInterface;
  [PDD_LOGISTICS_TICKET_GET]: PddLogisticsTicketGetLogisticsTicketGetResponseResponseInterface;
  [PDD_LOGISTICS_TICKET_IMAGE_UPLOAD]: PddLogisticsTicketImageUploadLogisticsTicketImageUploadResponseResponseInterface;
  [PDD_LOGISTICS_TICKET_NOTIFY]: PddLogisticsTicketNotifyLogisticsTicketNotifyResponseResponseInterface;
  [PDD_LOGISTICS_TICKET_PROBLEM_TYPE_GET]: PddLogisticsTicketProblemTypeGetLogisticsProblemTypeGetResponseResponseInterface;
  [PDD_PROMOTION_COUPON_CLOSE]: PddPromotionCouponClosePromotionCouponBatchCloseResponseResponseInterface;
  [PDD_PROMOTION_COUPON_QUANTITY_ADD]: PddPromotionCouponQuantityAddCouponQuantityAddResponseResponseInterface;
  [PDD_PROMOTION_GOODS_COUPON_CREATE]: PddPromotionGoodsCouponCreateGoodsCouponBatchCreateResponseResponseInterface;
  [PDD_PROMOTION_GOODS_COUPON_LIST_GET]: PddPromotionGoodsCouponListGetGoodsCouponBatchListResponseResponseInterface;
  [PDD_PROMOTION_HOME_COUPON_CREATE]: PddPromotionHomeCouponCreateHomeCouponBatchCreateResponseResponseInterface;
  [PDD_PROMOTION_MERCHANT_COUPON_LIST_GET]: PddPromotionMerchantCouponListGetMerchantCouponBatchListResponseResponseInterface;
  [PDD_VOUCHER_APPOINTMENT_INFO_SEND]: PddVoucherAppointmentInfoSendVoucherAppointmentInfoSendResponseResponseInterface;
  [PDD_VOUCHER_OTA_CARD_VERIFICATION]: PddVoucherOtaCardVerificationVoucherOtaCardVerificationResponseResponseInterface;
  [PDD_VOUCHER_PHYSICAL_GOODS_SEND]: PddVoucherPhysicalGoodsSendVoucherPhysicalVoucherSendResponseResponseInterface;
  [PDD_VOUCHER_VIRTUAL_CARD_VERIFICATION]: PddVoucherVirtualCardVerificationVoucherVoucherInfoVerifyResponseResponseInterface;
  [PDD_VOUCHER_VOUCHER_COMPLAIN]: PddVoucherVoucherComplainVoucherVoucherComplainResponseResponseInterface;
  [PDD_VOUCHER_VOUCHER_INFO_SEND]: PddVoucherVoucherInfoSendVoucherVoucherInfoSendResponseResponseInterface;
  [PDD_INVOICE_APPLICATION_QUERY]: PddInvoiceApplicationQueryInvoiceApplicationQueryResponseResponseInterface;
  [PDD_INVOICE_APPLICATION_UPDATE]: PddInvoiceApplicationUpdateInvoiceApplicationUpdateResponseResponseInterface;
  [PDD_INVOICE_DETAIL_INVALID]: PddInvoiceDetailInvalidInvoiceDetailInvalidResponseResponseInterface;
  [PDD_INVOICE_DETAIL_QUERY]: PddInvoiceDetailQueryInvoiceDetailQueryResponseResponseInterface;
  [PDD_INVOICE_DETAIL_UPLOAD]: PddInvoiceDetailUploadInvoiceDetailUploadResponseResponseInterface;
  [PDD_MALL_CPS_PROTOCOL_STATUS_QUERY]: PddMallCpsProtocolStatusQueryMallCpsProtocolStatusQueryResponseResponseInterface;
  [PDD_MALL_INFO_BONDED_WAREHOUSE_GET]: PddMallInfoBondedWarehouseGetMallInfoBondedWarehouseGetResponseResponseInterface;
  [PDD_MALL_INFO_GET]: PddMallInfoGetMallInfoGetResponseResponseInterface;
  [PDD_MALL_INFO_GROUP_ADD_STORE_POST]: PddMallInfoGroupAddStorePostMallInfoGroupAddStorePostResponseResponseInterface;
  [PDD_MALL_INFO_GROUP_LIST_STORE_GET]: PddMallInfoGroupListStoreGetMallInfoGroupListStoreGetResponseResponseInterface;
  [PDD_MALL_INFO_GROUP_REMOVE_STORE_GET]: PddMallInfoGroupRemoveStoreGetMallInfoGroupRemoveStoreGetResponseResponseInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST]: PddMallInfoStoreCreatePostMallInfoStoreCreatePostResponseResponseInterface;
  [PDD_MALL_INFO_STORE_CREATE_POST_NOPOI]: PddMallInfoStoreCreatePostNopoiResponseInterface;
  [PDD_MALL_INFO_STORE_DELETE_POST]: PddMallInfoStoreDeletePostMallInfoStoreDeletePostResponseResponseInterface;
  [PDD_MALL_INFO_STORE_GET]: PddMallInfoStoreGetResponseInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST]: PddMallInfoStoreUpdatePostMallInfoStoreUpdatePostResponseResponseInterface;
  [PDD_MALL_INFO_STORE_UPDATE_POST_NOPOI]: PddMallInfoStoreUpdatePostNopoiResponseInterface;
  [PDD_QRPAY_PAYEE_REGISTER]: PddQrpayPayeeRegisterQrpayPayeeRegisterResponseResponseInterface;
  [PDD_SMS_ADD_CROWD]: PddSmsAddCrowdSmsAddCrowdResponseResponseInterface;
  [PDD_SMS_CREATE_CUSTOM_TEMPLATE]: PddSmsCreateCustomTemplateSmsCreateCustomTemplateResponseResponseInterface;
  [PDD_SMS_CROWDS_PEOPLE_NUMBER_QUERY]: PddSmsCrowdsPeopleNumberQuerySmsCrowsPeopleNumberQueryResponseResponseInterface;
  [PDD_SMS_CROWDS_QUERY]: PddSmsCrowdsQuerySmsCrowsQueryResponseResponseInterface;
  [PDD_SMS_CUSTOM_SETTING]: PddSmsCustomSettingSmsCustomSettingResponseResponseInterface;
  [PDD_SMS_CUSTOM_TEMPLATE_QUERY]: PddSmsCustomTemplateQuerySmsCustomTemplateListQueryResponseResponseInterface;
  [PDD_SMS_REMAIN_DETAIL_QUERY]: PddSmsRemainDetailQuerySmsRemainDetailQueryResponseResponseInterface;
  [PDD_SMS_REMAIN_SETTING]: PddSmsRemainSettingSmsRemainSettingResponseResponseInterface;
  [PDD_SMS_REMAIN_SETTING_DETAIL_QUERY]: PddSmsRemainSettingDetailQuerySmsRemainSettingDetailQueryResponseResponseInterface;
  [PDD_SMS_SELL_DELETING]: PddSmsSellDeletingSmsSellDeletingResponseResponseInterface;
  [PDD_SMS_SELL_RECORD_LIST_QUERY]: PddSmsSellRecordListQuerySmsSellRecordListQueryResponseResponseInterface;
  [PDD_SMS_SELL_SETTING]: PddSmsSellSettingSmsSellSettingResponseResponseInterface;
  [PDD_SMS_SELL_SETTING_DETAIL_QUERY]: PddSmsSellSettingDetailQuerySmsSellSettingDetailQueryResponseResponseInterface;
  [PDD_SMS_SELL_SETTING_RECORD_CANCEL]: PddSmsSellSettingRecordCancelSmsSellSettingRecordCancelResponseResponseInterface;
  [PDD_SMS_SEND_RECORD_LIST_QUERY]: PddSmsSendRecordListQuerySmsSendRecordListQueryResponseResponseInterface;
  [PDD_SMS_SHORT_STATISTIC_QUERY]: PddSmsShortStatisticQuerySmsShortMsgStatisticQueryResponseResponseInterface;
  [PDD_SMS_TEMPLATE_QUERY]: PddSmsTemplateQuerySmsTemplateQueryResponseResponseInterface;
  [PDD_TIME_GET]: PddTimeGetTimeGetResponseResponseInterface;
  [PDD_UTIL_DIVIDE_BASE64_IMAGE]: PddUtilDivideBase64ImageResponseInterface;
  [PDD_EXPRESS_ADD_DEPOT]: PddExpressAddDepotResponseInterface;
  [PDD_EXPRESS_CHANGE_DEPOT_INFO]: PddExpressChangeDepotInfoResponseInterface;
  [PDD_EXPRESS_DEPOT_INFO_GET]: PddExpressDepotInfoGetResponseInterface;
  [PDD_EXPRESS_DEPOT_LIST_GET]: PddExpressDepotListGetOpenApiResponseResponseInterface;
  [PDD_EXPRESS_MALL_DEPOT_SIMPLE_GET]: PddExpressMallDepotSimpleGetOpenApiResponseResponseInterface;
  [PDD_EXPRESS_SEARCH_DEPOT]: PddExpressSearchDepotOpenApiResponseResponseInterface;
  [PDD_STOCK_DEPOT_PRIORITY_LIST]: PddStockDepotPriorityListOpenApiResponseResponseInterface;
  [PDD_STOCK_DEPOT_PRIORITY_UPDATE]: PddStockDepotPriorityUpdateResponseInterface;
  [PDD_STOCK_GOODS_ID_TO_SKU_QUERY]: PddStockGoodsIdToSkuQueryOpenApiResponseResponseInterface;
  [PDD_STOCK_WARE_CREATE]: PddStockWareCreateResponseInterface;
  [PDD_STOCK_WARE_DELETE]: PddStockWareDeleteResponseInterface;
  [PDD_STOCK_WARE_DETAIL_QUERY]: PddStockWareDetailQueryOpenApiResponseResponseInterface;
  [PDD_STOCK_WARE_INFO_LIST]: PddStockWareInfoListStockWareInfoListResponseResponseInterface;
  [PDD_STOCK_WARE_LIST]: PddStockWareListOpenApiResponseResponseInterface;
  [PDD_STOCK_WARE_MOVE]: PddStockWareMoveResponseInterface;
  [PDD_STOCK_WARE_SKU_UPDATE]: PddStockWareSkuUpdateResponseInterface;
  [PDD_STOCK_WARE_UPDATE]: PddStockWareUpdateResponseInterface;
  [PDD_PMC_USER_CANCEL]: PddPmcUserCancelPmcUserCancelResponseResponseInterface;
  [PDD_PMC_USER_GET]: PddPmcUserGetPmcUserGetResponseResponseInterface;
  [PDD_PMC_USER_PERMIT]: PddPmcUserPermitPmcUserPermitResponseResponseInterface;
  [PDD_FINANCE_BALANCE_DAILY_BILL_URL_GET]: PddFinanceBalanceDailyBillUrlGetFinanceBalanceDailyBillUrlGetResponseResponseInterface;
  [PDD_CLOUDPRINT_CMDPRINT_RENDER]: PddCloudprintCmdprintRenderCloudprintCmdprintRenderResponseResponseInterface;
  [PDD_CLOUDPRINT_CUSTOMARES_GET]: PddCloudprintCustomaresGetPddCloudprintCustomaresGetResponseResponseInterface;
  [PDD_CLOUDPRINT_STDTEMPLATES_GET]: PddCloudprintStdtemplatesGetPddCloudprintStdtemplatesGetResponseResponseInterface;
  [PDD_WAYBILL_CANCEL]: PddWaybillCancelPddWaybillCancelResponseResponseInterface;
  [PDD_WAYBILL_GET]: PddWaybillGetPddWaybillGetResponseResponseInterface;
  [PDD_WAYBILL_QUERY_BY_WAYBILLCODE]: PddWaybillQueryByWaybillcodePddWaybillQueryByWaybillcodeResponseResponseInterface;
  [PDD_WAYBILL_SEARCH]: PddWaybillSearchPddWaybillSearchResponseResponseInterface;
  [PDD_WAYBILL_UPDATE]: PddWaybillUpdatePddWaybillUpdateResponseResponseInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_EXPRESS_MSG_RECORD]: PddOpenMsgServiceQueryExpressMsgRecordResponseInterface;
  [PDD_OPEN_MSG_SERVICE_QUERY_MSG_RECORD]: PddOpenMsgServiceQueryMsgRecordResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_BATCH_MSG]: PddOpenMsgServiceSendBatchMsgResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_EXPRESS_MSG]: PddOpenMsgServiceSendExpressMsgResponseInterface;
  [PDD_OPEN_MSG_SERVICE_SEND_MSG]: PddOpenMsgServiceSendMsgResponseInterface;
  [PDD_SERVICEMARKET_SETTLEMENTBILL_GET]: PddServicemarketSettlementbillGetSettlementBillSearchResponseResponseInterface;
  [PDD_SERVICEMARKET_TRADELIST_GET]: PddServicemarketTradelistGetMallBalanceFlowSearchResponseResponseInterface;
  [PDD_VAS_ORDER_SEARCH]: PddVasOrderSearchVasOrderSearchResponseResponseInterface;
  [PDD_MALL_TICKET_DETAIL]: PddMallTicketDetailMallTicketDetailResponseResponseInterface;
  [PDD_MALL_TICKET_LIST]: PddMallTicketListMallTicketListResponseResponseInterface;
  [PDD_MALL_TICKET_NOTIFY]: PddMallTicketNotifyResponseInterface;
  [PDD_SMS_DETAILBILL_PUSH]: PddSmsDetailbillPushResponseInterface;
  [PDD_SMS_VENDOR_COMPLAINT_CREATE]: PddSmsVendorComplaintCreateResponseInterface;
}
export interface PddCommonRequestInterface {
  /**
   * API接口名称
   */
  type: string;

  /**
   * POP分配给应用的client_id
   */
  client_id: string;

  /**
   * 通过code获取的access_token(无需授权的接口，该字段不参与sign签名运算)
   */
  access_token?: string;

  /**
   * UNIX时间戳，单位秒，需要与拼多多服务器时间差值在10分钟内
   */
  timestamp: number;

  /**
   * 响应格式，即返回数据的格式，JSON或者XML（二选一），默认JSON，注意是大写
   * @default JSON
   */
  data_type?: 'JSON' | 'XML';

  /**
   * API协议版本号，默认为V1，可不填
   * @default V1
   */
  version?: string;

  /**
   * API输入参数签名结果，签名算法参考开放平台接入指南第三部分底部。
   */
  sign: string;
}
