const apiList = [
    {
        name: "login",
        method: "POST",
        desc: "登录",
        path: "/members/user_address_login",
        mockPath: "/members/user_address_login",
        params: {
            address: "",
            message: "",
            signature: "",
        },
        options: {},
    },
    {
        name: "getInfo",
        method: "GET",
        desc: "登录",
        path: "/members/user_info",
        mockPath: "/members/user_info",
        params: {},
        options: {},
    },
    {
        name: "ownArts",
        method: "GET",
        desc: "获取所属作品集",
        path: "/arts/mine",
        mockPath: "/arts/mine",
        params: {},
        options: {},
    },
    {
        name: "ownSginArts",
        method: "GET",
        desc: "获取待签名作品集",
        path: "/arts/available_signature_arts",
        mockPath: "/arts/available_signature_arts",
        params: {},
        options: {},
    },
    {
        name: "postArt",
        method: "POST",
        desc: "上传艺术品",
        path: "/arts",
        mockPath: "/arts",
        params: {},
        options: {
            upload: [
                "img_main_file1",
                "img_main_file2",
                "img_main_file3",
                "img_detail_file1",
                "img_detail_file2",
                "img_detail_file3",
                "img_detail_file4",
                "img_detail_file5",
            ],
        },
    },
    {
        name: "postEditArt",
        method: "POST",
        desc: "编辑未上传成功艺术品",
        path: "/update_infos",
        mockPath: "/update_infos",
        params: {},
        options: {
            upload: [
                "img_main_file1",
                "img_main_file2",
                "img_main_file3",
                "img_detail_file1",
                "img_detail_file2",
                "img_detail_file3",
                "img_detail_file4",
                "img_detail_file5",
            ],
        },
    },
    {
        name: "postOrganization",
        method: "POST",
        desc: "注册机构",
        path: "/organizations",
        mockPath: "/organizations",
        params: {},
        options: {
            upload: ["img_file"],
        },
    },
    {
        name: "getSignedWorks",
        method: "GET",
        desc: "当前用户已签名作品",
        path: "/arts/my_signatures",
        mockPath: "/arts/my_signatures",
        params: {},
        options: {},
    },
    {
        name: "postApplySignature",
        method: "POST",
        desc: "申请其他机构签名",
        path: "/arts/{:id}/apply_signature",
        mockPath: "/arts/{:id}/apply_signature",
        params: {},
        options: {},
    },
    {
        name: "getApplySignature",
        method: "GET",
        desc: "申请签名列表",
        path: "/arts/applying_signatures",
        mockPath: "/arts/applying_signatures",
        params: {},
        options: {},
    },
    {
        name: "postRefuseSignature",
        method: "POST",
        desc: "拒绝指定签名请求",
        path: "/arts/{:id}/reject_signature",
        mockPath: "/arts/{:id}/reject_signature",
        params: {
            organization_name: "",
        },
        options: {},
    },
    {
        name: "postChangeUserInfo",
        method: "POST",
        desc: "修改用户信息",
        path: "/members/change_user_info",
        mockPath: "/members/change_user_info",
        params: {
            avatar: "",
            recommend_image: "",
            display_name: "",
            desc: "",
            sex: "",
            artist_desc: "",
            real_name: "",
            phone_number: "",
            id_document_number: "",
        },
        options: {
            upload: ["avatar", "recommend_image"],
        },
    },
    {
        name: "getUserInfo",
        method: "GET",
        desc: "获取用户信息",
        path: "/members/user_info",
        mockPath: "/members/user_info",
        params: {},
        options: {},
    },
    {
        name: "getAuctionApplyList",
        method: "GET",
        desc: "获取申请拍卖会作品列表",
        path: "/auction_meetings/{:id}/applying_arts",
        mockPath: "/auction_meetings/{:id}/applying_arts",
        params: {},
        options: {},
    },
    {
        name: "postAuctionApply",
        method: "POST",
        desc: "申请参加拍卖会",
        path: "/auction_meetings/{:id}/attend",
        mockPath: "/auction_meetings/{:id}/attend",
        params: {},
        options: {},
    },
    {
        name: "postAuctionRefuse",
        method: "POST",
        desc: "拒绝申请加入拍卖会",
        path: "/auction_meetings/{:id}/reject",
        mockPath: "/auction_meetings/{:id}/reject",
        params: {},
        options: {},
    },
    {
        name: "postAuctionApprove",
        method: "POST",
        desc: "同意申请加入拍卖会",
        path: "/auction_meetings/{:id}/agree",
        mockPath: "/auction_meetings/{:id}/agree",
        params: {},
        options: {},
    },
    {
        name: "getSoldList",
        method: "GET",
        desc: "获取已卖列表",
        path: "/arts/sold",
        mockPath: "/arts/sold",
        params: {},
        options: {},
    },
    {
        name: "getBoughtList",
        method: "GET",
        desc: "获取已买列表",
        path: "/arts/bought",
        mockPath: "/arts/bought",
        params: {},
        options: {},
    },
    {
        name: "getAvailableSubmitList",
        method: "GET",
        desc: "获取可用于申请参加拍卖会的作品",
        path: "/auction_meetings/{:id}/user_arts",
        mockPath: "/auction_meetings/{:id}/user_arts",
        params: {},
        options: {},
    },
    {
        name: "postArtLike",
        method: "POST",
        desc: "点赞作品",
        path: "/arts/{:id}/like",
        mockPath: "/arts/{:id}/like",
        params: {
            id: "",
        },
        options: {},
    },
    {
        name: "postArtCancelLike",
        method: "POST",
        desc: "取消点赞作品",
        path: "/arts/{:id}/cancel_like",
        mockPath: "/arts/{:id}/cancel_like",
        params: {
            id: "",
        },
        options: {},
    },
    {
        name: "postArtDislike",
        method: "POST",
        desc: "踩作品",
        path: "/arts/{:id}/dislike",
        mockPath: "/arts/{:id}/dislike",
        params: {
            id: "",
        },
        options: {},
    },
    {
        name: "postArtCancelDislike",
        method: "POST",
        desc: "取消踩作品",
        path: "/arts/{:id}/cancel_dislike",
        mockPath: "/arts/{:id}/cancel_dislike",
        params: {
            id: "",
        },
        options: {},
    },
    {
        name: "postArtFavorite",
        method: "POST",
        desc: "收藏作品",
        path: "/arts/{:id}/favorite",
        mockPath: "/arts/{:id}/favorite",
        params: {
            id: "",
        },
        options: {},
    },
    {
        name: "postArtCancelFavorite",
        method: "POST",
        desc: "取消收藏作品",
        path: "/arts/{:id}/unfavorite",
        mockPath: "/arts/{:id}/unfavorite",
        params: {
            id: "",
        },
        options: {},
    },
    {
        name: "getUserFollowing",
        method: "GET",
        desc: "获取正在关注的艺术家",
        path: "/members/followings",
        mockPath: "/members/followings",
        options: {},
    },
    {
        name: "getUserFollowers",
        method: "GET",
        desc: "获取正在关注的艺术家",
        path: "/members/followers",
        mockPath: "/members/followers",
        options: {},
    },
    {
        name: "getUserFavorate",
        method: "GET",
        desc: "获取用户收藏",
        path: "/members/favorate_arts",
        mockPath: "/members/favorate_arts",
        options: {},
    },
    {
        name: "postArtistFollow",
        method: "POST",
        desc: "关注艺术家",
        path: "/members/{:id}/follow",
        mockPath: "/members/{:id}/follow",
        options: {},
    },
    {
        name: "postArtistUnfollow",
        method: "POST",
        desc: "取消关注艺术家",
        path: "/members/{:id}/unfollow",
        mockPath: "/members/{:id}/unfollow",
        options: {},
    },
    {
        name: "getArtSimilar",
        method: "GET",
        desc: "关联作品",
        path: "/members/recommend_arts",
        mockPath: "/members/recommend_arts",
        options: {},
    },
    {
        name: "postPhoneCode",
        method: "POST",
        desc: "获取手机验证码",
        path: "/members/send_sms",
        mockPath: "/members/send_sms",
        params: {
            phone_number: "",
        },
        options: {},
    },
];

export default apiList;
