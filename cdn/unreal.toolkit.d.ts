/** UMD Type References */
/**
 * Unreal Toolkit Runtime Library
 * @class UnrealToolkit - All rights reserved (c) 2024 Mackey Kinard
 */
export declare class UnrealToolkit {
    private static _Bridge;
    /** Unreal Toolkit Communication Bridge (Event Bus)
     * @example
     *   ```typescript
     *   import UnrealToolkit from 'unreal-toolkit';
     *
     *   // Create cross origin isolated iframe window
     *   const iframe = UnrealToolkit.Bridge.CreateWindow("game");
     *   iframe.src = "your.unrealtoolkitproject.com";
     *
     *   // Handle message from Unreal Engine content
     *   UnrealToolkit.Bridge.OnWindowMessage("WM_EVENT", (args:string[]) => {
     *   console.log("My Event Args: ", args);
     *   });
     *
     *   // Post message safely to Unreal Engine content
     *   UnrealToolkit.Bridge.PostWindowMessage("WM_HELLO", ["Hello World!"]);
     *   ```
     */
    static get Bridge(): EventBus;
}
/**
 * Unreal Toolkit Event Bus (Asynchronous Post Message Communication)
 * @class EventBus - All rights reserved (c) 2024 Mackey Kinard
 */
export declare class EventBus {
    static PostWindowID: string;
    static AllowedOrigin: string;
    static TargetOrigin: string;
    static ContentFrames: NodeListOf<HTMLIFrameElement>;
    constructor();
    /** Post event bus message
     * @param name The message to post
     * @param args The args to post
     * @returns void
     */
    PostWindowMessage(name: string, args?: string[]): void;
    /** Handle event bus message
     * @param name The name to handle
     * @param args The args to handle
     * @returns void
     */
    OnWindowMessage(name: string, handler: (args: string[]) => void): void;
    /** Creates or attaches a game window iframe
     * @param id The iframe id to create
     * @returns HTMLIFrameElement
     */
    CreateWindow(id: string, display?: string): HTMLIFrameElement;
    /** Remove event bus message handler
     * @param message The message to remove
     * @param handler The handler to remove
     * @returns void
     */
    RemoveHandler(message: string, handler: (args: string[]) => void): void;
    /** Clear and reset all event bus message handlers
     * @returns void
     */
    ResetHandlers(): void;
    /** Resets the content frame list
     * @returns void
     */
    ResetContentFrames(): void;
    /** Dispose the unreal message bus
     * @returns void
     */
    Dispose(): void;
    /** Handle window message event
     * @param event The message event to handle
     * @returns void
     */
    private HandleWindowMessage;
    /** Dispatch internal event bus message
     * @param name The name to dispatch
     * @param args The args to dispatch
     * @returns void
     */
    private OnDispatchMessage;
    private ListenerDictionary;
}
export default UnrealToolkit;
