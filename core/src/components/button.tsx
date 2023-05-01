import { Component } from 'solid-js';

/**
 * block	Option to fit button width to its parent width	boolean	false
 * danger	Set the danger status of button	boolean	false
 * disabled	Disabled state of button	boolean	false
 * ghost	Make background transparent and invert text and border colors	boolean	false
 * href	Redirect url of link button	string	-
 * htmlType	Set the original html type of button, see: MDN	string	button
 * icon	Set the icon component of button	ReactNode	-
 * loading	Set the loading status of button	boolean | { delay: number }	false
 * shape	Can be set button shape	default | circle | round	default
 * size	Set the size of button	large | middle | small	middle
 * target	Same as target attribute of a, works when href is specified	string	-
 * type	Can be set to primary ghost dashed link text default	string	default
 * onClick	Set the handler to handle click event	(event: MouseEvent) => void	-
 */

const Button: Component = () => {
  return <button></button>;
};

export default Button;
