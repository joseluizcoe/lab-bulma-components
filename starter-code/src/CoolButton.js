import React, { Component } from 'react';

class CoolButton extends Component {
    getClassName(name){
        const btnClasses = {
            isActive: 'is-active',
            isBlack: 'is-black',
            isCentered: 'is-centered',
            isDanger: 'is-danger',
            isDark: 'is-dark',
            isFocused: 'is-focused',
            isGrouped: 'is-grouped',
            isHovered: 'is-hovered',
            isInfo: 'is-info',
            isInverted: 'is-inverted',
            isLarge: 'is-large',
            isLight: 'is-light',
            isLink: 'is-link',
            isLoading: 'is-loading',
            isMedium: 'is-medium',
            isOutlined: 'is-outlined',
            isPrimary: 'is-primary',
            isRight: 'is-right',
            isRounded: 'is-rounded',
            isSelected: 'is-selected',
            isSmall: 'is-small',
            isStatic: 'is-static',
            isSuccess: 'is-success',
            isText: 'is-text',
            isWarning: 'is-warning',
            isWhite: 'is-white',
        };
        return btnClasses[name] || '';
    }
    render() {
        const {className, children} = this.props;
        // classe padrao
        let classes = 'button ';
        // se vier a prop className, concatena com classes
        classes += (className || '');

        classes += Object.keys(this.props)
            .map(item => this.getClassName(item))
            .join(' ');

        return (
            <button className={classes}>{children}</button>
        );
    }
}

export default CoolButton;
