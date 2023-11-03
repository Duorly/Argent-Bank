import { Feature as FeatureType } from "@/utils/types/Feature";
import chatIcon from "./assets/icon-chat.png";
import moneyIcon from "./assets/icon-money.png";
import securityIcon from "./assets/icon-security.png";
import "./style.scss";

const iconMap: Record<FeatureType['icon'], string> = {
    'chat': chatIcon,
    'money': moneyIcon,
    'security': securityIcon,
};

export const Feature = ({ title, subtitle, icon }: FeatureType): JSX.Element => {
    const image = icon ? iconMap[icon] : "";

    return (
        <div className="feature-item">
            {icon && <img src={image} alt={`${icon} icon`} className="feature-icon" />}
            <h3 className="feature-item-title">{title}</h3>
            <p>{subtitle}</p>
        </div>
    );
};
