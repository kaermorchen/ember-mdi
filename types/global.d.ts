// Types for compiled templates
declare module 'ember-mdi/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}

declare module 'ember-mdi/icons' {
  interface Icons {
    [key: string]: string;
  }
  const icons: Icons;
  export default icons;
}
