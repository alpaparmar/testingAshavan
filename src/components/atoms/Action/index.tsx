import * as React from 'react';
import classNames from 'classnames';
import { Annotated } from '@/components/Annotated';
import Link from '../Link';
import Apple from '../../svgs/apple';
import ArrowLeft from '../../svgs/arrow-left';
import ArrowLeftCircle from '../../svgs/arrow-left-circle';
import ArrowRight from '../../svgs/arrow-right';
import ArrowRightCircle from '../../svgs/arrow-right-circle';
import Cart from '../../svgs/cart';
import ChevronLeft from '../../svgs/chevron-left';
import ChevronRight from '../../svgs/chevron-right';
import Dropdown from '../../svgs/dropdown'
import Facebook from '../../svgs/facebook';
import GitHub from '../../svgs/github';
import GooglePlay from '../../svgs/google-play';
import Instagram from '../../svgs/instagram';
import LinkedIn from '../../svgs/linkedin';
import MagnifyingGlass from '../../svgs/magnifying-glass';
import Mail from '../../svgs/mail';
import NewTab from '../../svgs/new-tab';
import Play from '../../svgs/play';
import PlayCircle from '../../svgs/play-circle';
import Reddit from '../../svgs/reddit';
import Rss from '../../svgs/rss';
import Send from '../../svgs/send';
import Twitter from '../../svgs/twitter';
import Vimeo from '../../svgs/vimeo';
import YouTube from '../../svgs/youtube';

const iconMap = {
    apple: Apple,
    arrowLeft: ArrowLeft,
    arrowLeftCircle: ArrowLeftCircle,
    arrowRight: ArrowRight,
    arrowRightCircle: ArrowRightCircle,
    cart: Cart,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    dropdown: Dropdown,
    facebook: Facebook,
    github: GitHub,
    googlePlay: GooglePlay,
    instagram: Instagram,
    linkedin: LinkedIn,
    magnifyingGlass: MagnifyingGlass,
    mail: Mail,
    newTab: NewTab,
    play: Play,
    playCircle: PlayCircle,
    reddit: Reddit,
    rss: Rss,
    send: Send,
    twitter: Twitter,
    vimeo: Vimeo,
    youtube: YouTube
};

export default function Action(props) {
    const { type, label, altText, url, showIcon, target, rel, hoverText } = props;
    const icon = props.icon || 'arrowLeft';
    const iconPosition = props.iconPosition || 'right';
    const IconComponent = iconMap[icon];
    const annotationPrefix = props['data-sb-field-path'] || '';
    const inMobileMenu = props['data-sb-inMobileMenu'] || false;
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@href`,
        `${annotationPrefix}.altText#@aria-label`,
        `${annotationPrefix}.elementId#@id`,
        `${annotationPrefix}.label#span[1]`,
        `${annotationPrefix}.icon#svg[1]`
    ];
    const defaultStyle = type === 'Link' ? 'link' : 'secondary';
    const style = props.style || defaultStyle;
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;

    return (
        <Annotated content={props}>
            <Link
                href={url}
                aria-label={altText}
                id={cssId}
                target={target}
                rel={rel}
                title={hoverText}
                className={classNames('sb-component', 'sb-component-block', style === 'link' ? 'sb-component-link' : 'sb-component-button', cssClasses, {
                    'sb-component-button-primary': style === 'primary',
                    'sb-component-button-secondary': style === 'secondary'
                })}
                data-sb-field-path={annotations.join(' ').trim()}
            >
                {label && <span>{label}</span>}
                {showIcon && IconComponent && (!inMobileMenu || type !== 'Link' || (inMobileMenu && cssId === 'siteSearch')) && (
                    <IconComponent
                        className={classNames('fill-current h-5 w-5', {
                            'order-first': iconPosition === 'left',
                            'mr-1.5': label && iconPosition === 'left',
                            'ml-1.5': label && iconPosition === 'right'
                        })}
                    />
                )}
            </Link>
        </Annotated>
    );
}
