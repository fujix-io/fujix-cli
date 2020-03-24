
"use strict";
// This code is used only for reusing in generated code
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (_) try {
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = __importDefault(require("https"));
var http_1 = __importDefault(require("http"));
var url_1 = require("url");
var util_1 = require("util");
exports.request = function (_a) {
    var url = _a.url, operation = _a.operation, authorization = _a.authorization, headers = _a.headers;
    var urlPaths = url_1.parse(url);
    var request = https_1.default.request;
    if (urlPaths.protocol === 'http') {
        request = http_1.default.request;
    }
    var body = JSON.stringify({
        query: operation,
    });
    var options = {
        hostname: urlPaths.hostname,
        path: urlPaths.path,
        method: 'POST',
        headers: __assign(__assign((headers || {})), { 'Content-Type': 'application/json', 'Content-Length': body.length, 'fujix-api-key': authorization }),
    };
    if (urlPaths.port)
        options.port = urlPaths.port;
    return new Promise(function (resolve, reject) {
        var data = [];
        var req = request(options, function (res) {
            res.on('data', function (buffer) { return data.push(buffer); });
            res.on('error', function (error) { console.error("\n🔥 \u001B[31m" + url + " does not respond or token is invalid\u001B[0m \n\n📃 \u001b[33mError message: " + error.message + "\u001b[0m\n"); return reject(error);});
            res.on('end', function () { return resolve(data.join('')); });
        });
        req.on('error', function (error) { console.error("\n🔥 \u001B[31m" + url + " does not respond or token is invalid\u001B[0m \n\n📃 \u001b[33mError message: " + error.message + "\u001b[0m\n"); return reject(error);});
        req.write(body);
        req.end();
    });
};
var getFilterProject = function (filter) {
    var map = {
        notIn: 'not_in',
        startsWith: 'starts_with',
        endsWith: 'ends_with',
    };
    return map[filter] || filter;
};
exports.parseVariables = function (variables, inputTypes, fields, initial) {
    if (initial === void 0) { initial = false; }
    var variableFields = Object.keys(variables).map(function (key) {
        var _a, _b;
        var field = fields.find(function (_a) {
            var name = _a.name;
            return name === key;
        });
        switch ((_a = field) === null || _a === void 0 ? void 0 : _a.inputType.kind) {
            case 'object':
                var type_1 = inputTypes.find(function (_a) {
                    var name = _a.name;
                    var _b;
                    return ((_b = field) === null || _b === void 0 ? void 0 : _b.inputType.type) === name;
                });
                if (field.inputType.isList) {
                    return key + ": [" + variables[key].map(function (variable) { var _a; return exports.parseVariables(variable, inputTypes, (_a = type_1) === null || _a === void 0 ? void 0 : _a.fields); }) + "]";
                }
                return key + ": " + exports.parseVariables(variables[key], inputTypes, (_b = type_1) === null || _b === void 0 ? void 0 : _b.fields);
            case 'scalar':
                switch (field.inputType.type) {
                    case 'DateTime':
                    case 'ID':
                    case 'String':
                        if (field.inputType.isList) {
                            return field.name + ": [\"" + variables[key].map(function (value) { return "\"" + value.replace(/\n/gim, '\\n').replace(/\r/gim, '') + "\""; }).join(', ') + "\"]";
                        }
                        return field.name + ": \"" + variables[key].replace(/\n/gim, '\\n').replace(/\r/gim, '') + "\"";
                    default:
                        if (field.inputType.isList) {
                            return field.name + ": [" + variables[key].join(', ') + "]";
                        }
                        return field.name + ": " + variables[key];
                }
            default:
                if (field.inputType.isList) {
                    return field.name + ": [" + variables[key].join(', ') + "]";
                }
                return field.name + ": " + variables[key];
        }
    });
    if (initial)
        return variableFields.join(', ');
    return "{ " + variableFields.join(', ') + " }";
};
exports.getFields = function (outputTypes, outputTypeName) {
    var _a, _b;
    var outputType = outputTypes.find(function (type) { return type.name === outputTypeName; });
    var scalarFields = (_a = outputType) === null || _a === void 0 ? void 0 : _a.fields.filter(function (_a) {
        var kind = _a.outputType.kind;
        return ['scalar', 'enum'].includes(kind);
    });
    return "{ " + ((_b = scalarFields) === null || _b === void 0 ? void 0 : _b.map(function (field) { return "" + field.name; }).join(' ')) + " } ";
};
exports.getFieldsObject = function (outputType) {
    var _a, _b;
    var scalarFields = (_a = outputType) === null || _a === void 0 ? void 0 : _a.fields.filter(function (_a) {
        var kind = _a.outputType.kind;
        return ['scalar', 'enum'].includes(kind);
    });
    return (_b = scalarFields) === null || _b === void 0 ? void 0 : _b.reduce(function (r, field) {
        var _a;
        return (__assign(__assign({}, r), (_a = {}, _a[field.name] = true, _a)));
    }, {});
};
exports.prepareSelection = function (selection, outputTypeName, outputTypes) {
    return Object.keys(selection).reduce(function (r, key) {
        var _a, _b, _c, _d;
        var _e, _f, _g, _h;
        var outputType = outputTypes.find(function (type) { return type.name === outputTypeName; });
        var currentField = (_e = outputType) === null || _e === void 0 ? void 0 : _e.fields.find(function (_a) {
            var name = _a.name;
            return name === key;
        });
        var currentOutputType = outputTypes.find(function (_a) {
            var name = _a.name;
            var _b;
            return name === ((_b = currentField) === null || _b === void 0 ? void 0 : _b.outputType.type);
        });
        if (typeof selection[key] === 'boolean' && ((_f = currentField) === null || _f === void 0 ? void 0 : _f.outputType.kind) !== 'object') {
            if (selection[key])
                return __assign(__assign({}, r), (_a = {}, _a[key] = selection[key], _a));
            return r;
        }
        if (typeof selection[key] === 'boolean' && ((_g = currentField) === null || _g === void 0 ? void 0 : _g.outputType.kind) === 'object') {
            var defaultFields = exports.getFieldsObject(currentOutputType);
            if (selection[key])
                return __assign(__assign({}, r), (_b = {}, _b[key] = defaultFields, _b));
            return r;
        }
        var _j = selection[key], $args = _j.$args, rest = __rest(_j, ["$args"]);
        if ($args && !Object.keys(rest).length) {
            var defaultFields = exports.getFieldsObject(currentOutputType);
            return __assign(__assign({}, r), (_c = {}, _c[key] = __assign({ $args: $args }, defaultFields), _c));
        }
        return __assign(__assign({}, r), (_d = {}, _d[key] = __assign(__assign({}, ($args && { $args: $args })), exports.prepareSelection(rest, (_h = currentField) === null || _h === void 0 ? void 0 : _h.outputType.type, outputTypes)), _d));
    }, {});
};
var stringifySelectionArgs = function ($args) { return JSON.stringify($args)
    .replace(/{"/gim, '{')
    .replace(/":/gim, ':')
    .replace(/,"/gim, ',')
    .replace(/^{|}$/gim, ''); };
exports.stringifySelection = function (selection) {
    if (util_1.isArray(selection)) {
        return "[" + selection.map(exports.stringifySelection).join(', ') + "]";
    }
    if (util_1.isObject(selection)) {
        if (selection.$args) {
            var $args = selection.$args, rest_1 = __rest(selection, ["$args"]);
            if (Object.keys(rest_1).length) {
                return "(" + stringifySelectionArgs($args) + "){ " + Object.keys(rest_1).map(function (key) { return "" + key + exports.stringifySelection(rest_1[key]); }).join(' ') + " }";
            }
            return "(" + exports.stringifySelection($args) + ")";
        }
        return " { " + Object.keys(selection).map(function (key) { return "" + key + exports.stringifySelection(selection[key]); }).join(' ') + " }";
    }
    return '';
};
exports.getSelection = function (selection, outputTypeName, outputTypes) {
    var preparedSelection = exports.prepareSelection(selection, outputTypeName, outputTypes);
    return exports.stringifySelection(preparedSelection);
};
var BaseFetcher = /** @class */ (function () {
    function BaseFetcher(config) {
        this.inputTypes = config.inputTypes;
        this.outputTypes = config.outputTypes;
        this.apiKey = config.apiKey;
        this.url = config.url;
    }
    BaseFetcher.prototype.fetch = function (_a) {
        var operation = _a.operation, _b = _a.variables, variables = _b === void 0 ? {} : _b, fields = _a.fields, outputTypeName = _a.outputTypeName, operationName = _a.operationName;
        var _c;
        return __awaiter(this, void 0, void 0, function () {
            var selection, operations, operationArgs, parsedVariables, finalVariables, operationString, result, parsedResult, firstError;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (fields)
                            selection = exports.getSelection(fields, outputTypeName, this.outputTypes);
                        else
                            selection = exports.getFields(this.outputTypes, outputTypeName);
                        operations = this.outputTypes
                            .filter(function (_a) {
                            var name = _a.name;
                            return ['Query', 'Mutation'].includes(name);
                        })
                            .map(function (type) { return type.fields; })
                            .reduce(function (r, fields) { return __spread(r, fields); }, []);
                        operationArgs = (_c = operations.find(function (_a) {
                            var name = _a.name;
                            return name === operationName;
                        })) === null || _c === void 0 ? void 0 : _c.args;
                        parsedVariables = exports.parseVariables(variables, this.inputTypes, operationArgs, true);
                        finalVariables = Object.keys(variables).length ? "(" + parsedVariables + ")" : '';
                        operationString = operation + " " + operationName + " {\n      " + operationName + finalVariables + " " + selection + "\n    }";
                        return [4 /*yield*/, exports.request({ url: this.url, authorization: this.apiKey, operation: operationString })];
                    case 1:
                        result = _d.sent();
                        parsedResult = JSON.parse(result);
                        if ((!parsedResult.data && !parsedResult.errors) || parsedResult.message) {
                          throw new Error(parsedResult.message || 'Internal server error');
                        }
                        if (parsedResult.errors) {
                            firstError = parsedResult.errors[0];
                            throw firstError;
                        }
                        return [2 /*return*/, parsedResult.data[operationName]];
                }
            });
        });
    };
    return BaseFetcher;
}());
exports.BaseFetcher = BaseFetcher;


var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };
  return function (d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
};



var QueryFetcher = /** @class */ (function (_super) {
  __extends(QueryFetcher, _super);
  function QueryFetcher(config) {
      return _super.call(this, config) || this;
  }

  QueryFetcher.prototype.dmmf = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'query';
        operationName = 'dmmf';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'String' })];
      });
    });
  }

  QueryFetcher.prototype.findOneAccount = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'query';
        operationName = 'findOneAccount';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Account' })];
      });
    });
  }

  QueryFetcher.prototype.findManyAccount = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'query';
        operationName = 'findManyAccount';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Account' })];
      });
    });
  }

  QueryFetcher.prototype.aggregateAccount = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'query';
        operationName = 'aggregateAccount';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Int' })];
      });
    });
  }

  QueryFetcher.prototype.findOneTransaction = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'query';
        operationName = 'findOneTransaction';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Transaction' })];
      });
    });
  }

  QueryFetcher.prototype.findManyTransaction = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'query';
        operationName = 'findManyTransaction';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Transaction' })];
      });
    });
  }

  QueryFetcher.prototype.aggregateTransaction = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'query';
        operationName = 'aggregateTransaction';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Int' })];
      });
    });
  }

  QueryFetcher.prototype.findOneUser = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'query';
        operationName = 'findOneUser';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'User' })];
      });
    });
  }

  QueryFetcher.prototype.findManyUser = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'query';
        operationName = 'findManyUser';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'User' })];
      });
    });
  }

  QueryFetcher.prototype.aggregateUser = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'query';
        operationName = 'aggregateUser';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Int' })];
      });
    });
  }
  return QueryFetcher;
}(BaseFetcher));
exports.QueryFetcher = QueryFetcher;


