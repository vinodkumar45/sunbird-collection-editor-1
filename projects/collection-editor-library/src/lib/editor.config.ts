export const labelConfig = {
  save_collection_btn_label: 'Save as Daft',
  save_collection_btn_icon : '',
  submit_collection_btn_label: 'Submit',
  submit_collection_btn_icon: '',
  reject_collection_btn_label: 'Reject',
  reject_collection_btn_icon: '',
  publish_collection_btn_label: 'Publish',
  publish_collection_btn_icon: '',
  edit_question_btn_label: 'Edit',
  edit_question_btn_icon: 'icon edit',
  preview_question_btn_label: 'Preview',
  preview_question_btn_icon: 'icon eye',
  cancel_question_btn_label: 'Cancel',
  cancel_question_btn_icon: '',
  save_question_btn_label: 'Save',
  save_question_btn_icon: ''
};

export const PLAYER_CONFIG = {
  "playerConfig": {
    "context": {
      "mode": "play",
      "partner": [],
      "pdata": {
        "id": "sunbird.portal",
        "ver": "1.8.0",
        "pid": "sunbird-portal"
      }
    },
    "config": {
      "showEndPage": false,
      "endPage": [
        {
          "template": "assessment",
          "contentType": [
            "SelfAssess"
          ]
        }
      ],
      "showStartPage": true,
      "host": "",
      "overlay": {
        "showUser": false
      },
      "splash": {
        "text": "",
        "icon": "",
        "bgImage": "assets/icons/splacebackground_1.png",
        "webLink": ""
      },
      "sideMenu": {
        showDownload: true,
        showExit: false,
        showShare: true
      },
      "apislug": "/action",
      "repos": [
        "/sunbird-plugins/renderer"
      ],
      "plugins": [
        {
          "id": "org.sunbird.iframeEvent",
          "ver": 1.0,
          "type": "plugin"
        },
        {
          "id": "org.sunbird.player.endpage",
          "ver": 1.1,
          "type": "plugin"
        }
      ]
    }
  },
  "contentType": {
    "Course": "Course"
  },
  "MIME_TYPE": {
    "collection": "application/vnd.ekstep.content-collection",
    "ecmlContent": "application/vnd.ekstep.ecml-archive",
    "genericMimeType": [
      "application/pdf",
      "video/mp4",
      "video/x-youtube",
      "video/youtube",
      "application/vnd.ekstep.html-archive",
      "application/epub",
      "application/vnd.ekstep.h5p-archive",
      "video/webm",
      "text/x-url"
    ],
    "pdf": "application/pdf",
    "mp4": "video/mp4",
    "youtube": "video/x-youtube",
    "pYoutube": "video/youtube",
    "html": "application/vnd.ekstep.html-archive",
    "ePub": "application/epub",
    "h5p": "application/vnd.ekstep.h5p-archive",
    "webm": "video/webm",
    "xUrl": "text/x-url"
  },
  "playerType": {
    'pdf-player': ['application/pdf'],
    'video-player': ['video/mp4', 'video/webm']
  },
  "baseURL": "/content/preview/preview.html?webview=true",
  "localBaseUrl": "/contentPlayer/preview/preview.html?",
  "cdnUrl": "/content/preview/preview_cdn.html?webview=true"
};





