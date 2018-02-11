import React, { Component } from 'react';

import './CSSCheatSheet.scss';
import $ from 'jquery';

export default class CSSCheatSheet extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }
  componentDidMount() {
    this.handleScroll();
    const visible = !this.state.visible;
    setTimeout(() => {
      this.setState({visible});
    }, 100)
  }

  handleScroll() {
    $('.cheat-nav-link').on('click', this, function() {
      let link = $(this).attr('href');
      let target = $(link);
      $('html, body').animate({
        scrollTop: $(target).offset().top - 100
      }, 500);
    });
  }

  render() {
    const { visible } = this.state;
    const pageVisible = visible ? "fade-enter-active" : "fade-enter"
    return(
      <div className={"css-cheat-sheet-wrapper container " + pageVisible}>
        <nav className="cheat-sheet-nav">
          <ul>
            <li>
              <a href="#selectors" className="cheat-nav-link">Selectors</a>
            </li>
            <li>
              <a href="#pseudo-selectors" className="cheat-nav-link">Pseudo-selectors</a>
            </li>
            <li>
              <a href="#font-styles" className="cheat-nav-link">Font Styles</a>
            </li>
            <li>
              <a href="#display" className="cheat-nav-link">Display</a>
            </li>
            <li>
              <a href="#position" className="cheat-nav-link">Position</a>
            </li>
            <li>
              <a href="#background" className="cheat-nav-link">Background</a>
            </li>
            <li>
              <a href="#box-properties" className="cheat-nav-link">Box Properties</a>
            </li>
            <li>
              <a href="#size-properties" className="cheat-nav-link">Size Properties</a>
            </li>
            <li>
              <a href="#2d-transformations" className="cheat-nav-link">2D Transformation</a>
            </li>
            <li>
              <a href="#flexbox" className="cheat-nav-link">Flexbox</a>
            </li>
            <li>
              <a href="#css-grid" className="cheat-nav-link">CSS Grid</a>
            </li>
          </ul>
        </nav>
        <h1 className="loud-title text-center">CSS Cheat Sheet</h1>
        <div className="selectors" id="selectors">
          <h2 className="styled-h2">Selectors</h2>
          <div className="cheat-sheet">
            <div className="css-box" id="class-selectors">
              <h3>Class Selector</h3>
              <p className="code-sample">.</p>
            </div>
            <div className="css-box" id="id-selector">
              <h3>Id Selector</h3>
              <p className="code-sample">#</p>
            </div>
            <div className="css-box" id="all-elements">
              <h3>All Elements</h3>
              <p className="code-sample">*</p>
            </div>
            <div className="css-box" id="single-selector">
              <h3>Single Selector</h3>
              <p className="code-sample">p</p>
            </div>
            <div className="css-box" id="multiple-elements">
              <h3>Multiple Elements</h3>
              <p className="code-sample">div, div</p>
            </div>
            <div className="css-box" id="direct-descendants">
              <h3>Direct Descendants</h3>
              <p className="code-sample">div > p</p>
            </div>
            <div className="css-box" id="sibling-selector">
              <h3>Sibling Selector</h3>
              <p className="code-sample">div ~ h1</p>
            </div>
            <div className="css-box" id="general-attributes">
              <h3>General Attributes</h3>
              <p className="code-sample">[attribute=value]</p>
            </div>
          </div>
        </div>

        <div className="selectors" id="pseudo-selectors">
          <h2 className="styled-h2">Pseudo-Selectors</h2>
          <div className="cheat-sheet">
            <div className="css-box">
              <h3>After Selector</h3>
              <p className="code-sample">p:after</p>
            </div>
            <div className="css-box">
              <h3>Before Selector</h3>
              <p className="code-sample">p:before</p>
            </div>
            <div className="css-box">
              <h3>Active Selector</h3>
              <p className="code-sample">a:active</p>
            </div>
            <div className="css-box">
              <h3>Focus Selector</h3>
              <p className="code-sample">a:focus</p>
            </div>
            <div className="css-box">
              <h3>First Child</h3>
              <p className="code-sample">p:first-child</p>
            </div>
            <div className="css-box">
              <h3>Last Child</h3>
              <p className="code-sample">p:last-child</p>
            </div>
            <div className="css-box">
              <h3>Hover Selector</h3>
              <p className="code-sample">div:hover</p>
            </div>
            <div className="css-box">
              <h3>nth Child</h3>
              <p className="code-sample">p:nth-child(2)</p>
            </div>
            <div className="css-box">
              <h3>Not Selector</h3>
              <p className="code-sample">:not(p)</p>
            </div>
            <div className="css-box">
              <h3>Link Selector</h3>
              <p className="code-sample">a:link</p>
            </div>
          </div>
        </div>

        <div className="selectors" id="font-styles">
          <h2 className="styled-h2">Font Styles</h2>
          <div className="cheat-sheet">
            <div className="css-box column">
              <h3>Font Style</h3>
              <p className="code-sample">font-style: normal | italic | oblique | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Font Family</h3>
              <p className="code-sample">font-family: family-name | generic-family | initital | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Font Size</h3>
              <p className="code-sample">font-size: 1rem | 1em | 12px | 90vw | 100%</p>
            </div>
            <div className="css-box column">
              <h3>Font Variant</h3>
              <p className="code-sample">font-variant: normal | small-caps | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Font Weight</h3>
              <p className="code-sample">font-weight: normal | bold | bolder | lighter | number | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Text Transform</h3>
              <p className="code-sample">text-transform: none | capitalize | uppercase | lowercase | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Text-decoration</h3>
              <p className="code-sample">text-decoration: none | underline | overline | line-through | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Text Decoration Style</h3>
              <p className="code-sample">text-decoration-style: solid | double | dotted | dashed | wavy | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Text Decoration Line</h3>
              <p className="code-sample">text-decoration-line: none | underline | overline | line-through | initial | inherit</p>
            </div>
          </div>
        </div>

        <div className="selectors" id="display">
          <h2 className="styled-h2">Display</h2>
          <div className="cheat-sheet">
            <div className="css-box column">
              <h3>Inline</h3>
              <p className="code-sample">display: inline</p>
            </div>
            <div className="css-box column">
              <h3>Block</h3>
              <p className="code-sample">display: block</p>
            </div>
            <div className="css-box column">
              <h3>Flex</h3>
              <p className="code-sample">display: flex</p>
            </div>
            <div className="css-box column">
              <h3>Inline-block</h3>
              <p className="code-sample">display: inline-block</p>
            </div>
            <div className="css-box column">
              <h3>Inline-flex</h3>
              <p className="code-sample">display: inline-flex</p>
            </div>
            <div className="css-box column">
              <h3>None</h3>
              <p className="code-sample">display: none</p>
            </div>
            <div className="css-box column">
              <h3>Opacity</h3>
              <p className="code-sample">opacity: 0</p>
            </div>
            <div className="css-box column">
              <h3>Visibility</h3>
              <p className="code-sample">visibility: hidden | visible | collapse | initial | inherit</p>
            </div>
          </div>
        </div>

        <div className="selectors" id="position">
          <h2 className="styled-h2">Position</h2>
          <div className="cheat-sheet">
            <div className="css-box column">
              <h3>Position</h3>
              <p className="code-sample">position: static | absolute | fixed | relative | sticky | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Position Properties</h3>
              <p className="code-sample">top | right | bottom | left</p>
            </div>
            <div className="css-box column">
              <h3>Z-index</h3>
              <p className="code-sample">z-index: auto | number | initial | inherit</p>
            </div>
          </div>
        </div>

        <div className="selectors" id="background">
          <h2 className="styled-h2">Background</h2>
          <div className="cheat-sheet">
            <div className="css-box column">
              <h3>Background-image</h3>
              <p className="code-sample">background-image: url('../example.jpg')</p>
            </div>
            <div className="css-box column">
              <h3>Background Size</h3>
              <p className="code-sample">background-size: auto | 100% | cover | contain | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Background Position</h3>
              <p className="code-sample">background-position: left left | x% y% | xPos yPos | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Background Colour</h3>
              <p className="code-sample">background-color: blue | transparent | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Background Repeat</h3>
              <p className="code-sample">background-repeat: repeat | repeat-x | repeat-y | no-repeat | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Background Attachment</h3>
              <p className="code-sample">background-attachment: scroll | fixed | local | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Background Blend Modes</h3>
              <p className="code-sample">background-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | saturation | color | luminosity</p>
            </div>
          </div>
        </div>

        <div className="selectors" id="box-properties">
          <h2 className="styled-h2">Box Properties</h2>
          <div className="cheat-sheet">
            <div className="css-box column">
              <h3>Box Sizing</h3>
              <p className="code-sample">box-sizing: content-box | border-box | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Box Shadow</h3>
              <p className="code-sample">box-shadow: none | h-offset v-offset blur spread color | inset | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Margin</h3>
              <p className="code-sample">margin: top right bottom left</p>
            </div>
            <div className="css-box column">
              <h3>Margin Single Property</h3>
              <p className="code-sample">margin-right: 2em</p>
            </div>
            <div className="css-box column">
              <h3>Margin Properties</h3>
              <p className="code-sample">margin: 20px | auto | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Padding</h3>
              <p className="code-sample">padding: top right bottom left</p>
            </div>
            <div className="css-box column">
              <h3>Padding Single Property</h3>
              <p className="code-sample">padding-right: 10%</p>
            </div>
            <div className="css-box column">
              <h3>Border Radius</h3>
              <p className="code-sample">border-radius: 10px | 50%</p>
            </div>
            <div className="css-box column">
              <h3>Border Radius In-depth</h3>
              <p className="code-sample">border-radius: top-left | top-right | bottom-left | bottom-right</p>
            </div>
            <div className="css-box column">
              <h3>Border</h3>
              <p className="code-sample">border: width style color | initial | inherit</p>
            </div>
          </div>
        </div>

        <div className="selectors" id="size-properties">
          <h2 className="styled-h2">Size Properties</h2>
          <div className="cheat-sheet">
            <div className="css-box column">
              <h3>Height</h3>
              <p className="code-sample">height: auto | 100(px,em,%,vh) | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Width</h3>
              <p className="code-sample">width: auto | 100(px,em,%,vw) | initial | inherit</p>
            </div>
          </div>
        </div>

        <div className="selectors" id="2d-transformations">
          <h2 className="styled-h2">2D Transformations</h2>
          <div className="cheat-sheet">
            <div className="css-box column">
              <h3>Translate</h3>
              <p className="code-sample">transform: translate(x,y)</p>
            </div>
            <div className="css-box column">
              <h3>TranslateX</h3>
              <p className="code-sample">transform: translateX(10px)</p>
            </div>
            <div className="css-box column">
              <h3>TranslateY</h3>
              <p className="code-sample">transform: translateY(10px)</p>
            </div>
            <div className="css-box column">
              <h3>Scale</h3>
              <p className="code-sample">transform: scale(x,y) | scaleX(1.2) | scaleY(1.5)</p>
            </div>
            <div className="css-box column">
              <h3>Rotate</h3>
              <p className="code-sample">transform: rotate(20deg)</p>
            </div>
            <div className="css-box column">
              <h3>Skew</h3>
              <p className="code-sample">transform: skew(x-angle, y-angle) | skeyX(10deg) | skewY(10deg)</p>
            </div>
          </div>
        </div>

        <div className="selectors" id="flexbox">
          <h2 className="styled-h2">Flexbox</h2>
          <div className="cheat-sheet">
            <div className="css-box column">
              <h3>Display</h3>
              <p className="code-sample">display: flex</p>
            </div>
            <div className="css-box column">
              <h3>Flex Direction</h3>
              <p className="code-sample">flex-direction: row (default) | column</p>
            </div>
            <div className="css-box column">
              <h3>Justify Content</h3>
              <p className="code-sample">justify-content: flex-start | flex-end | center | space-between | space-around</p>
            </div>
            <div className="css-box column">
              <h3>Align Items</h3>
              <p className="code-sample">align-items: stretch | Center | flex-start | flex-end | space-between | space-around</p>
            </div>
            <div className="css-box column">
              <h3>Flex Wrap</h3>
              <p className="code-sample">flex-wrap: nowrap | wrap | wrap-reverse | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Flex Flow</h3>
              <p className="code-sample">flex-flow: flex-direction flex-wrap | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Order</h3>
              <p className="code-sample">flex: number | initial | inherit</p>
            </div>
            <div className="css-box column">
              <h3>Align Self</h3>
              <p className="code-sample">align-self: auto | stretch | center | flex-start | flex-end | baseline</p>
            </div>
          </div>
          <span className="external-link">
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
              More Flexbox <i class="fas fa-external-link-alt"></i>
            </a>
          </span>
        </div>

        <div className="selectors" id="css-grid">
          <h2 className="styled-h2">CSS Grid</h2>
          
          <div className="cheat-sheet">
            <div className="css-box column">
              <h3>Display</h3>
              <p className="code-sample">display: grid | inline-grid | subgrid</p>
            </div>
            <div className="css-box column">
              <h3>Grid Template Columns</h3>
              <p className="code-sample">grid-template-columns: 100px / 1fr / auto | repeat(auto-fill / auto-fit, 1fr)</p>
            </div>
            <div className="css-box column">
              <h3>Grid Template Rows</h3>
              <p className="code-sample">grid-template-rows: 100px / 1fr / auto</p>
            </div>
            <div className="css-box column">
              <h3>Grid Column Gap</h3>
              <p className="code-sample">grid-column-gap: 15px</p>
            </div>
          </div>
          <span className="external-link">
            <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">
              More CSS Grid <i class="fas fa-external-link-alt"></i>
            </a>
          </span>
        </div>
      </div>
    );
  }
}