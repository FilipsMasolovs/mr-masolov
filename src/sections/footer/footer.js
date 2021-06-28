import "./footer.css";

export default function Footer() {
    return (
        <div className="mr-masolov-footer">
            <div className="mr-masolov-footer-inner">
                Copyright © {new Date().getFullYear()} All right reserved.
            </div>
        </div>
    );
}
