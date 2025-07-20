// vite.config.js
import * as path from "node:path";
import { defineConfig } from "file:///C:/projects/tiptap-markdown-3/tiptap-markdown-3/node_modules/vite/dist/node/index.js";
import { babel } from "file:///C:/projects/tiptap-markdown-3/tiptap-markdown-3/node_modules/@rollup/plugin-babel/dist/index.js";

// package.json
var package_default = {
  name: "tiptap-markdown-3",
  version: "0.8.11",
  description: "Edit markdown content in tiptap editor.",
  scripts: {
    test: "vitest",
    dev: "vite example",
    build: "vite build",
    "build:example": "vite build example",
    preview: "vite preview example",
    preversion: "npm run build",
    "update:tiptap": "update-by-scope @tiptap"
  },
  workspaces: [
    "example"
  ],
  main: "dist/tiptap-markdown.umd.js",
  module: "dist/tiptap-markdown.es.js",
  type: "module",
  sideEffects: false,
  exports: {
    ".": {
      import: "./dist/tiptap-markdown.es.js",
      require: "./dist/tiptap-markdown.umd.js",
      types: "./index.d.ts"
    }
  },
  files: [
    "src",
    "dist",
    "index.d.ts"
  ],
  browserslist: [
    "defaults",
    "not IE 11"
  ],
  repository: {
    type: "git",
    url: "git+https://github.com/shjacobs303/tiptap-markdown-3.git"
  },
  bugs: {
    url: "https://github.com/shjacobs303/tiptap-markdown-3/issues"
  },
  types: "index.d.ts",
  author: "Simon Jacobson",
  license: "MIT",
  dependencies: {
    "@types/markdown-it": "^13.0.7",
    "markdown-it": "^14.1.0",
    "markdown-it-task-lists": "^2.1.1",
    "prosemirror-markdown": "^1.11.1"
  },
  peerDependencies: {
    "@tiptap/core": "^3.0.0-beta"
  },
  devDependencies: {
    "@babel/core": "^7.23.2",
    "@babel/preset-env": "^7.23.2",
    "@rollup/plugin-babel": "^5.3.1",
    "@tiptap/core": "^3.0.0-beta.14",
    "@tiptap/extension-highlight": "^3.0.0-beta.14",
    "@tiptap/extension-image": "^3.0.0-beta.14",
    "@tiptap/extension-link": "^3.0.0-beta.14",
    "@tiptap/extension-table": "^3.0.0-beta.14",
    "@tiptap/extension-table-cell": "^3.0.0-beta.14",
    "@tiptap/extension-table-header": "^3.0.0-beta.14",
    "@tiptap/extension-table-row": "^3.0.0-beta.14",
    "@tiptap/extension-task-item": "^3.0.0-beta.14",
    "@tiptap/extension-task-list": "^3.0.0-beta.14",
    "@tiptap/extension-underline": "^3.0.0-beta.14",
    "@tiptap/pm": "^3.0.0-beta.14",
    "@tiptap/starter-kit": "^3.0.0-beta.14",
    "@tiptap/vue-3": "^3.0.0-beta.14",
    "@types/jest": "^28.1.7",
    "jest-serializer-html": "^7.1.0",
    jsdom: "^22.1.0",
    terser: "^5.24.0",
    "update-by-scope": "^1.1.3",
    vite: "^5.2.8",
    vitest: "^1.4.0"
  }
};

