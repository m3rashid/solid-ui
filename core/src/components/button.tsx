import { Component, splitProps } from 'solid-js';
import type { JSX } from 'solid-js';
import { colors } from '../globals/theme';

type ButtonShape = 'default' | 'circle' | 'round';
type ButtonSize = 'large' | 'medium' | 'small';
type ButtonType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';

export interface IProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element;
  block?: boolean; // Option to fit button width to its parent width
  danger?: boolean; // Set the danger status of button
  disabled?: boolean; // Disabled state of button
  ghost?: boolean; // Make background transparent and invert text and border colors
  href?: string; // Redirect url of link button
  htmlType?: string; // Set the original html type of button, see: MDN
  icon?: JSX.Element; // Set the icon component of button
  loading?: boolean | { delay: number }; // Set the loading status of button
  shape?: ButtonShape; // Can be set button shape
  size?: ButtonSize; // Set the size of button
  target?: string; // Same as target attribute of a, works when href is specified
  type?: ButtonType; // button type
}

const Button: Component<IProps> = (props) => {
  const [, rest] = splitProps(props, [
    'children',
    'block',
    'danger',
    'disabled',
    'ghost',
    'href',
    'htmlType',
    'icon',
    'loading',
    'shape',
    'size',
    'target',
    'type',
  ]);

  const buttonType: Record<ButtonType, string> = {
    dashed: '',
    default: 'text-black',
    ghost: '',
    link: '',
    primary: `text-black bg-${colors.primary[0]} hover:bg-${colors.primary[1]}`,
    text: '',
  };

  const buttonSize: Record<ButtonSize, string> = {
    large: 'px-4 p-3',
    medium: 'px-3 p-2',
    small: 'px-2 p-1',
  };

  const buttonShape: Record<ButtonShape, string> = {
    circle: 'rounded-full',
    default: 'rounded-md',
    round: 'rounded-lg',
  };

  const buttonClasses = [
    'border-2 border-solid',
    ...(props.block ? ['w-full'] : ['']),
    ...(props.danger
      ? [`bg-${colors.danger[0]} hover:bg-${colors.danger[1]}`]
      : ['']),
    ...(props.disabled ? ['opacity-50 cursor-not-allowed'] : ['']),
    ...(props.ghost ? [''] : ['']),
    ...(props.href ? [''] : ['']),
    ...(props.htmlType ? [''] : ['button']),
    ...(props.icon ? [''] : ['']),
    ...(props.loading ? [''] : ['']),
    ...(props.shape ? [buttonShape[props.shape]] : [buttonShape['default']]),
    ...(props.size ? [buttonSize[props.size]] : [buttonSize['medium']]),
    ...(props.target ? '' : ''),
    ...(props.type ? [buttonType[props.type]] : [buttonType['default']]),
  ];

  return (
    <button
      class={`${buttonClasses
        .reduce<string[]>((a, c) => (c ? [...a, c] : [...a]), [])
        .join(' ')} ${props.class}`}
      {...rest}
    >
      {props.children}
    </button>
  );
};

export default Button;
