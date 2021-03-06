// Copyright 2018 Morpx Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#ifndef MUVISIONSENSOR_SRC_MUVISIONSENSOR_TYPE_H_
#define MUVISIONSENSOR_SRC_MUVISIONSENSOR_TYPE_H_

typedef unsigned char mu_err_t;

#ifdef BIT
#undef BIT
#endif
#define BIT(x) (0x01 << (x))

#define MU_MAX_RESULT 1

#define MU_DEVICE_ID 0x03
#define visionTypeEnumToMacro(v) (BIT(v - 1))

#define kVisionMaxType 9

enum MuVsMessageVisionType
{
  //% block="π θ²εζ£ζ΅ "
  kVisionColorDetect = 1,
  //% block="π ι’θ²θ―ε« "
  kVisionColorRecog = 2,
  //% block="β½ η"
  kVisionBall = 3,
  //% block="π₯ δΊΊδ½"
  kVisionBody = 5,
  //% block="π³ ε½’ηΆε‘η"
  kVisionShapeCard = 6,
  //% block="π³ δΊ€ιε‘η"
  kVisionTrafficCard = 7,
  //% block="π³ ζ°ε­ε‘η"
  kVisionNumberCard = 8,
};

enum MuVsLedColor
{
  //% block="ε³ι­"
  kLedClose = 0,
  //% block="ηΊ’θ²"
  kLedRed = 1,
  //% block="η»Ώθ²"
  kLedGreen = 2,
  //% block="ι»θ²"
  kLedYellow = 3,
  //% block="θθ²"
  kLedBlue = 4,
  //% block="η΄«θ²"
  kLedPurple = 5,
  //% block="ιθ²"
  kLedCyan = 6,
  //% block="η½θ²"
  kLedWhite = 7,
};
//register address define
typedef enum
{
  kRegDeviceId = 0x01,
  kRegFirmwareVersion = 0x02,
  kRegRestart = 0x03,
  kRegSensorConfig1 = 0x04,
  kRegLock = 0x05,
  kRegLed1 = 0x06,
  kRegLed2 = 0x07,
  kRegLedLevel = 0x08,
  kRegUart = 0x09,
  kRegLightSensor = 0x0A,
  kRegIO = 0x0B,
  kRegBle = 0x0C,
  kRegCameraConfig1 = 0x10,
  kRegFrameCount = 0x1F,
  kRegVisionId = 0x20,
  kRegVisionConfig1 = 0x21,
  kRegVisionConfig2 = 0x22,
  kRegParamValue1 = 0x25,
  kRegParamValue2 = 0x26,
  kRegParamValue3 = 0x27,
  kRegParamValue4 = 0x28,
  kRegParamValue5 = 0x29,
  kRegVisionStatus1 = 0x2A,
  kRegVisionStatus2 = 0x2B,
  kRegVisionDetect1 = 0x30,
  kRegVisionDetect2 = 0x31,
  kRegResultNumber = 0x34,
  kRegResultId = 0x35,
  kRegReadStatus1 = 0x36,
  kRegResultData1 = 0x40,
  kRegResultData2 = 0x41,
  kRegResultData3 = 0x42,
  kRegResultData4 = 0x43,
  kRegResultData5 = 0x44,
  kRegLsProximity = 0x50,
  kRegLsAlsL = 0x51,
  kRegLsAlsH = 0x52,
  kRegLsRawColorRedL = 0x53,
  kRegLsRawColorRedH = 0x54,
  kRegLsRawColorGreenL = 0x55,
  kRegLsRawColorGreenH = 0x56,
  kRegLsRawColorBlueL = 0x57,
  kRegLsRawColorBlueH = 0x58,
  kRegLsColor = 0x59,
  kRegLsGesture = 0x5A,
  kRegLsColorRed = 0x60,
  kRegLsColorGreen = 0x61,
  kRegLsColorBlue = 0x62,
  kRegLsColorHueL = 0x63,
  kRegLsColorHueH = 0x64,
  kRegLsColorSaturation = 0x65,
  kRegLsColorValue = 0x66,
  kRegSn = 0xD0,
} MuVsRegAddress;

