/**
 * Plugin related types.
 */

export interface PluginMetadata {

    id: string;

    name: string;

    version: string;

    author?: string;

    description?: string;

}

export interface PluginContext {

    readonly version: string;

}

export interface PluginLifecycle {

    onInstall(): void;

    onEnable(): void;

    onDisable(): void;

    onUninstall(): void;

}