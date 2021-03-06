//% weight=103 color="#ff6600" icon="\uf110"
//% block=ι·ε₯θ§θ§
namespace muvision
{
    export enum VisionType {
        //% block="π θ²εζ£ζ΅"
        VisionColorBlockDetect=1,
        //% block="β½ η"
        VisionBallDetect=3,
        //% block="π₯ δΊΊδ½"
        VisionBodyDetect=5,
        //% block="π³ ε½’ηΆε‘η"
        VisionShapeCardDetect=6,
        //% block="π³ δΊ€ιε‘η"
        VisionTrafficCardDetect=7,
        //% block="π³ ζ°ε­ε‘η"
        VisionNumCardDetect=8
    }
    export enum CardType {
        //% block="π³ ε½’ηΆε‘η"
        VisionShapeCardDetect = 6,
        //% block="π³ δΊ€ιε‘η"
        VisionTrafficCardDetect,
        //% block="π³ ζ°ε­ε‘η"
        VisionNumCardDetect
    }
    export enum TrafficCardType {
        //% block="β¬ εθΏ"
        TrafficCardForward = 1,
        //% block="β¬ εε·¦"
        TrafficCardLeft,
        //% block="β‘ εε³"
        TrafficCardRight,
        //% block="π θ°ε€΄"
        TrafficCardTURN_AROUND,
        //% block="πΏοΈ εζ­’"
        TrafficCardPark
    }
    export enum ShapeCardType {
        //% block="β εΎ"
        ShapeCardTick = 1,
        //% block="β ε"
        ShapeCardCross,
        //% block="β­ εε"
        ShapeCardCircle,
        //% block="β» ζ­£ζΉε½’"
        ShapeCardSquare,
        //% block="π δΈθ§ε½’"
        ShapeCardTriangle
    }
    export enum ColorType {
        //% block="ι»θ²"
        Black = 1,
        //% block="η½θ²"
        White,
        //% block="ηΊ’θ²"
        Red,
        //% block="ι»θ²"
        Yellow,
        //% block="η»Ώθ²"
        Green,
        //% block="ιθ²"
        Cyan,
        //% block="θθ²"
        Blue,
        //% block="η΄«θ²"
        Purple,
        //% block="εΆδ»"
        Unkown = 0
    }
    export enum NumCardType {
        //% block="1"
        NumCard1 = 1,
        //% block="2"
        NumCard2,
        //% block="3"
        NumCard3,
        //% block="4"
        NumCard4,
        //% block="5"
        NumCard5,
        //% block="6"
        NumCard6,
        //% block="7"
        NumCard7,
        //% block="8"
        NumCard8,
        //% block="9"
        NumCard9,
        //% block="0"
        NumCard0 = 0,
    }
    export enum Params {
        //% block="ζ¨ͺεεζ "
        Horizontal = 1,
        //% block="ηΊ΅εεζ "
        Vertical,
        //% block="ε?½εΊ¦"
        Width,
        //% block="ι«εΊ¦"
        Height,
        //% block="ζ η­Ύ"
        Lable
    }
    export enum ColorParams {
        //% block="ηΊ’θ²ιι"
        RedChannal = 6,
        //% block="η»Ώθ²ιι"
        GreenChannal = 7,
        //% block="θθ²ιι"
        BlueChannal = 8,
        //% block="ζ η­Ύ"
        Label = 5
    }

