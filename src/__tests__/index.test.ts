import * as index from '../index';

describe('Index', () => {
  it('contains all expected elements', () => {
    expect(Object.keys(index)).toEqual([
      'ActionLink',
      'BackLink',
      'Breadcrumb',
      'Button',
      'DefaultButton',
      'ButtonLink',
      'Card',
      'CareCard',
      'Checkboxes',
      'ContentsList',
      'DateInput',
      'Details',
      'DoDontList',
      'ErrorMessage',
      'ErrorSummary',
      'Fieldset',
      'Footer',
      'Form',
      'useFormContext',
      'FormGroup',
      'useFormGroupContext',
      'Header',
      'Hero',
      'Hint',
      'Icons',
      'ArrowLeftIcon',
      'ArrowRightIcon',
      'ArrowRightCircleIcon',
      'ChevronLeftIcon',
      'ChevronRightIcon',
      'CloseIcon',
      'CrossIcon',
      'SmallEmdashIcon',
      'EmdashIcon',
      'MinusIcon',
      'PlusIcon',
      'SearchIcon',
      'TickIcon',
      'Images',
      'Input',
      'InsetText',
      'Label',
      'Container',
      'Col',
      'Row',
      'ListPanel',
      'NavAZ',
      'Pagination',
      'Radios',
      'ReviewDate',
      'Select',
      'SkipLink',
      'SummaryList',
      'Table',
      'Tag',
      'Textarea',
      'LedeText',
      'BodyText',
      'WarningCallout',
      'Clearfix',
      'ReadingWidth',
    ]);
  });
});
