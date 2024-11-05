"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var meteors_1 = require("@/components/ui/meteors");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var uuidv4 = require("uuid").v4;
function Room() {
    var _this = this;
    var router = (0, navigation_1.useRouter)();
    var _a = (0, react_1.useState)(""), room = _a[0], setRoom = _a[1];
    var _b = (0, react_1.useState)(""), joinroom = _b[0], setjoinRoom = _b[1];
    var makeuuid = function () { return __awaiter(_this, void 0, void 0, function () {
        var uuid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, uuidv4()];
                case 1:
                    uuid = _a.sent();
                    setRoom(uuid);
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        makeuuid();
    }, []);
    var handleSubmit = function (e, room) { return __awaiter(_this, void 0, void 0, function () {
        var a;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, makeuuid()];
                case 1:
                    a = _a.sent();
                    router.push("/chatapp/".concat(room));
                    return [2 /*return*/];
            }
        });
    }); };
    var handlejoinroom = function (e, joinroom) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            if (!joinroom || joinroom === "")
                return [2 /*return*/];
            router.push("/chatapp/".concat(joinroom));
            return [2 /*return*/];
        });
    }); };
    return (<>
      <div className="flex sm:flex-col justify-center items-center gap-[15rem] sm:gap-[8rem] rounded-3xl bg-transparent w-[100%] h-dvh flex-row overflow-hidden">
        <div className="relative max-w-sm w-[50rem] sm:w-[80%] h-[15rem] md:h-2/2  ">
          <div className="absolute inset-0 h-full w-[30rem] sm:w-[100%] bg-gradient-to-r from-transparent to-blue-600 transform scale-[1.20] rounded-full blur-3xl flex justify-center items-center"/>
          <div className="relative h-full w-[30rem] sm:w-[100%]  border border-white px-8 sm:py-6 overflow-hidden rounded-2xl shadow-2xl flex justify-center items-center">
            <div className="join flex flex-col justify-center items-center text-center">
              <h1 className="font-extrabold font-mono text-4xl sm:text-xl mb-4 text-center text-violet-100">
                Join Room
              </h1>
              <input className=" text-white text-lg w-[150%] bg-transparent border-2 mb-4 border-white focus:outline-none sm:h-10 sm:w-[110%] placeholder-gray-400 py-2 px-3 sm:rounded-3xl sm:pl-2 sm:p-1 rounded-3xl" type="text" onChange={function (e) { return setjoinRoom(e.target.value); }} placeholder="Write Room Name ..."/>
              <button onClick={function () {
            handlejoinroom(event, joinroom);
        }} className="visible sm:hidden text-white p-4 text-lg sm:text-[18px] font-extrabold bg-transparent border-2 border-white hover:bg-black hover:blue-600 hover:text-white rounded-full py-2 sm:rounded-md sm:w-20 sm:h-10 sm:text-white mt-4" type="submit">
                Join Room
              </button>
              {/* sm wala niichu hai  */}
              <button className="sm:visible 2xl:hidden text-white sm:text-[18px] font-extrabold bg-transparent border-2 border-white hover:bg-black hover:blue-600 hover:text-white rounded-full p-4 px-6 sm:rounded-md  sm:text-white mt-4" type="submit" onClick={function () {
            handlejoinroom(event, room);
        }}>
                Join
              </button>
            </div>
            <meteors_1.Meteors number={12}/>
          </div>
        </div>
        <div className="relative max-w-sm w-[50rem] sm:w-[80%] h-[15rem] md:h-2/2 ">
          <div className="absolute inset-0 h-full w-[30rem] sm:w-[100%] bg-gradient-to-r from-pink-800 to-transparent-500 transform scale-[1.20] rounded-full blur-3xl flex justify-center items-center"/>
          <div className="relative h-full w-[30rem] sm:w-[100%] border-2 border-white px-8 sm:py-6 overflow-hidden rounded-2xl shadow-2xl flex justify-center items-center">
            <div className="join flex flex-col justify-center items-center text-center">
              <h1 className="font-extrabold font-mono text-4xl sm:text-xl mb-4 text-center text-violet-100">
                Create Room
              </h1>
              <button className="visible sm:hidden text-white p-4 text-lg sm:text-[18px] font-extrabold bg-transparent border-2 border-white hover:bg-black hover:blue-600 hover:text-white rounded-full py-2 sm:rounded-md sm:w-20 sm:h-10 sm:text-white mt-4" type="submit" onClick={function () {
            handleSubmit(event, room);
        }}>
                Create Unique Room
              </button>
              {/* sm wala niichu hai  */}
              <button className="sm:visible 2xl:hidden text-white sm:text-[18px] font-extrabold bg-transparent border-2 border-white hover:bg-black hover:blue-600 hover:text-white rounded-full p-4 sm:rounded-md  sm:text-white mt-4" type="submit" onClick={function () {
            handleSubmit(event, room);
        }}>
                Create
              </button>
            </div>
            <meteors_1.Meteors number={15}/>
          </div>
        </div>
      </div>
    </>);
}
exports.default = Room;