// vite.config.js
var __vite_injected_original_dirname = "C:\\projects\\tiptap-markdown-3\\tiptap-markdown-3";
var vite_config_default = defineConfig(() => {
  const deps = {
    ...package_default.dependencies || {},
    ...package_default.peerDependencies || {}
  };
  return {
    build: {
      lib: {
        entry: path.resolve(__vite_injected_original_dirname, "src/index.js"),
        name: "tiptap-markdown",
        fileName: (format) => `tiptap-markdown.${format}.js`,
        formats: ["es", "umd"]
      },
      rollupOptions: {
        external: [
          ...Object.keys(deps),
          /^@tiptap/
        ]
      },
      sourcemap: true,
      minify: false
    },
    plugins: [
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**"
      })
    ],
    test: {
      environment: "jsdom",
      setupFiles: [
        path.resolve(__vite_injected_original_dirname, "__tests__/utils/setup.js"),
        path.resolve(__vite_injected_original_dirname, "__tests__/utils/setup-dom.js")
      ]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcdGlwdGFwLW1hcmtkb3duLTNcXFxcdGlwdGFwLW1hcmtkb3duLTNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHByb2plY3RzXFxcXHRpcHRhcC1tYXJrZG93bi0zXFxcXHRpcHRhcC1tYXJrZG93bi0zXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9wcm9qZWN0cy90aXB0YXAtbWFya2Rvd24tMy90aXB0YXAtbWFya2Rvd24tMy92aXRlLmNvbmZpZy5qc1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgYmFiZWwgfSBmcm9tICdAcm9sbHVwL3BsdWdpbi1iYWJlbCc7XHJcbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuL3BhY2thZ2UuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XHJcbiAgICBjb25zdCBkZXBzID0ge1xyXG4gICAgICAgIC4uLihwYWNrYWdlSnNvbi5kZXBlbmRlbmNpZXMgfHwge30pLFxyXG4gICAgICAgIC4uLihwYWNrYWdlSnNvbi5wZWVyRGVwZW5kZW5jaWVzIHx8IHt9KSxcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYnVpbGQ6IHtcclxuICAgICAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5qcycpLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RpcHRhcC1tYXJrZG93bicsXHJcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYHRpcHRhcC1tYXJrZG93bi4ke2Zvcm1hdH0uanNgLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0czogWydlcycsICd1bWQnXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5PYmplY3Qua2V5cyhkZXBzKSxcclxuICAgICAgICAgICAgICAgICAgICAvXkB0aXB0YXAvLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgICBiYWJlbCh7XHJcbiAgICAgICAgICAgICAgICBiYWJlbEhlbHBlcnM6ICdidW5kbGVkJyxcclxuICAgICAgICAgICAgICAgIGV4Y2x1ZGU6ICdub2RlX21vZHVsZXMvKionLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlc3Q6IHtcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXHJcbiAgICAgICAgICAgIHNldHVwRmlsZXM6IFtcclxuICAgICAgICAgICAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdfX3Rlc3RzX18vdXRpbHMvc2V0dXAuanMnKSxcclxuICAgICAgICAgICAgICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdfX3Rlc3RzX18vdXRpbHMvc2V0dXAtZG9tLmpzJyksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIiwgIntcclxuICBcIm5hbWVcIjogXCJ0aXB0YXAtbWFya2Rvd24tM1wiLFxyXG4gIFwidmVyc2lvblwiOiBcIjAuOC4xMVwiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFZGl0IG1hcmtkb3duIGNvbnRlbnQgaW4gdGlwdGFwIGVkaXRvci5cIixcclxuICBcInNjcmlwdHNcIjoge1xyXG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0XCIsXHJcbiAgICBcImRldlwiOiBcInZpdGUgZXhhbXBsZVwiLFxyXG4gICAgXCJidWlsZFwiOiBcInZpdGUgYnVpbGRcIixcclxuICAgIFwiYnVpbGQ6ZXhhbXBsZVwiOiBcInZpdGUgYnVpbGQgZXhhbXBsZVwiLFxyXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3IGV4YW1wbGVcIixcclxuICAgIFwicHJldmVyc2lvblwiOiBcIm5wbSBydW4gYnVpbGRcIixcclxuICAgIFwidXBkYXRlOnRpcHRhcFwiOiBcInVwZGF0ZS1ieS1zY29wZSBAdGlwdGFwXCJcclxuICB9LFxyXG4gIFwid29ya3NwYWNlc1wiOiBbXHJcbiAgICBcImV4YW1wbGVcIlxyXG4gIF0sXHJcbiAgXCJtYWluXCI6IFwiZGlzdC90aXB0YXAtbWFya2Rvd24udW1kLmpzXCIsXHJcbiAgXCJtb2R1bGVcIjogXCJkaXN0L3RpcHRhcC1tYXJrZG93bi5lcy5qc1wiLFxyXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxyXG4gIFwic2lkZUVmZmVjdHNcIjogZmFsc2UsXHJcbiAgXCJleHBvcnRzXCI6IHtcclxuICAgIFwiLlwiOiB7XHJcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3RpcHRhcC1tYXJrZG93bi5lcy5qc1wiLFxyXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvdGlwdGFwLW1hcmtkb3duLnVtZC5qc1wiLFxyXG4gICAgICBcInR5cGVzXCI6IFwiLi9pbmRleC5kLnRzXCJcclxuICAgIH1cclxuICB9LFxyXG4gIFwiZmlsZXNcIjogW1xyXG4gICAgXCJzcmNcIixcclxuICAgIFwiZGlzdFwiLFxyXG4gICAgXCJpbmRleC5kLnRzXCJcclxuICBdLFxyXG4gIFwiYnJvd3NlcnNsaXN0XCI6IFtcclxuICAgIFwiZGVmYXVsdHNcIixcclxuICAgIFwibm90IElFIDExXCJcclxuICBdLFxyXG4gIFwicmVwb3NpdG9yeVwiOiB7XHJcbiAgICBcInR5cGVcIjogXCJnaXRcIixcclxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9zaGphY29iczMwMy90aXB0YXAtbWFya2Rvd24tMy5naXRcIlxyXG4gIH0sXHJcbiAgXCJidWdzXCI6IHtcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NoamFjb2JzMzAzL3RpcHRhcC1tYXJrZG93bi0zL2lzc3Vlc1wiXHJcbiAgfSxcclxuICBcInR5cGVzXCI6IFwiaW5kZXguZC50c1wiLFxyXG4gIFwiYXV0aG9yXCI6IFwiU2ltb24gSmFjb2Jzb25cIixcclxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcclxuICBcImRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkB0eXBlcy9tYXJrZG93bi1pdFwiOiBcIl4xMy4wLjdcIixcclxuICAgIFwibWFya2Rvd24taXRcIjogXCJeMTQuMS4wXCIsXHJcbiAgICBcIm1hcmtkb3duLWl0LXRhc2stbGlzdHNcIjogXCJeMi4xLjFcIixcclxuICAgIFwicHJvc2VtaXJyb3ItbWFya2Rvd25cIjogXCJeMS4xMS4xXCJcclxuICB9LFxyXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkB0aXB0YXAvY29yZVwiOiBcIl4zLjAuMC1iZXRhXCJcclxuICB9LFxyXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiQGJhYmVsL2NvcmVcIjogXCJeNy4yMy4yXCIsXHJcbiAgICBcIkBiYWJlbC9wcmVzZXQtZW52XCI6IFwiXjcuMjMuMlwiLFxyXG4gICAgXCJAcm9sbHVwL3BsdWdpbi1iYWJlbFwiOiBcIl41LjMuMVwiLFxyXG4gICAgXCJAdGlwdGFwL2NvcmVcIjogXCJeMy4wLjAtYmV0YS4xNFwiLFxyXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1oaWdobGlnaHRcIjogXCJeMy4wLjAtYmV0YS4xNFwiLFxyXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi1pbWFnZVwiOiBcIl4zLjAuMC1iZXRhLjE0XCIsXHJcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLWxpbmtcIjogXCJeMy4wLjAtYmV0YS4xNFwiLFxyXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi10YWJsZVwiOiBcIl4zLjAuMC1iZXRhLjE0XCIsXHJcbiAgICBcIkB0aXB0YXAvZXh0ZW5zaW9uLXRhYmxlLWNlbGxcIjogXCJeMy4wLjAtYmV0YS4xNFwiLFxyXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi10YWJsZS1oZWFkZXJcIjogXCJeMy4wLjAtYmV0YS4xNFwiLFxyXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi10YWJsZS1yb3dcIjogXCJeMy4wLjAtYmV0YS4xNFwiLFxyXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi10YXNrLWl0ZW1cIjogXCJeMy4wLjAtYmV0YS4xNFwiLFxyXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi10YXNrLWxpc3RcIjogXCJeMy4wLjAtYmV0YS4xNFwiLFxyXG4gICAgXCJAdGlwdGFwL2V4dGVuc2lvbi11bmRlcmxpbmVcIjogXCJeMy4wLjAtYmV0YS4xNFwiLFxyXG4gICAgXCJAdGlwdGFwL3BtXCI6IFwiXjMuMC4wLWJldGEuMTRcIixcclxuICAgIFwiQHRpcHRhcC9zdGFydGVyLWtpdFwiOiBcIl4zLjAuMC1iZXRhLjE0XCIsXHJcbiAgICBcIkB0aXB0YXAvdnVlLTNcIjogXCJeMy4wLjAtYmV0YS4xNFwiLFxyXG4gICAgXCJAdHlwZXMvamVzdFwiOiBcIl4yOC4xLjdcIixcclxuICAgIFwiamVzdC1zZXJpYWxpemVyLWh0bWxcIjogXCJeNy4xLjBcIixcclxuICAgIFwianNkb21cIjogXCJeMjIuMS4wXCIsXHJcbiAgICBcInRlcnNlclwiOiBcIl41LjI0LjBcIixcclxuICAgIFwidXBkYXRlLWJ5LXNjb3BlXCI6IFwiXjEuMS4zXCIsXHJcbiAgICBcInZpdGVcIjogXCJeNS4yLjhcIixcclxuICAgIFwidml0ZXN0XCI6IFwiXjEuNC4wXCJcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFlBQVksVUFBVTtBQUN0QixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGFBQWE7OztBQ0h0QjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLElBQ1QsTUFBUTtBQUFBLElBQ1IsS0FBTztBQUFBLElBQ1AsT0FBUztBQUFBLElBQ1QsaUJBQWlCO0FBQUEsSUFDakIsU0FBVztBQUFBLElBQ1gsWUFBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUEsRUFDbkI7QUFBQSxFQUNBLFlBQWM7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBUTtBQUFBLEVBQ1IsUUFBVTtBQUFBLEVBQ1YsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLElBQ1QsS0FBSztBQUFBLE1BQ0gsUUFBVTtBQUFBLE1BQ1YsU0FBVztBQUFBLE1BQ1gsT0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFTO0FBQUEsSUFDUDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBZ0I7QUFBQSxJQUNkO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQWM7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLEtBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxNQUFRO0FBQUEsSUFDTixLQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsT0FBUztBQUFBLEVBQ1QsUUFBVTtBQUFBLEVBQ1YsU0FBVztBQUFBLEVBQ1gsY0FBZ0I7QUFBQSxJQUNkLHNCQUFzQjtBQUFBLElBQ3RCLGVBQWU7QUFBQSxJQUNmLDBCQUEwQjtBQUFBLElBQzFCLHdCQUF3QjtBQUFBLEVBQzFCO0FBQUEsRUFDQSxrQkFBb0I7QUFBQSxJQUNsQixnQkFBZ0I7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsaUJBQW1CO0FBQUEsSUFDakIsZUFBZTtBQUFBLElBQ2YscUJBQXFCO0FBQUEsSUFDckIsd0JBQXdCO0FBQUEsSUFDeEIsZ0JBQWdCO0FBQUEsSUFDaEIsK0JBQStCO0FBQUEsSUFDL0IsMkJBQTJCO0FBQUEsSUFDM0IsMEJBQTBCO0FBQUEsSUFDMUIsMkJBQTJCO0FBQUEsSUFDM0IsZ0NBQWdDO0FBQUEsSUFDaEMsa0NBQWtDO0FBQUEsSUFDbEMsK0JBQStCO0FBQUEsSUFDL0IsK0JBQStCO0FBQUEsSUFDL0IsK0JBQStCO0FBQUEsSUFDL0IsK0JBQStCO0FBQUEsSUFDL0IsY0FBYztBQUFBLElBQ2QsdUJBQXVCO0FBQUEsSUFDdkIsaUJBQWlCO0FBQUEsSUFDakIsZUFBZTtBQUFBLElBQ2Ysd0JBQXdCO0FBQUEsSUFDeEIsT0FBUztBQUFBLElBQ1QsUUFBVTtBQUFBLElBQ1YsbUJBQW1CO0FBQUEsSUFDbkIsTUFBUTtBQUFBLElBQ1IsUUFBVTtBQUFBLEVBQ1o7QUFDRjs7O0FEakZBLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxNQUFNO0FBQzlCLFFBQU0sT0FBTztBQUFBLElBQ1QsR0FBSSxnQkFBWSxnQkFBZ0IsQ0FBQztBQUFBLElBQ2pDLEdBQUksZ0JBQVksb0JBQW9CLENBQUM7QUFBQSxFQUN6QztBQUNBLFNBQU87QUFBQSxJQUNILE9BQU87QUFBQSxNQUNILEtBQUs7QUFBQSxRQUNELE9BQVksYUFBUSxrQ0FBVyxjQUFjO0FBQUEsUUFDN0MsTUFBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLFdBQVcsbUJBQW1CLE1BQU07QUFBQSxRQUMvQyxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDekI7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNYLFVBQVU7QUFBQSxVQUNOLEdBQUcsT0FBTyxLQUFLLElBQUk7QUFBQSxVQUNuQjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsTUFDQSxXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUEsSUFDWjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsTUFBTTtBQUFBLFFBQ0YsY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLE1BQ2IsQ0FBQztBQUFBLElBQ0w7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNGLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxRQUNILGFBQVEsa0NBQVcsMEJBQTBCO0FBQUEsUUFDN0MsYUFBUSxrQ0FBVyw4QkFBOEI7QUFBQSxNQUMxRDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