    /**
     * θ?Ύη½?ι’θ²θ―ε«θ―ε«εΊε
     * @param id MU id
     * @param width θ―ε«εΊεε?½εΊ¦
     * @param height θ―ε«εΊει«εΊ¦
     */
    //% blockId=mu3_color_rcg_set_region block="%id|π ι’θ²θ―ε« θ?Ύη½?θ―ε«εΊε|ε?½εΊ¦ =%width|ι«εΊ¦ =%height"
    //% width.min=0 width.max=100 width.defl=5
    //% height.min=0 height.max=100 height.defl=5
    //% group="θ?Ύη½?" advanced=true
    export function colorRcgSetRegion(id: MuId, width: number, height: number)
    {
        muvision.write(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kWidthValue, width);
        muvision.write(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kHeightValue, height);
    }
    /**
     * θ?Ύη½?η?ζ³θ²εζ£ζ΅ζε°θ―ε«ηθ²εε€§ε°
     * @param id MU id
     * @param width ζε°θ―ε«ε?½εΊ¦
     * @param height ζε°θ―ε«ι«εΊ¦
     */
    //% blockId=mu3_color_block_set_min_size block="%id|π θ²εζ£ζ΅ θ?Ύη½?ζε°θ―ε«ε°Ίε―Έ|ε?½εΊ¦ =%width|ι«εΊ¦ =%height"
    //% width.min=0 width.max=100 width.defl=5
    //% height.min=0 height.max=100 height.defl=5
    //% group="θ?Ύη½?" advanced=true
    export function colorBlockSetMinRecognitionSize(id: MuId, width: number, height: number)
    {
        muvision.write(id, MuVsMessageVisionType.kVisionColorDetect, MuVsObjectInf.kWidthValue, width);
        muvision.write(id, MuVsMessageVisionType.kVisionColorDetect, MuVsObjectInf.kHeightValue, height);
    }
    /**
     * θ·εη?ζ³ζ£ζ΅ηΆζ
     * @param id MU id
     * @param type θ§θ§η?ζ³η±»ε
     */
    //% blockId=mu3_detected block="%id|ζ£ζ΅ε°%type" color="#2E8B57"
    //% group="θΏθ‘"
    export function detected(id: MuId, type: MuVsMessageVisionType): boolean{
        return muvision.getValue(id, type, MuVsObjectInf.kStatus) ? true : false} let x_last = -1;
    let y_last = -1;
    /**
     * θ?Ύη½?ι’θ²θ―ε«δΈ­εΏηΉεζ°οΌεΉΆθΏεζ£ζ΅ηΆζ
     * @param id MU id
     * @param x ζ¨ͺεδΈ­εΏηΉ(0~100)
     * @param y ηΊ΅εδΈ­εΏηΉ(0~100)
     */
    //% blockId=mu3_color_rcg_detected block="%id|θ―ε«ε°εζ |x =%x|y =%y|ι’θ²" color="#2E8B57"
    //% x.min=0 x.max=100 x.defl=50
    //% y.min=0 y.max=100 y.defl=50
    //% group="θΏθ‘"
    export function colorRcgDetected(id: MuId, x: number, y: number): boolean
    {
        x = x > 100 ? 100 : (x < 0 ? 0 : x);
        y = y > 100 ? 100 : (y < 0 ? 0 : y);
        if (x != x_last)
        {
            x_last = x;
            muvision.write(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kXValue, x);
        }
        if (y != y_last)
        {
            y_last = y;
            muvision.write(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kYValue, y);
        }
        return muvision.getValue(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kStatus) ? true : false
    }
    let label_last = -1;
    /**
     * θ?Ύη½?θ²εζ£ζ΅ηι’θ²η±»εοΌεΉΆθΏεζ£ζ΅ηΆζ
     * @param id MU id
     * @param label ι’θ²η±»ε
     */
    //% blockId=mu3_get_color_block_detect block="%id|ζ£ζ΅ε°%color|θ²ε" color="#2E8B57"
    //% group="θΏθ‘"
    export function colorBlockDetected(id: MuId, label: ColorType): boolean
    {
        if (label_last != label)
        {
            label_last = label;
            muvision.write(id, MuVsMessageVisionType.kVisionColorDetect, MuVsObjectInf.kLabel, label)
        }
        return muvision.getValue(id, MuVsMessageVisionType.kVisionColorDetect, MuVsObjectInf.kStatus) ? true : false
    }
    /**
     * θ·εη?ζ³η»ζ
     * @param id MU id
     * @param type η?ζ³η±»ε
     * @param item εζ°η±»ε
     */
    //% block="θ·ε%id|η?ζ³%type|%item|εΌ" color="#2E8B57"
    //% group="θΏθ‘"
    export function visionValue(id: MuId, type: VisionType, item: Params): number
    {
        return muvision.getValue(id, <number>type, <number>item)
    }
    /**
     * θ·ει’θ²θ―ε«η?ζ³η»ζ
     * @param id MU id
     * @param item ι’θ²η±»ε
     */
    //% block="θ·ε%id|η?ζ³ π ι’θ²θ―ε«|%item" color="#2E8B57"
    //% group="θΏθ‘"
    export function colorRcgValue(id: MuId, item: ColorParams): number
    {
        return muvision.getValue(id, MuVsMessageVisionType.kVisionColorRecog, <number>item)
    }
    /**
     * θ·εε½’ηΆε‘ηθ―ε«ηε‘ηη±»ε
     * @param id MU id
     * @param type ε‘ηη±»ε
     */
    //% blockId=mu3_shape_card_type block="θ·ε%id|η?ζ³ π³ ε½’ηΆε‘η|type =%type" color="#2E8B57"
    //% group="θΏθ‘"
    export function shapeCardType(id: MuId, type: ShapeCardType): boolean
    {
        return muvision.getValue(id, MuVsMessageVisionType.kVisionShapeCard, MuVsObjectInf.kLabel) == type
    }
    /**
     * θ·εδΊ€ιε‘ηθ―ε«ηε‘ηη±»ε
     * @param id MU id
     * @param type ε‘ηη±»ε
     */
    //% blockId=mu3_traffic_card_type block="θ·ε%id|π³ δΊ€ιε‘η|type =%type" color="#2E8B57"
    //% group="θΏθ‘"
    export function trafficCardType(id: MuId, type: TrafficCardType): boolean
    {
        return muvision.getValue(id, MuVsMessageVisionType.kVisionTrafficCard, MuVsObjectInf.kLabel) == type
    }
    /**
     * θ·εζ°ε­ε‘ηθ―ε«ηε‘ηη±»ε
     * @param id MU id
     * @param type ε‘ηη±»ε
     */
    //% blockId=mu3_number_card_type block="θ·ε%id|π³ ζ°ε­ε‘η|type =%type" color="#2E8B57"
    //% group="θΏθ‘"
    export function numberCardType(id: MuId, type: NumCardType): boolean
    {
        return muvision.getValue(id, MuVsMessageVisionType.kVisionNumberCard, MuVsObjectInf.kLabel) == type
    }
    /**
     * θ·ει’θ²θ―ε«η»ζζ η­Ύη±»ε
     * @param id MU id
     * @param type ι’θ²η±»ε
     */
    //% blockId=mu3_color_rcg_type block="θ·ε%id|π ι’θ²θ―ε« ι’θ² =%color" color="#2E8B57"
    //% group="θΏθ‘"
    export function colorRecognizeType(id: MuId, color: ColorType): boolean
    {
        return muvision.getValue(id, MuVsMessageVisionType.kVisionColorRecog, MuVsObjectInf.kLabel) == color;
    }
    let gesture = 0;
    /**
     * θ·εζεΏζ£ζ΅ηΆζ
     * @param id MU id
     */
    //% blockId=mu3_gesture_detect block=%id|εηΊΏδΌ ζε¨|ζ£ζ΅ε°ζεΏ" color="#ff6600"
    //% group="εδΌ ζε¨"
    export function gestureDetect(id: MuId): boolean
    {
        gesture = muvision.lsReadGesture(id);
        return gesture ? true : false;
    }
    /**
     * θ·εζεΏζ£ζ΅η»ζη±»ε
     * @param id MU id
     * @param type ζεΏη±»ε
     */
    //% blockId=mu3_gesture_type block="%id|εηΊΏδΌ ζε¨|ζεΏ =%MuVsLsGesture" color="#ff6600"
    //% group="εδΌ ζε¨"
    export function gestureType(id: MuId, type: MuVsLsGesture): boolean
    {
        return gesture == type;
    }
}

//% weight=102 color="#11ACEF" icon="\uf1eb"
//% block=ι·ε₯θ§θ§-WiFi
namespace muvisionAT { }
