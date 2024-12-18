import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
    const socialLinks = [
        { id: 1, icon: <FaFacebookF />, href: 'https://facebook.com' },
        { id: 2, icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
        { id: 3, icon: <FaYoutube />, href: 'https://youtube.com' },
        { id: 4, icon: <FaTwitter />, href: 'https://x.com' }, // Icône mise à jour
    ];

    return (
        <div className="flex space-x-4">
            {socialLinks.map(({ id, icon, href }) => (
                <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#007200] text-white text-[14px] hover:bg-[#005a00] transition duration-200"
                >
                    {icon}
                </a>
            ))}
        </div>
    );
};

export default SocialIcons;
