import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  // By default we are setting the value of highlight input which is aliased as isHighlight to false in case no value is set for the highlight property.
  // If true is set on the element input property [highlight] then isHighlight will be true.
  @Input('highlight') isHighlight = false;

  @HostBinding('class')
  get addClass() {
    return this.isHighlight
      ? ['addColorGreen', 'addBgLight', 'addUnderline', 'alignText']
      : null;
  }

  // @HostBinding('class')
  // get addClass() {
  //   return this.isHighlight
  //     ? 'addColorGreen addBgLight addUnderline alignText'
  //     : null;
  // }

  @HostBinding('style')
  get addStyle() {
    return this.isHighlight
      ? { padding: '1rem', border: '1px solid black', 'border-radius': '10px' }
      : null;
  }
}
