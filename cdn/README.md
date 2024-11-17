# Unreal Toolkit - Browser Edition
A runtime library for advanced Unreal Engine web game development. The **Unreal Toolkit** enables interoperability
with your hosted Unreal Engine streaming web application.

<a href="https://www.npmjs.com/package/unreal-toolkit-next">Next Edition (ES6)</a>
<br/>
<a href="https://www.npmjs.com/package/unreal-toolkit">Classic Edition (UMD)</a>
<br/>
<a href="https://github.com/codewrxai/UnrealToolkit/tree/master">Unreal Toolkit Plugin (UE5)</a>


## Default Installation (UMD)
```html
<script src="unreal.toolkit.js"></script>
```

* Unreal Toolkit Runtime Library
```typescript
// Create cross origin isolated iframe window
const iframe = UnrealToolkit.Bridge.CreateWindow("game");
iframe.src = "your.unrealtoolkitproject.com";

// Handle message from Unreal Engine content
UnrealToolkit.Bridge.OnWindowMessage("WM_EVENT", (args:string[]) => {
   console.log("My Event Args: ", args);
});

// Post message safely to Unreal Engine content
UnrealToolkit.Bridge.PostWindowMessage("WM_HELLO", ["Hello World!"]);
```

## Additional Reference Information

* Unreal Toolkit Content Frame Style
```css
iframe {
   position: absolute;
   width: 100%;
   height: 100%;
   min-height: 100vh;
   border: none;
   outline: none;
   z-index: 0;
}
```

* Unreal Toolkit Content Frame Settings
```html
<iframe
  crossorigin="anonymous"
  allow="cross-origin-isolated"
  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock">
</iframe>
```

* Unreal Toolkit Required Response Headers
```json
headers: {
   'Access-Control-Allow-Origin': '*',
   'Cross-Origin-Opener-Policy': 'same-origin',
   'Cross-Origin-Embedder-Policy': 'require-corp',
   'Cross-Origin-Resource-Policy': 'cross-origin',
   'Permissions-Policy': 'cross-origin-isolated=*'
}
```