var MutationFetcher = /** @class */ (function (_super) {
  __extends(MutationFetcher, _super);
  function MutationFetcher(config) {
      return _super.call(this, config) || this;
  }

  MutationFetcher.prototype.createOneAccount = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'createOneAccount';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Account' })];
      });
    });
  }

  MutationFetcher.prototype.updateOneAccount = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'updateOneAccount';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Account' })];
      });
    });
  }

  MutationFetcher.prototype.updateManyAccount = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'updateManyAccount';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'BatchPayload' })];
      });
    });
  }

  MutationFetcher.prototype.deleteOneAccount = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'deleteOneAccount';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Account' })];
      });
    });
  }

  MutationFetcher.prototype.deleteManyAccount = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'deleteManyAccount';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'BatchPayload' })];
      });
    });
  }

  MutationFetcher.prototype.createOneTransaction = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'createOneTransaction';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Transaction' })];
      });
    });
  }

  MutationFetcher.prototype.updateOneTransaction = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'updateOneTransaction';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Transaction' })];
      });
    });
  }

  MutationFetcher.prototype.updateManyTransaction = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'updateManyTransaction';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'BatchPayload' })];
      });
    });
  }

  MutationFetcher.prototype.deleteOneTransaction = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'deleteOneTransaction';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'Transaction' })];
      });
    });
  }

  MutationFetcher.prototype.deleteManyTransaction = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'deleteManyTransaction';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'BatchPayload' })];
      });
    });
  }

  MutationFetcher.prototype.createOneUser = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'createOneUser';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'User' })];
      });
    });
  }

  MutationFetcher.prototype.updateOneUser = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'updateOneUser';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'User' })];
      });
    });
  }

  MutationFetcher.prototype.updateManyUser = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'updateManyUser';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'BatchPayload' })];
      });
    });
  }

  MutationFetcher.prototype.deleteOneUser = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'deleteOneUser';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'User' })];
      });
    });
  }

  MutationFetcher.prototype.deleteManyUser = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var operation, operationName, fields, variables;
      return __generator(this, function (_a) {
        operation = 'mutation';
        operationName = 'deleteManyUser';
        fields = args ? args.select : undefined, variables = args ? __rest(args, ["select"]) : {};
        return [2 /*return*/, this.fetch({ operation: operation, operationName: operationName, variables: variables, fields: fields, outputTypeName: 'BatchPayload' })];
      });
    });
  }
  return MutationFetcher;
}(BaseFetcher));
exports.MutationFetcher = MutationFetcher;


