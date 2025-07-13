import { createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, RouterProvider, useNavigate, useLocation, createRouter as createRouter$1 } from '@tanstack/react-router';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useEffect, useState, useCallback, useRef, useContext, createContext } from 'react';
import { XIcon, Heart, Gamepad2, Timer, Crown, Eye, Github, Users, Target, Search, Smartphone, Mail, Download, ArrowDown, Grid3X3, Globe, FileText, User, Palette, Home, Code2, Briefcase, Trophy, ChevronDownIcon, Star, Diamond, Zap } from 'lucide-react';
import { Toaster as Toaster$1, toast } from 'sonner';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { createMemoryHistory } from '@tanstack/history';
import { json, tsrSerializer, mergeHeaders } from '@tanstack/router-core/ssr/client';
import { joinPaths, trimPath, processRouteTree, isRedirect, isResolvedRedirect, isNotFound, rootRouteId, getMatchedRoutes } from '@tanstack/router-core';
import { attachRouterServerSsrUtils, dehydrateRouter } from '@tanstack/router-core/ssr/server';
import { AsyncLocalStorage } from 'node:async_hooks';
import invariant from 'tiny-invariant';
import { defineHandlerCallback, renderRouterToStream } from '@tanstack/react-router/ssr/server';

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function toWebRequest(event) {
  return event.web?.request || new Request(getRequestURL(event), {
    // @ts-ignore Undici option
    duplex: "half",
    method: event.method,
    headers: event.headers,
    body: getRequestWebStream(event)
  });
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function getResponseStatus$1(event) {
  return event.node.res.statusCode;
}
function getResponseHeaders$1(event) {
  return event.node.res.getHeaders();
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    // Hooks
    __publicField(this, "_onBeforeResponseCalled");
    __publicField(this, "_onAfterResponseCalled");
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler$1(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}

function StartServer(props) {
  return /* @__PURE__ */ jsx(RouterProvider, { router: props.router });
}
const defaultStreamHandler = defineHandlerCallback(
  ({ request, router, responseHeaders }) => renderRouterToStream({
    request,
    router,
    responseHeaders,
    children: /* @__PURE__ */ jsx(StartServer, { router })
  })
);
function flattenMiddlewares(middlewares) {
  const seen = /* @__PURE__ */ new Set();
  const flattened = [];
  const recurse = (middleware) => {
    middleware.forEach((m) => {
      if (m.options.middleware) {
        recurse(m.options.middleware);
      }
      if (!seen.has(m)) {
        seen.add(m);
        flattened.push(m);
      }
    });
  };
  recurse(middlewares);
  return flattened;
}
const eventStorage = new AsyncLocalStorage();
function defineEventHandler(handler) {
  return defineEventHandler$1((event) => {
    return runWithEvent(event, () => handler(event));
  });
}
async function runWithEvent(event, fn) {
  return eventStorage.run(event, fn);
}
function getEvent() {
  const event = eventStorage.getStore();
  if (!event) {
    throw new Error(
      `No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`
    );
  }
  return event;
}
const HTTPEventSymbol = Symbol("$HTTPEvent");
function isEvent(obj) {
  return typeof obj === "object" && (obj instanceof H3Event || (obj == null ? void 0 : obj[HTTPEventSymbol]) instanceof H3Event || (obj == null ? void 0 : obj.__is_event__) === true);
}
function createWrapperFunction(h3Function) {
  return function(...args) {
    const event = args[0];
    if (!isEvent(event)) {
      args.unshift(getEvent());
    } else {
      args[0] = event instanceof H3Event || event.__is_event__ ? event : event[HTTPEventSymbol];
    }
    return h3Function(...args);
  };
}
const getResponseStatus = createWrapperFunction(getResponseStatus$1);
const getResponseHeaders = createWrapperFunction(getResponseHeaders$1);
function requestHandler(handler) {
  return handler;
}
const VIRTUAL_MODULES = {
  routeTree: "tanstack-start-route-tree:v",
  startManifest: "tanstack-start-manifest:v",
  serverFnManifest: "tanstack-start-server-fn-manifest:v"
};
async function loadVirtualModule(id) {
  switch (id) {
    case VIRTUAL_MODULES.routeTree:
      return await Promise.resolve().then(() => routeTree_gen);
    case VIRTUAL_MODULES.startManifest:
      return await import('./_tanstack-start-manifest_v-CNANtqts.mjs');
    case VIRTUAL_MODULES.serverFnManifest:
      return await import('./_tanstack-start-server-fn-manifest_v-DtgTK7xl.mjs');
    default:
      throw new Error(`Unknown virtual module: ${id}`);
  }
}
async function getStartManifest(opts) {
  const { tsrStartManifest } = await loadVirtualModule(
    VIRTUAL_MODULES.startManifest
  );
  const startManifest = tsrStartManifest();
  const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes[rootRouteId] || {};
  rootRoute.assets = rootRoute.assets || [];
  let script = `import('${startManifest.clientEntry}')`;
  rootRoute.assets.push({
    tag: "script",
    attrs: {
      type: "module",
      suppressHydrationWarning: true,
      async: true
    },
    children: script
  });
  const manifest = {
    ...startManifest,
    routes: Object.fromEntries(
      Object.entries(startManifest.routes).map(([k, v]) => {
        const { preloads, assets } = v;
        return [
          k,
          {
            preloads,
            assets
          }
        ];
      })
    )
  };
  return manifest;
}
function sanitizeBase(base) {
  return base.replace(/^\/|\/$/g, "");
}
const handleServerAction = async ({
  request
}) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const abort = () => controller.abort();
  request.signal.addEventListener("abort", abort);
  const method = request.method;
  const url = new URL(request.url, "http://localhost:3000");
  const regex = new RegExp(`${sanitizeBase("/_serverFn")}/([^/?#]+)`);
  const match = url.pathname.match(regex);
  const serverFnId = match ? match[1] : null;
  const search = Object.fromEntries(url.searchParams.entries());
  const isCreateServerFn = "createServerFn" in search;
  const isRaw = "raw" in search;
  if (typeof serverFnId !== "string") {
    throw new Error("Invalid server action param for serverFnId: " + serverFnId);
  }
  const {
    default: serverFnManifest
  } = await loadVirtualModule(VIRTUAL_MODULES.serverFnManifest);
  const serverFnInfo = serverFnManifest[serverFnId];
  if (!serverFnInfo) {
    console.info("serverFnManifest", serverFnManifest);
    throw new Error("Server function info not found for " + serverFnId);
  }
  const fnModule = await serverFnInfo.importer();
  if (!fnModule) {
    console.info("serverFnInfo", serverFnInfo);
    throw new Error("Server function module not resolved for " + serverFnId);
  }
  const action = fnModule[serverFnInfo.functionName];
  if (!action) {
    console.info("serverFnInfo", serverFnInfo);
    console.info("fnModule", fnModule);
    throw new Error(`Server function module export not resolved for serverFn ID: ${serverFnId}`);
  }
  const formDataContentTypes = ["multipart/form-data", "application/x-www-form-urlencoded"];
  const response = await (async () => {
    try {
      let result = await (async () => {
        if (request.headers.get("Content-Type") && formDataContentTypes.some((type) => {
          var _a;
          return (_a = request.headers.get("Content-Type")) == null ? void 0 : _a.includes(type);
        })) {
          invariant(method.toLowerCase() !== "get", "GET requests with FormData payloads are not supported");
          return await action(await request.formData(), signal);
        }
        if (method.toLowerCase() === "get") {
          let payload2 = search;
          if (isCreateServerFn) {
            payload2 = search.payload;
          }
          payload2 = payload2 ? tsrSerializer.parse(payload2) : payload2;
          return await action(payload2, signal);
        }
        const jsonPayloadAsString = await request.text();
        const payload = tsrSerializer.parse(jsonPayloadAsString);
        if (isCreateServerFn) {
          return await action(payload, signal);
        }
        return await action(...payload, signal);
      })();
      if (result.result instanceof Response) {
        return result.result;
      }
      if (!isCreateServerFn) {
        result = result.result;
        if (result instanceof Response) {
          return result;
        }
      }
      if (isNotFound(result)) {
        return isNotFoundResponse(result);
      }
      return new Response(result !== void 0 ? tsrSerializer.stringify(result) : void 0, {
        status: getResponseStatus(getEvent()),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      if (error instanceof Response) {
        return error;
      }
      if (isNotFound(error)) {
        return isNotFoundResponse(error);
      }
      console.info();
      console.info("Server Fn Error!");
      console.info();
      console.error(error);
      console.info();
      return new Response(tsrSerializer.stringify(error), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  })();
  request.signal.removeEventListener("abort", abort);
  if (isRaw) {
    return response;
  }
  return response;
};
function isNotFoundResponse(error) {
  const {
    headers,
    ...rest
  } = error;
  return new Response(JSON.stringify(rest), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...headers || {}
    }
  });
}
function getStartResponseHeaders(opts) {
  const headers = mergeHeaders(
    getResponseHeaders(),
    {
      "Content-Type": "text/html; charset=UTF-8"
    },
    ...opts.router.state.matches.map((match) => {
      return match.headers;
    })
  );
  return headers;
}
function createStartHandler({
  createRouter: createRouter2
}) {
  let routeTreeModule = null;
  let startRoutesManifest = null;
  let processedServerRouteTree = void 0;
  return (cb) => {
    const originalFetch = globalThis.fetch;
    const startRequestResolver = async ({ request }) => {
      globalThis.fetch = async function(input, init) {
        function resolve(url2, requestOptions) {
          const fetchRequest = new Request(url2, requestOptions);
          return startRequestResolver({ request: fetchRequest });
        }
        function getOrigin() {
          return request.headers.get("Origin") || request.headers.get("Referer") || "http://localhost";
        }
        if (typeof input === "string" && input.startsWith("/")) {
          const url2 = new URL(input, getOrigin());
          return resolve(url2, init);
        } else if (typeof input === "object" && "url" in input && typeof input.url === "string" && input.url.startsWith("/")) {
          const url2 = new URL(input.url, getOrigin());
          return resolve(url2, init);
        }
        return originalFetch(input, init);
      };
      const url = new URL(request.url);
      const href = url.href.replace(url.origin, "");
      const APP_BASE = "/";
      const router = createRouter2();
      const history = createMemoryHistory({
        initialEntries: [href]
      });
      router.update({
        history
      });
      const response = await (async () => {
        try {
          if (false) ;
          const serverFnBase = joinPaths([
            APP_BASE,
            trimPath("/_serverFn"),
            "/"
          ]);
          if (href.startsWith(serverFnBase)) {
            return await handleServerAction({ request });
          }
          if (routeTreeModule === null) {
            try {
              routeTreeModule = await loadVirtualModule(
                VIRTUAL_MODULES.routeTree
              );
              if (routeTreeModule.serverRouteTree) {
                processedServerRouteTree = processRouteTree({
                  routeTree: routeTreeModule.serverRouteTree,
                  initRoute: (route, i) => {
                    route.init({
                      originalIndex: i
                    });
                  }
                });
              }
            } catch (e) {
              console.log(e);
            }
          }
          async function executeRouter() {
            const requestAcceptHeader = request.headers.get("Accept") || "*/*";
            const splitRequestAcceptHeader = requestAcceptHeader.split(",");
            const supportedMimeTypes = ["*/*", "text/html"];
            const isRouterAcceptSupported = supportedMimeTypes.some(
              (mimeType) => splitRequestAcceptHeader.some(
                (acceptedMimeType) => acceptedMimeType.trim().startsWith(mimeType)
              )
            );
            if (!isRouterAcceptSupported) {
              return json(
                {
                  error: "Only HTML requests are supported here"
                },
                {
                  status: 500
                }
              );
            }
            if (startRoutesManifest === null) {
              startRoutesManifest = await getStartManifest({
                basePath: APP_BASE
              });
            }
            attachRouterServerSsrUtils(router, startRoutesManifest);
            await router.load();
            if (router.state.redirect) {
              return router.state.redirect;
            }
            dehydrateRouter(router);
            const responseHeaders = getStartResponseHeaders({ router });
            const response2 = await cb({
              request,
              router,
              responseHeaders
            });
            return response2;
          }
          if (processedServerRouteTree) {
            const [_matchedRoutes, response2] = await handleServerRoutes({
              processedServerRouteTree,
              router,
              request,
              basePath: APP_BASE,
              executeRouter
            });
            if (response2) return response2;
          }
          const routerResponse = await executeRouter();
          return routerResponse;
        } catch (err) {
          if (err instanceof Response) {
            return err;
          }
          throw err;
        }
      })();
      if (isRedirect(response)) {
        if (isResolvedRedirect(response)) {
          if (request.headers.get("x-tsr-redirect") === "manual") {
            return json(
              {
                ...response.options,
                isSerializedRedirect: true
              },
              {
                headers: response.headers
              }
            );
          }
          return response;
        }
        if (response.options.to && typeof response.options.to === "string" && !response.options.to.startsWith("/")) {
          throw new Error(
            `Server side redirects must use absolute paths via the 'href' or 'to' options. Received: ${JSON.stringify(response.options)}`
          );
        }
        if (["params", "search", "hash"].some(
          (d) => typeof response.options[d] === "function"
        )) {
          throw new Error(
            `Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(
              response.options
            ).filter((d) => typeof response.options[d] === "function").map((d) => `"${d}"`).join(", ")}`
          );
        }
        const redirect = router.resolveRedirect(response);
        if (request.headers.get("x-tsr-redirect") === "manual") {
          return json(
            {
              ...response.options,
              isSerializedRedirect: true
            },
            {
              headers: response.headers
            }
          );
        }
        return redirect;
      }
      return response;
    };
    return requestHandler(startRequestResolver);
  };
}
async function handleServerRoutes(opts) {
  var _a, _b;
  const url = new URL(opts.request.url);
  const pathname = url.pathname;
  const serverTreeResult = getMatchedRoutes({
    pathname,
    basepath: opts.basePath,
    caseSensitive: true,
    routesByPath: opts.processedServerRouteTree.routesByPath,
    routesById: opts.processedServerRouteTree.routesById,
    flatRoutes: opts.processedServerRouteTree.flatRoutes
  });
  const routeTreeResult = opts.router.getMatchedRoutes(pathname, void 0);
  let response;
  let matchedRoutes = [];
  matchedRoutes = serverTreeResult.matchedRoutes;
  if (routeTreeResult.foundRoute) {
    if (serverTreeResult.matchedRoutes.length < routeTreeResult.matchedRoutes.length) {
      const closestCommon = [...routeTreeResult.matchedRoutes].reverse().find((r) => {
        return opts.processedServerRouteTree.routesById[r.id] !== void 0;
      });
      if (closestCommon) {
        let routeId = closestCommon.id;
        matchedRoutes = [];
        do {
          const route = opts.processedServerRouteTree.routesById[routeId];
          if (!route) {
            break;
          }
          matchedRoutes.push(route);
          routeId = (_a = route.parentRoute) == null ? void 0 : _a.id;
        } while (routeId);
        matchedRoutes.reverse();
      }
    }
  }
  if (matchedRoutes.length) {
    const middlewares = flattenMiddlewares(
      matchedRoutes.flatMap((r) => r.options.middleware).filter(Boolean)
    ).map((d) => d.options.server);
    if ((_b = serverTreeResult.foundRoute) == null ? void 0 : _b.options.methods) {
      const method = Object.keys(
        serverTreeResult.foundRoute.options.methods
      ).find(
        (method2) => method2.toLowerCase() === opts.request.method.toLowerCase()
      );
      if (method) {
        const handler = serverTreeResult.foundRoute.options.methods[method];
        if (handler) {
          if (typeof handler === "function") {
            middlewares.push(handlerToMiddleware(handler));
          } else {
            if (handler._options.middlewares && handler._options.middlewares.length) {
              middlewares.push(
                ...flattenMiddlewares(handler._options.middlewares).map(
                  (d) => d.options.server
                )
              );
            }
            if (handler._options.handler) {
              middlewares.push(handlerToMiddleware(handler._options.handler));
            }
          }
        }
      }
    }
    middlewares.push(handlerToMiddleware(opts.executeRouter));
    const ctx = await executeMiddleware(middlewares, {
      request: opts.request,
      context: {},
      params: serverTreeResult.routeParams,
      pathname
    });
    response = ctx.response;
  }
  return [matchedRoutes, response];
}
function handlerToMiddleware(handler) {
  return async ({ next: _next, ...rest }) => {
    const response = await handler(rest);
    if (response) {
      return { response };
    }
    return _next(rest);
  };
}
function executeMiddleware(middlewares, ctx) {
  let index = -1;
  const next = async (ctx2) => {
    index++;
    const middleware = middlewares[index];
    if (!middleware) return ctx2;
    const result = await middleware({
      ...ctx2,
      // Allow the middleware to call the next middleware in the chain
      next: async (nextCtx) => {
        const nextResult = await next({ ...ctx2, ...nextCtx });
        return Object.assign(ctx2, handleCtxResult(nextResult));
      }
      // Allow the middleware result to extend the return context
    }).catch((err) => {
      if (isSpecialResponse(err)) {
        return {
          response: err
        };
      }
      throw err;
    });
    return Object.assign(ctx2, handleCtxResult(result));
  };
  return handleCtxResult(next(ctx));
}
function handleCtxResult(result) {
  if (isSpecialResponse(result)) {
    return {
      response: result
    };
  }
  return result;
}
function isSpecialResponse(err) {
  return isResponse(err) || isRedirect(err);
}
function isResponse(response) {
  return response instanceof Response;
}
const AchievementId = {
  // Navigation achievements
  firstSteps: "first-steps",
  portfolioExplorer: "portfolio-explorer",
  aboutDiscoverer: "about-discoverer",
  contactReacher: "contact-reacher",
  resumeReader: "resume-reader",
  worldTraveler: "world-traveler",
  // Interaction achievements
  layoutExplorer: "layout-explorer",
  scrollMaster: "scroll-master",
  resumeDownloader: "resume-downloader",
  emailSender: "email-sender",
  projectExplorer: "project-explorer",
  phoneMaster: "phone-master",
  // Exploration achievements
  techSearcher: "tech-searcher",
  techFilterer: "tech-filterer",
  // Social achievements
  socialButterfly: "social-butterfly",
  codeExplorer: "code-explorer",
  // Mastery achievements
  detailSeeker: "detail-seeker",
  completionist: "completionist",
  deepDiver: "deep-diver",
  // Easter egg achievements
  gamerSpirit: "gamer-spirit",
  heartFinder: "heart-finder"
};
const achievements = {
  navigation: {
    firstSteps: {
      id: AchievementId.firstSteps,
      title: "The Cube",
      description: "Pretty cool huh?",
      icon: Home,
      unlocked: false,
      category: "navigation",
      rarity: "common",
      unlockCondition: "Spend 20 seconds on the Intro Page",
      points: 10
    },
    portfolioExplorer: {
      id: AchievementId.portfolioExplorer,
      title: "Portfolio Explorer",
      description: "Thanks for checking out my portfolio!",
      icon: Palette,
      unlocked: false,
      category: "navigation",
      rarity: "common",
      unlockCondition: "Navigate to the portfolio page",
      points: 15
    },
    aboutDiscoverer: {
      id: AchievementId.aboutDiscoverer,
      title: "About Discoverer",
      description: "Thanks for getting to know me a bit!",
      icon: User,
      unlocked: false,
      category: "navigation",
      rarity: "common",
      unlockCondition: "Navigate to the about page",
      points: 15
    },
    contactReacher: {
      id: AchievementId.contactReacher,
      title: "Contact Reacher",
      description: "Let's get in touch!",
      icon: Mail,
      unlocked: false,
      category: "navigation",
      rarity: "common",
      unlockCondition: "Navigate to the contact page",
      points: 15
    },
    resumeReader: {
      id: AchievementId.resumeReader,
      title: "Resume Reader",
      description: "If you like what you see, feel free to get in touch!",
      icon: FileText,
      unlocked: false,
      category: "navigation",
      rarity: "common",
      unlockCondition: "Navigate to the resume page",
      points: 15
    },
    worldTraveler: {
      id: AchievementId.worldTraveler,
      title: "World Traveler",
      description: "This application was not simple to develop, thanks so much for exploring every part of it!",
      icon: Globe,
      unlocked: false,
      category: "navigation",
      rarity: "rare",
      unlockCondition: "Visit all pages in the application",
      points: 50
    }
  },
  interaction: {
    layoutExplorer: {
      id: AchievementId.layoutExplorer,
      title: "Layout Explorer",
      description: "Variety is the spice of life!",
      icon: Grid3X3,
      unlocked: false,
      category: "interaction",
      rarity: "rare",
      unlockCondition: "Switch between all portfolio layout options",
      points: 60
    },
    scrollMaster: {
      id: AchievementId.scrollMaster,
      title: "Scroll Master",
      description: "You've scrolled through the entire portfolio.",
      icon: ArrowDown,
      unlocked: false,
      category: "interaction",
      rarity: "common",
      unlockCondition: "Scroll to the bottom of the portfolio page",
      points: 25
    },
    resumeDownloader: {
      id: AchievementId.resumeDownloader,
      title: "Resume Downloader",
      description: "Thanks for your interest! Feel free to get in touch.",
      icon: Download,
      unlocked: false,
      category: "interaction",
      rarity: "common",
      unlockCondition: "Download the resume PDF",
      points: 40
    },
    emailSender: {
      id: AchievementId.emailSender,
      title: "Email Sender",
      description: "I'm excited to hear from you!",
      icon: Mail,
      unlocked: false,
      category: "interaction",
      rarity: "common",
      unlockCondition: "Click on email contact link",
      points: 25
    },
    projectExplorer: {
      id: AchievementId.projectExplorer,
      title: "Project Explorer",
      description: "Thanks for checking out my side projects. I hope you like what you see!",
      icon: Eye,
      unlocked: false,
      category: "interaction",
      rarity: "rare",
      unlockCondition: "Clicked 4 different project links",
      points: 75
    },
    phoneMaster: {
      id: AchievementId.phoneMaster,
      title: "Phone Master",
      description: "You've flicked all the phones! The stack reassembles just like magic.",
      icon: Smartphone,
      unlocked: false,
      category: "interaction",
      rarity: "rare",
      unlockCondition: "Flick all phones in the interactive stack",
      points: 80
    }
  },
  exploration: {
    techSearcher: {
      id: AchievementId.techSearcher,
      title: "Tech Searcher",
      description: "Did you find what you're looking for?",
      icon: Search,
      unlocked: false,
      category: "exploration",
      rarity: "common",
      unlockCondition: "Use the tech grid search feature",
      points: 25
    },
    techFilterer: {
      id: AchievementId.techFilterer,
      title: "So Many Buttons",
      description: "You really like seeing the tech grid animations huh!?",
      icon: Target,
      unlocked: false,
      category: "exploration",
      rarity: "common",
      unlockCondition: "Change filters 7 times in the tech grid",
      points: 25
    }
  },
  social: {
    socialButterfly: {
      id: AchievementId.socialButterfly,
      title: "Social Butterfly",
      description: "Networking is everything!",
      icon: Users,
      unlocked: false,
      category: "social",
      rarity: "rare",
      unlockCondition: "Click on 3 social media links",
      points: 90
    },
    codeExplorer: {
      id: AchievementId.codeExplorer,
      title: "Code Explorer",
      description: "You've visited the GitHub repository. The code is open for exploration!",
      icon: Github,
      unlocked: false,
      category: "social",
      rarity: "common",
      unlockCondition: "Click on the GitHub repository link",
      points: 45
    }
  },
  mastery: {
    detailSeeker: {
      id: AchievementId.detailSeeker,
      title: "Detail Seeker",
      description: "You've found all the easter eggs! Your attention to detail is impressive.",
      icon: Eye,
      unlocked: false,
      category: "mastery",
      rarity: "epic",
      unlockCondition: "Find all the hidden interactive elements",
      points: 100,
      secret: true
    },
    completionist: {
      id: AchievementId.completionist,
      title: "Completionist",
      description: "You've unlocked all achievements! You're a true portfolio master.",
      icon: Crown,
      unlocked: false,
      category: "mastery",
      rarity: "legendary",
      unlockCondition: "Unlock every achievement in the portfolio",
      points: 500
    },
    deepDiver: {
      id: AchievementId.deepDiver,
      title: "Deep Diver",
      description: "You've spent significant time exploring. I appreciate your thoroughness!",
      icon: Timer,
      unlocked: false,
      category: "mastery",
      rarity: "epic",
      unlockCondition: "Spend 5 minutes exploring this application",
      points: 120
    }
  },
  easterEggs: {
    gamerSpirit: {
      id: AchievementId.gamerSpirit,
      title: "WHEEEEEEEEEeeeeeeeeeeeee",
      description: "Wheeeeeeeeeeeeeeeeeeeeeee",
      icon: Gamepad2,
      unlocked: false,
      category: "easter-eggs",
      rarity: "epic",
      unlockCondition: "Weeeeeeeeeeeeeeeeeeeeee",
      points: 150,
      secret: true
    },
    heartFinder: {
      id: AchievementId.heartFinder,
      title: "Heart Finder",
      description: "You found the heart easter egg! ❤️ Because passion drives great code.",
      icon: Heart,
      unlocked: false,
      category: "easter-eggs",
      rarity: "epic",
      unlockCondition: "Find the hidden heart reference",
      points: 150,
      secret: true
    }
  }
};
const allAchievements = Object.values(achievements).reduce(
  (acc, category) => {
    return { ...acc, ...category };
  },
  {}
);
const getAchievementsArray = () => {
  return Object.values(allAchievements);
};
const rarityColors = {
  common: "border-gray-400 bg-gray-900/90",
  rare: "border-blue-400 bg-blue-900/90",
  epic: "border-purple-400 bg-purple-900/90",
  legendary: "border-yellow-400 bg-yellow-900/90"
};
const rarityIcons = {
  common: "⭐",
  rare: "⚡",
  epic: "👑",
  legendary: "💎"
};
const shownNotifications = /* @__PURE__ */ new Set();
function showAchievementNotification(achievement) {
  if (shownNotifications.has(achievement.id)) {
    return;
  }
  shownNotifications.add(achievement.id);
  const IconComponent = achievement.icon;
  toast.success(
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-6 h-6 text-white" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-white text-sm", children: achievement.title }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-300 text-xs", children: achievement.description }),
        /* @__PURE__ */ jsxs("div", { className: "text-purple-300 text-xs mt-1", children: [
          "+",
          achievement.points,
          " points"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-2xl animate-pulse", children: rarityIcons[achievement.rarity] })
    ] }),
    {
      duration: 4e3,
      className: `border-2 ${rarityColors[achievement.rarity]} backdrop-blur-md`,
      style: {
        background: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(20,20,20,0.9))",
        borderColor: achievement.rarity === "common" ? "#9ca3af" : achievement.rarity === "rare" ? "#60a5fa" : achievement.rarity === "epic" ? "#a78bfa" : "#fbbf24"
      }
    }
  );
}
const countedAchievements = /* @__PURE__ */ new Set();
function useAchievementsLogic() {
  const [achievements2, setAchievements] = useState(
    {}
  );
  const [isInitialized, setIsInitialized] = useState(false);
  const [newAchievementsVisible, setNewAchievementsVisible] = useState(0);
  const [explorationTime, setExplorationTime] = useState(0);
  const intervalRef = useRef(null);
  const checkComplexAchievements = useCallback(
    (currentAchievements) => {
      const achievementsToUnlock = [];
      const navigationAchievements = [
        AchievementId.portfolioExplorer,
        AchievementId.aboutDiscoverer,
        AchievementId.contactReacher,
        AchievementId.resumeReader
      ];
      const allNavigationUnlocked = navigationAchievements.every(
        (id) => currentAchievements[id]?.unlocked
      );
      if (allNavigationUnlocked && !currentAchievements[AchievementId.worldTraveler]?.unlocked) {
        achievementsToUnlock.push(AchievementId.worldTraveler);
      }
      const easterEggAchievements = [
        AchievementId.gamerSpirit,
        AchievementId.heartFinder
      ];
      const allEasterEggsUnlocked = easterEggAchievements.every(
        (id) => currentAchievements[id]?.unlocked
      );
      if (allEasterEggsUnlocked && !currentAchievements[AchievementId.detailSeeker]?.unlocked) {
        achievementsToUnlock.push(AchievementId.detailSeeker);
      }
      const allAchievementIds = Object.values(AchievementId);
      const otherAchievements = allAchievementIds.filter(
        (id) => id !== AchievementId.completionist
      );
      const allOtherAchievementsUnlocked = otherAchievements.every(
        (id) => currentAchievements[id]?.unlocked
      );
      if (allOtherAchievementsUnlocked && !currentAchievements[AchievementId.completionist]?.unlocked) {
        achievementsToUnlock.push(AchievementId.completionist);
      }
      return achievementsToUnlock;
    },
    []
  );
  useEffect(() => {
    if (isInitialized) return;
    const defaultAchievements = getAchievementsArray().reduce(
      (acc, achievement) => {
        acc[achievement.id] = achievement;
        return acc;
      },
      {}
    );
    const saved = localStorage.getItem("portfolio-achievements-unlocked");
    if (saved) {
      try {
        const unlockedState = JSON.parse(saved);
        const restoredAchievements = {};
        Object.keys(defaultAchievements).forEach((id) => {
          const defaultAchievement = defaultAchievements[id];
          const savedState = unlockedState[id];
          if (defaultAchievement) {
            restoredAchievements[id] = {
              ...defaultAchievement,
              unlocked: savedState?.unlocked || false,
              unlockedAt: savedState?.unlockedAt ? new Date(savedState.unlockedAt) : void 0
            };
          }
        });
        setAchievements(restoredAchievements);
      } catch {
        setAchievements(defaultAchievements);
      }
    } else {
      setAchievements(defaultAchievements);
    }
    const savedCount = localStorage.getItem("portfolio-achievements-new-count");
    if (savedCount) {
      try {
        setNewAchievementsVisible(parseInt(savedCount, 10));
      } catch {
        setNewAchievementsVisible(0);
      }
    }
    setIsInitialized(true);
  }, [isInitialized]);
  useEffect(() => {
    if (!isInitialized || Object.keys(achievements2).length === 0) return;
    const unlockedState = {};
    Object.keys(achievements2).forEach((id) => {
      const achievement = achievements2[id];
      if (achievement) {
        unlockedState[id] = {
          unlocked: achievement.unlocked,
          unlockedAt: achievement.unlockedAt?.toISOString()
        };
      }
    });
    localStorage.setItem(
      "portfolio-achievements-unlocked",
      JSON.stringify(unlockedState)
    );
  }, [achievements2, isInitialized]);
  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem(
      "portfolio-achievements-new-count",
      newAchievementsVisible.toString()
    );
  }, [newAchievementsVisible, isInitialized]);
  useEffect(() => {
    if (!isInitialized) return;
    intervalRef.current = setInterval(() => {
      setExplorationTime((prevTime) => {
        const newTime = prevTime + 1;
        return newTime;
      });
    }, 1e3);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isInitialized]);
  const unlockAchievement = useCallback(
    (id) => {
      setAchievements((prev) => {
        const achievement = prev[id];
        if (achievement && !achievement.unlocked) {
          const updated = {
            ...prev,
            [id]: {
              ...achievement,
              unlocked: true,
              unlockedAt: /* @__PURE__ */ new Date()
            }
          };
          if (!countedAchievements.has(id)) {
            showAchievementNotification(achievement);
            setNewAchievementsVisible((count) => count + 1);
            countedAchievements.add(id);
          }
          const complexAchievementsToUnlock = checkComplexAchievements(updated);
          let finalUpdated = updated;
          complexAchievementsToUnlock.forEach((complexId) => {
            const complexAchievement = finalUpdated[complexId];
            if (complexAchievement && !complexAchievement.unlocked) {
              finalUpdated = {
                ...finalUpdated,
                [complexId]: {
                  ...complexAchievement,
                  unlocked: true,
                  unlockedAt: /* @__PURE__ */ new Date()
                }
              };
              if (!countedAchievements.has(complexId)) {
                const complexAchievement2 = finalUpdated[complexId];
                if (complexAchievement2) {
                  showAchievementNotification(complexAchievement2);
                  setNewAchievementsVisible((count) => count + 1);
                  countedAchievements.add(complexId);
                }
              }
            }
          });
          return finalUpdated;
        }
        return prev;
      });
    },
    [checkComplexAchievements]
  );
  useEffect(() => {
    if (explorationTime >= 300 && isInitialized) {
      const deepDiverAchievement = achievements2[AchievementId.deepDiver];
      if (deepDiverAchievement && !deepDiverAchievement.unlocked) {
        unlockAchievement(AchievementId.deepDiver);
      }
    }
  }, [explorationTime, achievements2, isInitialized, unlockAchievement]);
  const markAchievementsAsViewed = useCallback(() => {
    setNewAchievementsVisible(0);
  }, []);
  const unlockedCount = Object.values(achievements2).filter(
    (a) => a.unlocked
  ).length;
  const totalPoints = Object.values(achievements2).filter((a) => a.unlocked).reduce((sum, a) => sum + a.points, 0);
  return {
    achievements: achievements2,
    unlockAchievement,
    unlockedCount,
    totalPoints,
    newAchievementsVisible,
    markAchievementsAsViewed
  };
}
const AchievementsContext = createContext(
  void 0
);
function AchievementsProvider({ children }) {
  const achievementsLogic = useAchievementsLogic();
  return /* @__PURE__ */ jsx(AchievementsContext, { value: achievementsLogic, children });
}
function useAchievements() {
  const context = useContext(AchievementsContext);
  if (context === void 0) {
    throw new Error(
      "useAchievements must be used within an AchievementsProvider"
    );
  }
  return context;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setIsIntersecting(entry.isIntersecting);
      }
    }, options);
    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);
  return isIntersecting;
}
function useResizeObserver(threshold, dimension = "width", operator = "gt") {
  const ref = useRef(null);
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const checkSize = () => {
      const size = dimension === "width" ? element.offsetWidth : element.offsetHeight;
      let meetsThreshold = false;
      switch (operator) {
        case "gt":
          meetsThreshold = size > threshold;
          break;
        case "gte":
          meetsThreshold = size >= threshold;
          break;
        case "lt":
          meetsThreshold = size < threshold;
          break;
        case "lte":
          meetsThreshold = size <= threshold;
          break;
        case "eq":
          meetsThreshold = size === threshold;
          break;
      }
      setIsAboveThreshold(meetsThreshold);
    };
    checkSize();
    const resizeObserver = new ResizeObserver(checkSize);
    resizeObserver.observe(element);
    return () => {
      resizeObserver.disconnect();
    };
  }, [threshold, dimension, operator]);
  return [ref, isAboveThreshold];
}
function useScrollToRef() {
  const scrollToRef = useCallback(
    (ref, options) => {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          ...options
        });
      }
    },
    []
  );
  return scrollToRef;
}
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function Dialog({
  open,
  ...props
}) {
  useEffect(() => {
    if (open) {
      document.documentElement.style.scrollbarGutter = "stable";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.scrollbarGutter = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.scrollbarGutter = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Root,
    {
      "data-slot": "dialog",
      modal: true,
      open,
      ...props
    }
  );
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-4 left-4 right-4 bottom-4 z-50 grid w-auto h-auto max-w-none max-h-none translate-x-0 translate-y-0 gap-4 border-0 shadow-lg duration-200 sm:top-[50%] sm:left-[50%] sm:right-auto sm:bottom-auto sm:w-full sm:max-w-[calc(100%-2rem)] sm:max-h-[calc(100%-2rem)] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-lg sm:border sm:p-6",
          className
        ),
        onOpenAutoFocus: (e) => e.preventDefault(),
        onCloseAutoFocus: (e) => e.preventDefault(),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx(XIcon, {}),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
const getRarityColor = (rarity) => {
  switch (rarity) {
    case "common":
      return "border-gray-400 text-gray-300";
    case "rare":
      return "border-blue-400 text-blue-300";
    case "epic":
      return "border-purple-400 text-purple-300";
    case "legendary":
      return "border-yellow-400 text-yellow-300";
    default:
      return "border-gray-400 text-gray-300";
  }
};
const getRarityIcon = (rarity) => {
  switch (rarity) {
    case "common":
      return /* @__PURE__ */ jsx(Star, { className: "w-4 h-4" });
    case "rare":
      return /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4" });
    case "epic":
      return /* @__PURE__ */ jsx(Crown, { className: "w-4 h-4" });
    case "legendary":
      return /* @__PURE__ */ jsx(Diamond, { className: "w-4 h-4" });
    default:
      return /* @__PURE__ */ jsx(Star, { className: "w-4 h-4" });
  }
};
const categories = [
  "navigation",
  "interaction",
  "exploration",
  "mastery",
  "social",
  "easter-eggs"
];
function AchievementsDialog({
  isOpen,
  onOpenChange,
  achievements: achievements2,
  unlockedCount,
  totalPoints
}) {
  const achievementsArray = Object.values(achievements2);
  return /* @__PURE__ */ jsx(Dialog, { open: isOpen, onOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-4xl max-h-[80vh] bg-black/95 backdrop-blur-md border-white/20 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] isolate shadow-2xl flex flex-col w-[95vw] h-[90vh] md:w-auto md:h-auto md:max-h-[80vh] md:max-w-4xl", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { className: "flex-shrink-0 p-4 md:p-0 border-b border-white/10 pb-4", children: [
      /* @__PURE__ */ jsx(DialogTitle, { className: "font-mohave text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wide", children: "Achievements" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 md:gap-2", children: [
          /* @__PURE__ */ jsx(Trophy, { className: "w-4 h-4 md:w-5 md:h-5 text-yellow-400" }),
          /* @__PURE__ */ jsxs("span", { className: "text-white font-semibold text-sm md:text-base", children: [
            unlockedCount,
            " / ",
            achievementsArray.length,
            " Unlocked"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 md:gap-2", children: [
          /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 md:w-5 md:h-5 text-purple-400" }),
          /* @__PURE__ */ jsxs("span", { className: "text-white font-semibold text-sm md:text-base", children: [
            totalPoints,
            " Points"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto p-4 md:p-6 pt-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-6 md:space-y-8", children: categories.map((category) => {
      const categoryAchievements = achievementsArray.filter(
        (a) => a.category === category
      );
      const unlockedInCategory = categoryAchievements.filter(
        (a) => a.unlocked
      ).length;
      return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-mohave text-lg md:text-xl font-bold text-white uppercase tracking-wide", children: category.charAt(0).toUpperCase() + category.slice(1) }),
          /* @__PURE__ */ jsxs("span", { className: "text-gray-400 text-sm md:text-base", children: [
            unlockedInCategory,
            " / ",
            categoryAchievements.length
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4", children: categoryAchievements.map((achievement) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `relative p-3 md:p-4 rounded-lg border transition-all duration-300 ${achievement.unlocked ? "border-white/30 bg-white/5 hover:bg-white/10" : "border-white/10 bg-white/2 opacity-60"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 md:gap-3", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${achievement.unlocked ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-600"}`,
                    children: achievement.unlocked ? /* @__PURE__ */ jsx(achievement.icon, { className: "w-4 h-4 md:w-5 md:h-5 text-white" }) : /* @__PURE__ */ jsx(Trophy, { className: "w-4 h-4 md:w-5 md:h-5 text-gray-400" })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 pr-8 md:pr-12", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 md:gap-2 mb-1 md:mb-2 flex-wrap", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white text-xs md:text-sm", children: achievement.title }),
                    /* @__PURE__ */ jsxs(
                      Badge,
                      {
                        variant: "outline",
                        className: `text-xs ${getRarityColor(achievement.rarity)}`,
                        children: [
                          getRarityIcon(achievement.rarity),
                          /* @__PURE__ */ jsx("span", { className: "ml-1 hidden sm:inline", children: achievement.rarity })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-gray-300 mb-2 md:mb-3 leading-relaxed", children: achievement.description }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 leading-relaxed", children: achievement.unlockCondition }),
                  achievement.unlocked && achievement.unlockedAt && /* @__PURE__ */ jsxs("div", { className: "mt-1 md:mt-2 text-xs text-green-400", children: [
                    "Unlocked:",
                    " ",
                    achievement.unlockedAt.toLocaleDateString()
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-2 md:bottom-3 right-2 md:right-3", children: /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-500/20 border-purple-500/50 text-purple-300 text-xs px-1 md:px-2 py-0.5 md:py-1", children: [
                achievement.points,
                " pts"
              ] }) })
            ]
          },
          achievement.id
        )) })
      ] }, category);
    }) }) })
  ] }) });
}
const buttonVariants = cva(
  "font-mohave inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground enhanced-shadow hover:bg-primary/90",
        destructive: "bg-destructive text-white enhanced-shadow hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border-2 bg-background enhanced-shadow hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "gradient-border bg-black text-white font-bold text-lg px-8 py-4 enhanced-shadow hover:scale-105 transition-all duration-300 border-transparent tracking-widest uppercase shadow-2xl hover-lift",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-lg px-6 has-[>svg]:px-4",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  Icon,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      style: { lineHeight: "normal" },
      ...props,
      children: [
        Icon && Icon,
        /* @__PURE__ */ jsx("span", { style: { transform: "translateY(1px)" }, children })
      ]
    }
  );
}
function AchievementsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    achievements: achievements2,
    unlockedCount,
    totalPoints,
    newAchievementsVisible,
    markAchievementsAsViewed
  } = useAchievements();
  const handleOpenModal = () => {
    setIsOpen(true);
    markAchievementsAsViewed();
  };
  const unviewedCount = newAchievementsVisible;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: handleOpenModal,
        className: "fixed top-4 right-4 z-50 w-14 h-14 p-0 rounded-full bg-black/20 backdrop-blur-xl border-2 border-transparent hover:scale-110 transition-all duration-300 group shadow-2xl",
        style: {
          background: "linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899, #f59e0b, #10b981) border-box"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full flex items-center justify-center p-0", children: [
          /* @__PURE__ */ jsx(Trophy, { className: "text-white", style: { height: 20, width: 20 } }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          unviewedCount > 0 && /* @__PURE__ */ jsx("div", { className: "absolute -top-5 -right-4 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse border-2 border-white/20 shadow-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-xs font-bold", children: unviewedCount }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      AchievementsDialog,
      {
        isOpen,
        onOpenChange: setIsOpen,
        achievements: achievements2,
        unlockedCount,
        totalPoints
      }
    )
  ] });
}
const FadeTransitionContext = createContext({
  isFadingOut: false,
  triggerFadeTransition: () => {
  },
  fadeInDuration: 800,
  fadeOutDuration: 1e3,
  fadeInDelay: 200
});
function FadeTransitionProvider({ children }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();
  const fadeInDuration = 800;
  const fadeOutDuration = 1e3;
  const fadeInDelay = 200;
  const triggerFadeTransition = useCallback(
    (to) => {
      setIsFadingOut(true);
      setTimeout(() => {
        navigate({
          to
        });
        setIsFadingOut(false);
      }, fadeOutDuration);
    },
    [navigate]
  );
  return /* @__PURE__ */ jsx(
    FadeTransitionContext,
    {
      value: {
        isFadingOut,
        triggerFadeTransition,
        fadeInDuration,
        fadeOutDuration,
        fadeInDelay
      },
      children
    }
  );
}
function useFadeTransition() {
  return useContext(FadeTransitionContext);
}
const InternalLink = ({
  to,
  children,
  className,
  style,
  onClick
}) => {
  const { triggerFadeTransition } = useFadeTransition();
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
      triggerFadeTransition(to);
    },
    [to, onClick, triggerFadeTransition]
  );
  return /* @__PURE__ */ jsx("a", { href: to, onClick: handleClick, className, style, children });
};
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-black/80 backdrop-blur-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-white/10 data-[state=open]:text-white data-[state=open]:focus:bg-white/10 data-[state=open]:bg-white/10 focus-visible:ring-ring/50 outline-none transition-all duration-300 focus-visible:ring-[3px] focus-visible:outline-1 shadow-lg"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenuPrimitive.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx(
          ChevronDownIcon,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenuPrimitive.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-black/90 group-data-[viewport=false]/navigation-menu:text-white group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-xl group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:border-white/20 group-data-[viewport=false]/navigation-menu:shadow-2xl group-data-[viewport=false]/navigation-menu:backdrop-blur-md group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-black/90 text-white backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl border border-white/20 shadow-2xl md:w-[var(--radix-navigation-menu-viewport-width)]",
            className
          ),
          ...props
        }
      )
    }
  );
}
const routes = [
  {
    title: "Intro Page",
    href: "/",
    description: "The 3D landing page of my portfolio",
    icon: Code2
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    description: "Check out what I've built!",
    icon: Briefcase
  },
  {
    title: "About",
    href: "/about",
    description: "Learn more about my background and skills",
    icon: User
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch!",
    icon: Mail
  },
  {
    title: "View Resume",
    href: "/resume",
    description: "View or download my resume",
    icon: FileText
  }
];
function NavigationListItem({
  title,
  children,
  href,
  icon: Icon,
  isActive = false,
  onNavigate,
  ...props
}) {
  return /* @__PURE__ */ jsx("li", { ...props, children: /* @__PURE__ */ jsxs(
    InternalLink,
    {
      to: href,
      onClick: onNavigate,
      className: cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300",
        isActive ? "bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 border border-white/20" : "hover:bg-gradient-to-r hover:from-white/5 hover:to-white/10 focus:bg-gradient-to-r focus:from-white/5 focus:to-white/10"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-mohave font-semibold leading-none text-white tracking-wide", children: [
          /* @__PURE__ */ jsx(
            Icon,
            {
              className: cn("text-white", isActive ? "h-5 w-5" : "h-4 w-4")
            }
          ),
          title
        ] }),
        /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm leading-snug text-gray-400 font-inter", children })
      ]
    }
  ) });
}
function Navigation({ isScrolled = false }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigationMenuRef = useRef(null);
  const activeRoute = routes.find((route) => route.href === currentPath);
  const handleNavigate = () => {
    if (navigationMenuRef.current) {
      const trigger = navigationMenuRef.current.querySelector(
        '[data-state="open"]'
      );
      if (trigger) {
        trigger.click();
      }
    }
  };
  return /* @__PURE__ */ jsx(NavigationMenu, { ref: navigationMenuRef, viewport: false, children: /* @__PURE__ */ jsx(NavigationMenuList, { children: /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
    /* @__PURE__ */ jsx(
      NavigationMenuTrigger,
      {
        className: cn(
          "font-mohave font-semibold text-sm tracking-wide",
          isScrolled && "rounded-tl-none rounded-tr-none rounded-bl-none"
        ),
        children: "Navigation"
      }
    ),
    /* @__PURE__ */ jsx(
      NavigationMenuContent,
      {
        className: cn(isScrolled && "!rounded-tl-none !rounded-bl-none"),
        children: /* @__PURE__ */ jsxs("ul", { className: "grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: [
          /* @__PURE__ */ jsx("li", { className: "row-span-3", children: /* @__PURE__ */ jsx(
            InternalLink,
            {
              to: activeRoute?.href || "/",
              onClick: handleNavigate,
              className: "flex h-full w-full flex-col justify-center rounded-xl p-6 no-underline outline-none select-none focus:shadow-md border border-white/20 transition-all duration-300 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20",
              children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: activeRoute && /* @__PURE__ */ jsx(activeRoute.icon, { className: "h-16 w-16 text-white" }) }),
                /* @__PURE__ */ jsx("div", { className: "text-xl font-mohave font-bold text-white tracking-wide mb-3", children: activeRoute?.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm leading-tight font-inter", children: activeRoute?.description })
              ] })
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: routes.filter((route) => route.href !== currentPath).map((route) => /* @__PURE__ */ jsx(
            NavigationListItem,
            {
              href: route.href,
              title: route.title,
              icon: route.icon,
              onNavigate: handleNavigate,
              children: route.description
            },
            route.href
          )) })
        ] })
      }
    )
  ] }) }) });
}
function AppControlsHeader() {
  const sentinelRef = useRef(null);
  const isAtTop = useIntersectionObserver(sentinelRef, {
    rootMargin: "0px",
    threshold: 1
  });
  const isScrolled = !isAtTop;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { ref: sentinelRef, className: "absolute top-0 left-0 w-full h-px" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled ? "top-0 left-0" : "top-8 left-8"
        ),
        children: /* @__PURE__ */ jsx(Navigation, { isScrolled })
      }
    ),
    /* @__PURE__ */ jsx(AchievementsButton, {})
  ] });
}
const Fade = ({
  children,
  fadeInDuration,
  fadeOutDuration = 0,
  fadeInDelay = 0,
  isFadingOut = false,
  className = ""
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isFadingOut) {
      setVisible(false);
    } else {
      if (fadeInDelay) {
        const timer = setTimeout(() => setVisible(true), fadeInDelay);
        return () => clearTimeout(timer);
      } else {
        setVisible(true);
      }
    }
  }, [isFadingOut, fadeInDelay]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `transition-opacity ${className}`,
      style: {
        opacity: visible ? 1 : 0,
        transitionProperty: "opacity",
        transitionDuration: `${isFadingOut ? fadeOutDuration : fadeInDuration}ms`,
        transitionDelay: isFadingOut ? "0ms" : `${fadeInDelay}ms`
      },
      children
    }
  );
};
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme: "dark",
      className: "toaster group",
      position: "top-center",
      toastOptions: {
        style: {
          background: "linear-gradient(135deg, rgba(0,0,0,0.95), rgba(20,20,20,0.95))",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          color: "white",
          fontFamily: "Inter, sans-serif"
        }
      },
      style: {
        "--normal-bg": "rgba(0,0,0,0.95)",
        "--normal-text": "white",
        "--normal-border": "rgba(255,255,255,0.1)"
      },
      ...props
    }
  );
};
const appCss = "/assets/app-DzfrXeLG.css";
const Route$5 = createRootRoute({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      title: "Jordan Winslow - Software Engineer & Frontend Expert Portfolio"
    }],
    links: [{
      rel: "stylesheet",
      href: appCss
    }]
  }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(FadeTransitionProvider, { children: /* @__PURE__ */ jsx(AchievementsProvider, { children: /* @__PURE__ */ jsxs(RootDocument, { children: [
    /* @__PURE__ */ jsx(AppControlsHeader, {}),
    /* @__PURE__ */ jsx(FadeTransitionOutlet, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] }) }) });
}
function FadeTransitionOutlet() {
  const {
    isFadingOut,
    fadeInDuration,
    fadeOutDuration,
    fadeInDelay
  } = useFadeTransition();
  return /* @__PURE__ */ jsx(Fade, { fadeInDuration, fadeOutDuration, fadeInDelay, isFadingOut, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({
  children
}) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$4 = () => import('./resume-CoHoTcm2.mjs');
const Route$4 = createFileRoute("/resume")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import('./portfolio-CuW7XWBc.mjs');
const Route$3 = createFileRoute("/portfolio")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import('./contact-DuGr1qgi.mjs');
const Route$2 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import('./about-CU75TaoN.mjs');
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import('./index-CX14zZeZ.mjs');
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ResumeRoute = Route$4.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$5
});
const PortfolioRoute = Route$3.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  PortfolioRoute,
  ResumeRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const routeTree_gen = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  routeTree
}, Symbol.toStringTag, { value: "Module" }));
function createRouter() {
  const router = createRouter$1({
    routeTree,
    scrollRestoration: true
  });
  return router;
}
const serverEntry$1 = createStartHandler({
  createRouter
})(defaultStreamHandler);
const serverEntry = defineEventHandler(function(event) {
  const request = toWebRequest(event);
  return serverEntry$1({ request });
});

export { AchievementId as A, Button as B, Dialog as D, Fade as F, InternalLink as I, DialogContent as a, useResizeObserver as b, cn as c, useScrollToRef as d, serverEntry as default, useIntersectionObserver as e, Badge as f, useAchievements as u };
//# sourceMappingURL=ssr.mjs.map
