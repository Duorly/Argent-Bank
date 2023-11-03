export enum FeatureIcon {
    Chat = 'chat',
    Money = 'money',
    Security = 'security'
}

export interface Feature {
    title: string;
    subtitle: string;
    icon: FeatureIcon;
}