var Client = /** @class */ (function () {
  function Client(config) {
    this.url = config.url;
    this.dmmf = {"schema":{"enums":[{"name":"Currency","values":["CNY","EUR","RUB","USD"]},{"name":"OrderByArg","values":["asc","desc"]}],"inputTypes":[{"name":"AccountWhereUniqueInput","fields":[{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}}]},{"name":"TransactionWhereUniqueInput","fields":[{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}}]},{"name":"AccountWhereInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTimeFilter","kind":"object"}},{"name":"currency","inputType":{"isRequired":false,"isList":false,"type":"Currency","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"StringFilter","kind":"object"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"StringFilter","kind":"object"}},{"name":"transations","inputType":{"isRequired":false,"isList":false,"type":"TransactionFilter","kind":"object"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTimeFilter","kind":"object"}},{"name":"AND","inputType":{"isRequired":false,"isList":true,"type":"AccountWhereInput","kind":"object"}},{"name":"OR","inputType":{"isRequired":false,"isList":true,"type":"AccountWhereInput","kind":"object"}},{"name":"NOT","inputType":{"isRequired":false,"isList":true,"type":"AccountWhereInput","kind":"object"}},{"name":"owner","inputType":{"isRequired":false,"isList":false,"type":"UserWhereInput","kind":"object"}}]},{"name":"DateTimeFilter","fields":[{"name":"equals","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"not","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"in","inputType":{"isRequired":false,"isList":true,"type":"DateTime","kind":"scalar"}},{"name":"notIn","inputType":{"isRequired":false,"isList":true,"type":"DateTime","kind":"scalar"}},{"name":"lt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"lte","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"gt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"gte","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}}]},{"name":"StringFilter","fields":[{"name":"equals","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"not","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"in","inputType":{"isRequired":false,"isList":true,"type":"String","kind":"scalar"}},{"name":"notIn","inputType":{"isRequired":false,"isList":true,"type":"String","kind":"scalar"}},{"name":"lt","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"lte","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"gt","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"gte","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"contains","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"startsWith","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"endsWith","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}}]},{"name":"TransactionFilter","fields":[{"name":"every","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereInput","kind":"object"}},{"name":"some","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereInput","kind":"object"}},{"name":"none","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereInput","kind":"object"}}]},{"name":"TransactionWhereInput","fields":[{"name":"amount","inputType":{"isRequired":false,"isList":false,"type":"IntFilter","kind":"object"}},{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTimeFilter","kind":"object"}},{"name":"description","inputType":{"isRequired":false,"isList":false,"type":"NullableStringFilter","kind":"object"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"StringFilter","kind":"object"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTimeFilter","kind":"object"}},{"name":"AND","inputType":{"isRequired":false,"isList":true,"type":"TransactionWhereInput","kind":"object"}},{"name":"OR","inputType":{"isRequired":false,"isList":true,"type":"TransactionWhereInput","kind":"object"}},{"name":"NOT","inputType":{"isRequired":false,"isList":true,"type":"TransactionWhereInput","kind":"object"}},{"name":"account","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereInput","kind":"object"}}]},{"name":"IntFilter","fields":[{"name":"equals","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"not","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"in","inputType":{"isRequired":false,"isList":true,"type":"Int","kind":"scalar"}},{"name":"notIn","inputType":{"isRequired":false,"isList":true,"type":"Int","kind":"scalar"}},{"name":"lt","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"lte","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"gt","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"gte","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}}]},{"name":"NullableStringFilter","fields":[{"name":"equals","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"not","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"in","inputType":{"isRequired":false,"isList":true,"type":"String","kind":"scalar"}},{"name":"notIn","inputType":{"isRequired":false,"isList":true,"type":"String","kind":"scalar"}},{"name":"lt","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"lte","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"gt","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"gte","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"contains","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"startsWith","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"endsWith","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}}]},{"name":"UserWhereInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTimeFilter","kind":"object"}},{"name":"email","inputType":{"isRequired":false,"isList":false,"type":"StringFilter","kind":"object"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"StringFilter","kind":"object"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"StringFilter","kind":"object"}},{"name":"password","inputType":{"isRequired":false,"isList":false,"type":"StringFilter","kind":"object"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTimeFilter","kind":"object"}},{"name":"accounts","inputType":{"isRequired":false,"isList":false,"type":"AccountFilter","kind":"object"}},{"name":"AND","inputType":{"isRequired":false,"isList":true,"type":"UserWhereInput","kind":"object"}},{"name":"OR","inputType":{"isRequired":false,"isList":true,"type":"UserWhereInput","kind":"object"}},{"name":"NOT","inputType":{"isRequired":false,"isList":true,"type":"UserWhereInput","kind":"object"}}]},{"name":"AccountFilter","fields":[{"name":"every","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereInput","kind":"object"}},{"name":"some","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereInput","kind":"object"}},{"name":"none","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereInput","kind":"object"}}]},{"name":"AccountOrderByInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"currency","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}}]},{"name":"TransactionOrderByInput","fields":[{"name":"amount","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"description","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}}]},{"name":"UserWhereUniqueInput","fields":[{"name":"email","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}}]},{"name":"UserOrderByInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"email","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"password","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"OrderByArg","kind":"enum"}}]},{"name":"AccountCreateInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"currency","inputType":{"isRequired":true,"isList":false,"type":"Currency","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"owner","inputType":{"isRequired":true,"isList":false,"type":"UserCreateOneWithoutAccountsInput","kind":"object"}},{"name":"transations","inputType":{"isRequired":false,"isList":false,"type":"TransactionCreateManyWithoutAccountInput","kind":"object"}}]},{"name":"UserCreateOneWithoutAccountsInput","fields":[{"name":"create","inputType":{"isRequired":false,"isList":false,"type":"UserCreateWithoutAccountsInput","kind":"object"}},{"name":"connect","inputType":{"isRequired":false,"isList":false,"type":"UserWhereUniqueInput","kind":"object"}}]},{"name":"UserCreateWithoutAccountsInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"email","inputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"}},{"name":"password","inputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}}]},{"name":"TransactionCreateManyWithoutAccountInput","fields":[{"name":"create","inputType":{"isRequired":false,"isList":true,"type":"TransactionCreateWithoutAccountInput","kind":"object"}},{"name":"connect","inputType":{"isRequired":false,"isList":true,"type":"TransactionWhereUniqueInput","kind":"object"}}]},{"name":"TransactionCreateWithoutAccountInput","fields":[{"name":"amount","inputType":{"isRequired":true,"isList":false,"type":"Int","kind":"scalar"}},{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"description","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}}]},{"name":"AccountUpdateInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"currency","inputType":{"isRequired":false,"isList":false,"type":"Currency","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"owner","inputType":{"isRequired":false,"isList":false,"type":"UserUpdateOneRequiredWithoutAccountsInput","kind":"object"}},{"name":"transations","inputType":{"isRequired":false,"isList":false,"type":"TransactionUpdateManyWithoutAccountInput","kind":"object"}}]},{"name":"UserUpdateOneRequiredWithoutAccountsInput","fields":[{"name":"create","inputType":{"isRequired":false,"isList":false,"type":"UserCreateWithoutAccountsInput","kind":"object"}},{"name":"connect","inputType":{"isRequired":false,"isList":false,"type":"UserWhereUniqueInput","kind":"object"}},{"name":"update","inputType":{"isRequired":false,"isList":false,"type":"UserUpdateWithoutAccountsDataInput","kind":"object"}},{"name":"upsert","inputType":{"isRequired":false,"isList":false,"type":"UserUpsertWithoutAccountsInput","kind":"object"}}]},{"name":"UserUpdateWithoutAccountsDataInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"email","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"password","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}}]},{"name":"UserUpsertWithoutAccountsInput","fields":[{"name":"update","inputType":{"isRequired":true,"isList":false,"type":"UserUpdateWithoutAccountsDataInput","kind":"object"}},{"name":"create","inputType":{"isRequired":true,"isList":false,"type":"UserCreateWithoutAccountsInput","kind":"object"}}]},{"name":"TransactionUpdateManyWithoutAccountInput","fields":[{"name":"create","inputType":{"isRequired":false,"isList":true,"type":"TransactionCreateWithoutAccountInput","kind":"object"}},{"name":"connect","inputType":{"isRequired":false,"isList":true,"type":"TransactionWhereUniqueInput","kind":"object"}},{"name":"set","inputType":{"isRequired":false,"isList":true,"type":"TransactionWhereUniqueInput","kind":"object"}},{"name":"disconnect","inputType":{"isRequired":false,"isList":true,"type":"TransactionWhereUniqueInput","kind":"object"}},{"name":"delete","inputType":{"isRequired":false,"isList":true,"type":"TransactionWhereUniqueInput","kind":"object"}},{"name":"update","inputType":{"isRequired":false,"isList":true,"type":"TransactionUpdateWithWhereUniqueWithoutAccountInput","kind":"object"}},{"name":"updateMany","inputType":{"isRequired":false,"isList":true,"type":"TransactionUpdateManyWithWhereNestedInput","kind":"object"}},{"name":"deleteMany","inputType":{"isRequired":false,"isList":true,"type":"TransactionScalarWhereInput","kind":"object"}},{"name":"upsert","inputType":{"isRequired":false,"isList":true,"type":"TransactionUpsertWithWhereUniqueWithoutAccountInput","kind":"object"}}]},{"name":"TransactionUpdateWithWhereUniqueWithoutAccountInput","fields":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"TransactionWhereUniqueInput","kind":"object"}},{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"TransactionUpdateWithoutAccountDataInput","kind":"object"}}]},{"name":"TransactionUpdateWithoutAccountDataInput","fields":[{"name":"amount","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"description","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}}]},{"name":"TransactionUpdateManyWithWhereNestedInput","fields":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"TransactionScalarWhereInput","kind":"object"}},{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"TransactionUpdateManyDataInput","kind":"object"}}]},{"name":"TransactionScalarWhereInput","fields":[{"name":"amount","inputType":{"isRequired":false,"isList":false,"type":"IntFilter","kind":"object"}},{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTimeFilter","kind":"object"}},{"name":"description","inputType":{"isRequired":false,"isList":false,"type":"NullableStringFilter","kind":"object"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"StringFilter","kind":"object"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTimeFilter","kind":"object"}},{"name":"AND","inputType":{"isRequired":false,"isList":true,"type":"TransactionScalarWhereInput","kind":"object"}},{"name":"OR","inputType":{"isRequired":false,"isList":true,"type":"TransactionScalarWhereInput","kind":"object"}},{"name":"NOT","inputType":{"isRequired":false,"isList":true,"type":"TransactionScalarWhereInput","kind":"object"}}]},{"name":"TransactionUpdateManyDataInput","fields":[{"name":"amount","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"description","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}}]},{"name":"TransactionUpsertWithWhereUniqueWithoutAccountInput","fields":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"TransactionWhereUniqueInput","kind":"object"}},{"name":"update","inputType":{"isRequired":true,"isList":false,"type":"TransactionUpdateWithoutAccountDataInput","kind":"object"}},{"name":"create","inputType":{"isRequired":true,"isList":false,"type":"TransactionCreateWithoutAccountInput","kind":"object"}}]},{"name":"AccountUpdateManyMutationInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"currency","inputType":{"isRequired":false,"isList":false,"type":"Currency","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}}]},{"name":"TransactionCreateInput","fields":[{"name":"amount","inputType":{"isRequired":true,"isList":false,"type":"Int","kind":"scalar"}},{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"description","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"account","inputType":{"isRequired":true,"isList":false,"type":"AccountCreateOneWithoutTransationsInput","kind":"object"}}]},{"name":"AccountCreateOneWithoutTransationsInput","fields":[{"name":"create","inputType":{"isRequired":false,"isList":false,"type":"AccountCreateWithoutTransationsInput","kind":"object"}},{"name":"connect","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}}]},{"name":"AccountCreateWithoutTransationsInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"currency","inputType":{"isRequired":true,"isList":false,"type":"Currency","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"owner","inputType":{"isRequired":true,"isList":false,"type":"UserCreateOneWithoutAccountsInput","kind":"object"}}]},{"name":"TransactionUpdateInput","fields":[{"name":"amount","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"description","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"account","inputType":{"isRequired":false,"isList":false,"type":"AccountUpdateOneRequiredWithoutTransationsInput","kind":"object"}}]},{"name":"AccountUpdateOneRequiredWithoutTransationsInput","fields":[{"name":"create","inputType":{"isRequired":false,"isList":false,"type":"AccountCreateWithoutTransationsInput","kind":"object"}},{"name":"connect","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"update","inputType":{"isRequired":false,"isList":false,"type":"AccountUpdateWithoutTransationsDataInput","kind":"object"}},{"name":"upsert","inputType":{"isRequired":false,"isList":false,"type":"AccountUpsertWithoutTransationsInput","kind":"object"}}]},{"name":"AccountUpdateWithoutTransationsDataInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"currency","inputType":{"isRequired":false,"isList":false,"type":"Currency","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"owner","inputType":{"isRequired":false,"isList":false,"type":"UserUpdateOneRequiredWithoutAccountsInput","kind":"object"}}]},{"name":"AccountUpsertWithoutTransationsInput","fields":[{"name":"update","inputType":{"isRequired":true,"isList":false,"type":"AccountUpdateWithoutTransationsDataInput","kind":"object"}},{"name":"create","inputType":{"isRequired":true,"isList":false,"type":"AccountCreateWithoutTransationsInput","kind":"object"}}]},{"name":"TransactionUpdateManyMutationInput","fields":[{"name":"amount","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"description","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}}]},{"name":"UserCreateInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"email","inputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"}},{"name":"password","inputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"accounts","inputType":{"isRequired":false,"isList":false,"type":"AccountCreateManyWithoutOwnerInput","kind":"object"}}]},{"name":"AccountCreateManyWithoutOwnerInput","fields":[{"name":"create","inputType":{"isRequired":false,"isList":true,"type":"AccountCreateWithoutOwnerInput","kind":"object"}},{"name":"connect","inputType":{"isRequired":false,"isList":true,"type":"AccountWhereUniqueInput","kind":"object"}}]},{"name":"AccountCreateWithoutOwnerInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"currency","inputType":{"isRequired":true,"isList":false,"type":"Currency","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"transations","inputType":{"isRequired":false,"isList":false,"type":"TransactionCreateManyWithoutAccountInput","kind":"object"}}]},{"name":"UserUpdateInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"email","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"password","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"accounts","inputType":{"isRequired":false,"isList":false,"type":"AccountUpdateManyWithoutOwnerInput","kind":"object"}}]},{"name":"AccountUpdateManyWithoutOwnerInput","fields":[{"name":"create","inputType":{"isRequired":false,"isList":true,"type":"AccountCreateWithoutOwnerInput","kind":"object"}},{"name":"connect","inputType":{"isRequired":false,"isList":true,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"set","inputType":{"isRequired":false,"isList":true,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"disconnect","inputType":{"isRequired":false,"isList":true,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"delete","inputType":{"isRequired":false,"isList":true,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"update","inputType":{"isRequired":false,"isList":true,"type":"AccountUpdateWithWhereUniqueWithoutOwnerInput","kind":"object"}},{"name":"updateMany","inputType":{"isRequired":false,"isList":true,"type":"AccountUpdateManyWithWhereNestedInput","kind":"object"}},{"name":"deleteMany","inputType":{"isRequired":false,"isList":true,"type":"AccountScalarWhereInput","kind":"object"}},{"name":"upsert","inputType":{"isRequired":false,"isList":true,"type":"AccountUpsertWithWhereUniqueWithoutOwnerInput","kind":"object"}}]},{"name":"AccountUpdateWithWhereUniqueWithoutOwnerInput","fields":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"AccountUpdateWithoutOwnerDataInput","kind":"object"}}]},{"name":"AccountUpdateWithoutOwnerDataInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"currency","inputType":{"isRequired":false,"isList":false,"type":"Currency","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"transations","inputType":{"isRequired":false,"isList":false,"type":"TransactionUpdateManyWithoutAccountInput","kind":"object"}}]},{"name":"AccountUpdateManyWithWhereNestedInput","fields":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"AccountScalarWhereInput","kind":"object"}},{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"AccountUpdateManyDataInput","kind":"object"}}]},{"name":"AccountScalarWhereInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTimeFilter","kind":"object"}},{"name":"currency","inputType":{"isRequired":false,"isList":false,"type":"Currency","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"StringFilter","kind":"object"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"StringFilter","kind":"object"}},{"name":"transations","inputType":{"isRequired":false,"isList":false,"type":"TransactionFilter","kind":"object"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTimeFilter","kind":"object"}},{"name":"AND","inputType":{"isRequired":false,"isList":true,"type":"AccountScalarWhereInput","kind":"object"}},{"name":"OR","inputType":{"isRequired":false,"isList":true,"type":"AccountScalarWhereInput","kind":"object"}},{"name":"NOT","inputType":{"isRequired":false,"isList":true,"type":"AccountScalarWhereInput","kind":"object"}}]},{"name":"AccountUpdateManyDataInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"currency","inputType":{"isRequired":false,"isList":false,"type":"Currency","kind":"enum"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}}]},{"name":"AccountUpsertWithWhereUniqueWithoutOwnerInput","fields":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"update","inputType":{"isRequired":true,"isList":false,"type":"AccountUpdateWithoutOwnerDataInput","kind":"object"}},{"name":"create","inputType":{"isRequired":true,"isList":false,"type":"AccountCreateWithoutOwnerInput","kind":"object"}}]},{"name":"UserUpdateManyMutationInput","fields":[{"name":"createdAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}},{"name":"email","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"id","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"name","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"password","inputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"}},{"name":"updatedAt","inputType":{"isRequired":false,"isList":false,"type":"DateTime","kind":"scalar"}}]}],"outputTypes":[{"name":"Query","fields":[{"name":"dmmf","outputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"},"args":[]},{"name":"findOneAccount","outputType":{"isRequired":false,"isList":false,"type":"Account","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}}]},{"name":"findManyAccount","outputType":{"isRequired":false,"isList":true,"type":"Account","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereInput","kind":"object"}},{"name":"orderBy","inputType":{"isRequired":false,"isList":false,"type":"AccountOrderByInput","kind":"object"}},{"name":"skip","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"after","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"before","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"first","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"last","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}}]},{"name":"aggregateAccount","outputType":{"isRequired":true,"isList":false,"type":"Int","kind":"scalar"},"args":[{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereInput","kind":"object"}}]},{"name":"findOneTransaction","outputType":{"isRequired":false,"isList":false,"type":"Transaction","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"TransactionWhereUniqueInput","kind":"object"}}]},{"name":"findManyTransaction","outputType":{"isRequired":false,"isList":true,"type":"Transaction","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereInput","kind":"object"}},{"name":"orderBy","inputType":{"isRequired":false,"isList":false,"type":"TransactionOrderByInput","kind":"object"}},{"name":"skip","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"after","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereUniqueInput","kind":"object"}},{"name":"before","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereUniqueInput","kind":"object"}},{"name":"first","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"last","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}}]},{"name":"aggregateTransaction","outputType":{"isRequired":true,"isList":false,"type":"Int","kind":"scalar"},"args":[{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereInput","kind":"object"}}]},{"name":"findOneUser","outputType":{"isRequired":false,"isList":false,"type":"User","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"UserWhereUniqueInput","kind":"object"}}]},{"name":"findManyUser","outputType":{"isRequired":false,"isList":true,"type":"User","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"UserWhereInput","kind":"object"}},{"name":"orderBy","inputType":{"isRequired":false,"isList":false,"type":"UserOrderByInput","kind":"object"}},{"name":"skip","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"after","inputType":{"isRequired":false,"isList":false,"type":"UserWhereUniqueInput","kind":"object"}},{"name":"before","inputType":{"isRequired":false,"isList":false,"type":"UserWhereUniqueInput","kind":"object"}},{"name":"first","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"last","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}}]},{"name":"aggregateUser","outputType":{"isRequired":true,"isList":false,"type":"Int","kind":"scalar"},"args":[{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"UserWhereInput","kind":"object"}}]}]},{"name":"Account","fields":[{"name":"createdAt","outputType":{"isRequired":true,"isList":false,"type":"DateTime","kind":"scalar"},"args":[]},{"name":"currency","outputType":{"isRequired":true,"isList":false,"type":"Currency","kind":"enum"},"args":[]},{"name":"id","outputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"},"args":[]},{"name":"name","outputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"},"args":[]},{"name":"owner","outputType":{"isRequired":true,"isList":false,"type":"User","kind":"object"},"args":[]},{"name":"transations","outputType":{"isRequired":false,"isList":true,"type":"Transaction","kind":"object"},"args":[{"name":"skip","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"after","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereUniqueInput","kind":"object"}},{"name":"before","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereUniqueInput","kind":"object"}},{"name":"first","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"last","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}}]},{"name":"updatedAt","outputType":{"isRequired":true,"isList":false,"type":"DateTime","kind":"scalar"},"args":[]}]},{"name":"User","fields":[{"name":"createdAt","outputType":{"isRequired":true,"isList":false,"type":"DateTime","kind":"scalar"},"args":[]},{"name":"email","outputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"},"args":[]},{"name":"id","outputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"},"args":[]},{"name":"name","outputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"},"args":[]},{"name":"password","outputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"},"args":[]},{"name":"updatedAt","outputType":{"isRequired":true,"isList":false,"type":"DateTime","kind":"scalar"},"args":[]},{"name":"accounts","outputType":{"isRequired":false,"isList":true,"type":"Account","kind":"object"},"args":[{"name":"skip","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"after","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"before","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}},{"name":"first","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}},{"name":"last","inputType":{"isRequired":false,"isList":false,"type":"Int","kind":"scalar"}}]}]},{"name":"Transaction","fields":[{"name":"account","outputType":{"isRequired":true,"isList":false,"type":"Account","kind":"object"},"args":[]},{"name":"amount","outputType":{"isRequired":true,"isList":false,"type":"Int","kind":"scalar"},"args":[]},{"name":"createdAt","outputType":{"isRequired":true,"isList":false,"type":"DateTime","kind":"scalar"},"args":[]},{"name":"description","outputType":{"isRequired":false,"isList":false,"type":"String","kind":"scalar"},"args":[]},{"name":"id","outputType":{"isRequired":true,"isList":false,"type":"String","kind":"scalar"},"args":[]},{"name":"updatedAt","outputType":{"isRequired":true,"isList":false,"type":"DateTime","kind":"scalar"},"args":[]}]},{"name":"Mutation","fields":[{"name":"createOneAccount","outputType":{"isRequired":true,"isList":false,"type":"Account","kind":"object"},"args":[{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"AccountCreateInput","kind":"object"}}]},{"name":"updateOneAccount","outputType":{"isRequired":false,"isList":false,"type":"Account","kind":"object"},"args":[{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"AccountUpdateInput","kind":"object"}},{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}}]},{"name":"updateManyAccount","outputType":{"isRequired":true,"isList":false,"type":"BatchPayload","kind":"object"},"args":[{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"AccountUpdateManyMutationInput","kind":"object"}},{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereInput","kind":"object"}}]},{"name":"deleteOneAccount","outputType":{"isRequired":false,"isList":false,"type":"Account","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"AccountWhereUniqueInput","kind":"object"}}]},{"name":"deleteManyAccount","outputType":{"isRequired":true,"isList":false,"type":"BatchPayload","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"AccountWhereInput","kind":"object"}}]},{"name":"createOneTransaction","outputType":{"isRequired":true,"isList":false,"type":"Transaction","kind":"object"},"args":[{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"TransactionCreateInput","kind":"object"}}]},{"name":"updateOneTransaction","outputType":{"isRequired":false,"isList":false,"type":"Transaction","kind":"object"},"args":[{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"TransactionUpdateInput","kind":"object"}},{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"TransactionWhereUniqueInput","kind":"object"}}]},{"name":"updateManyTransaction","outputType":{"isRequired":true,"isList":false,"type":"BatchPayload","kind":"object"},"args":[{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"TransactionUpdateManyMutationInput","kind":"object"}},{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereInput","kind":"object"}}]},{"name":"deleteOneTransaction","outputType":{"isRequired":false,"isList":false,"type":"Transaction","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"TransactionWhereUniqueInput","kind":"object"}}]},{"name":"deleteManyTransaction","outputType":{"isRequired":true,"isList":false,"type":"BatchPayload","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"TransactionWhereInput","kind":"object"}}]},{"name":"createOneUser","outputType":{"isRequired":true,"isList":false,"type":"User","kind":"object"},"args":[{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"UserCreateInput","kind":"object"}}]},{"name":"updateOneUser","outputType":{"isRequired":false,"isList":false,"type":"User","kind":"object"},"args":[{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"UserUpdateInput","kind":"object"}},{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"UserWhereUniqueInput","kind":"object"}}]},{"name":"updateManyUser","outputType":{"isRequired":true,"isList":false,"type":"BatchPayload","kind":"object"},"args":[{"name":"data","inputType":{"isRequired":true,"isList":false,"type":"UserUpdateManyMutationInput","kind":"object"}},{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"UserWhereInput","kind":"object"}}]},{"name":"deleteOneUser","outputType":{"isRequired":false,"isList":false,"type":"User","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":true,"isList":false,"type":"UserWhereUniqueInput","kind":"object"}}]},{"name":"deleteManyUser","outputType":{"isRequired":true,"isList":false,"type":"BatchPayload","kind":"object"},"args":[{"name":"where","inputType":{"isRequired":false,"isList":false,"type":"UserWhereInput","kind":"object"}}]}]},{"name":"BatchPayload","fields":[{"name":"count","outputType":{"isRequired":true,"isList":false,"type":"Int","kind":"scalar"},"args":[]}]}],"rootQueryType":"Query","rootMutationType":"Mutation"}}
    this.apiKey = config.apiKey;

    this.query = new QueryFetcher({
        url: config.url,
        apiKey: config.apiKey,
        inputTypes: this.dmmf.schema.inputTypes,
        outputTypes: this.dmmf.schema.outputTypes,
    });

    this.mutation = new MutationFetcher({
        url: config.url,
        apiKey: config.apiKey,
        inputTypes: this.dmmf.schema.inputTypes,
        outputTypes: this.dmmf.schema.outputTypes,
    });
  }
  return Client;
}());
exports.default = Client;