//type define
enum MuVsLed
{
  //% block="ζζ"
  kLedAll = 2,
  //% block="1"
  kLed1 = 0,
  //% block="2"
  kLed2 = 1,
};
enum MuVsMode
{
  //% block="I2C"
  kI2CMode = 1,
  //% block="Serial"
  kSerialMode = 0,
};
enum MuVsBaudrate
{
  kBaud9600 = 0x00,
  kBaud19200 = 0x01,
  kBaud38400 = 0x02,
  kBaud57600 = 0x03,
  kBaud115200 = 0x04,
  kBaud230400 = 0x05,
  kBaud460800 = 0x06,
  kBaud921600 = 0x07,
};
enum MuVsObjectInf
{
  //% block="ηΆζ"
  kStatus, //!< whether the target is detected
  //% block="ζ¨ͺεεζ "
  kXValue, //!< target horizontal position
  //% block="ηΊ΅εεζ "
  kYValue, //!< target vertical position
  //% block="ε?½εΊ¦"
  kWidthValue, //!< target width
  //% block="ι«εΊ¦"
  kHeightValue, //!< target height
  //% block="ζ η­Ύ"
  kLabel, //!< target label
  //% block="ηΊ’θ²ιι"
  kRValue, //!< R channel value
  //% block="η»Ώθ²ιι"
  kGValue, //!< G channel value
  //% block="θθ²ιι"
  kBValue, //!< B channel value
};
typedef enum
{
  //!< for UART mode only
  kCallBackMode = 0, //!< u need send a request first, and wait for response
  kDataFlowMode = 1, //!< MU will automatically response the result of the vision that u enabled, whether it detected or undetected
  kEventMode = 2,    //!< MU can only automatically response the result of the vision that u enabled, which detected target
} MuVsStreamOutputMode;
enum MuVsCameraZoom
{
  //% block="θͺε¨"
  kZoomDefault = 0,
  //% block="η­ηΊ§1"
  kZoom1 = 1,
  //% block="η­ηΊ§2"
  kZoom2 = 2,
  //% block="η­ηΊ§3"
  kZoom3 = 3,
  //% block="η­ηΊ§4"
  kZoom4 = 4,
  //% block="η­ηΊ§5"
  kZoom5 = 5,
};
typedef enum
{
  kFPSNormal = 0, //!< 25FPS mode
  kFPSHigh = 1,   //!< 50FPS mode
} MuVsCameraFPS;
enum MuVsCameraWhiteBalance
{
  //% block="θͺε¨"
  kAutoWhiteBalance = 0,
  //% block="ιε?"
  kLockWhiteBalance = 1,
  //% block="η½εζ¨‘εΌ"
  kWhiteLight = 2,
  //% block="ι»εζ¨‘εΌ"
  kYellowLight = 3,
};
enum MuVsVisionLevel
{
  //% block="θͺε¨"
  kLevelDefault = 0,
  //% block="ι«ι"
  kLevelSpeed = 1,
  //% block="εΉ³θ‘‘"
  kLevelBalance = 2,
  //% block="εη‘?"
  kLevelAccuracy = 3,
};
enum MuVsLsSensitivity
{
  //% block="θͺε¨"
  kSensitivityDefault = 0,
  //% block="δ½"
  kSensitivity1 = 1,
  //% block="δΈ­"
  kSensitivity2 = 2,
  //% block="ι«"
  kSensitivity3 = 3,
};
#define kGestureNone (MuVsLsGesture(0))
enum MuVsLsGesture
{
  //%block="δΈε"
  kGestureUp = 1,
  //%block="δΈε"
  kGestureDown = 2,
  //%block="ε·¦ε"
  kGestureLeft = 3,
  //%block="ε³ε"
  kGestureRight = 4,
  //%block="εθΏ"
  kGesturePush = 5,
  //%block="ει"
  kGesturePull = 6,
};
enum MuVsLsColorType
{
  //% block="ι’θ²ζ η­Ύ"
  kLsColorLabel = 0,
  //% block="ηΊ’θ²ιι"
  kLsColorRed = 1,
  //% block="η»Ώθ²ιι"
  kLsColorGreen = 2,
  //% block="θθ² ιι"
  kLsColorBlue = 3,
  //% block="θ²θ°"
  kLsColorHue = 4,
  //% block="ι₯±εεΊ¦"
  kLsColorSaturation = 5,
  //% block="θ²εΌ"
  kLsColorValue = 6,
};
typedef enum
{
  kLsRawColorRed,
  kLsRawColorGreen,
  kLsRawColorBlue,
} MuVsLsRawColorType;
// register type
typedef union
{
  struct
  {
    unsigned char reserve0 : 2;
    unsigned char default_setting : 1; //!< set 1 reset all config
  };
  unsigned char sensor_config_reg_value;
} MuVsSensorConfig1;
typedef union
{
  struct
  {
    MuVsBaudrate baudrate : 3;
  };
  unsigned char uart_reg_value;
} MuVsUartConfig;
typedef union
{
  struct
  {
    unsigned char manual : 1;
    MuVsLedColor detected_color : 3;
    unsigned char hold : 1;
    MuVsLedColor undetected_color : 3;
  };
  unsigned char led_reg_value;
} MuVsLedConfig;
typedef union
{
  struct
  {
    MuVsCameraZoom zoom : 3;
    unsigned char rotate : 1;
    MuVsCameraFPS fps : 1;
    MuVsCameraWhiteBalance white_balance : 2;
    unsigned char awb_locked : 1;
  };
  unsigned char camera_reg_value;
} MuVsCameraConfig1;
typedef union
{
  struct
  {
    unsigned char status : 1;
    unsigned char default_setting : 1; //!< set 1 to reset vision configuration
    MuVsStreamOutputMode output_mode : 2;
    MuVsVisionLevel level : 2;
    unsigned char reserve6 : 1;
    unsigned char output_enable : 1;
  };
  unsigned char vision_config_reg_value;
} MuVsVisionConfig1;
typedef union
{
  struct
  {
    unsigned char proximity_enable : 1;
    unsigned char als_enable : 1;
    unsigned char color_enable : 1;
    unsigned char gesture_enable : 1;
    MuVsLsSensitivity sensitivity : 2;
    bool white_balance_enable : 1;
  };
  unsigned char ls_reg_value;
} MuVsLightSensor;
typedef union
{
  struct
  {
    MuVsLsGesture gesture : 7;
    bool detect : 1;
  };
  unsigned char ls_gesture_reg_value;
} MuVsLsGestureConfig;
typedef struct
{
  unsigned char frame;
  unsigned char detect;
  struct
  {
    union
    {
      unsigned char result_data1;
      unsigned char x_value;
      unsigned char color_r_value;
      unsigned char top_x_value;
    };
    union
    {
      unsigned char result_data2;
      unsigned char y_value;
      unsigned char color_g_value;
      unsigned char top_y_value;
    };
    union
    {
      unsigned char result_data3;
      unsigned char width;
      unsigned char color_b_value;
      unsigned char bot_x_value;
    };
    union
    {
      unsigned char result_data4;
      unsigned char height;
      unsigned char bot_y_value;
    };
    union
    {
      unsigned char result_data5;
      unsigned char color;
      unsigned char label;
    };
  } vision_result[MU_MAX_RESULT];
} MuVsVisionState;

#endif /* ARDUINO_LIB_MUVISIONSENSOR_SRC_MUVISIONSENSOR_TYPE_H_ */
