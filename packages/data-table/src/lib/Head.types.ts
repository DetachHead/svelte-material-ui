import type { SMUICheckboxInputAccessor } from '@detachhead/smui-common';
import type { SMUIDataTableCellAccessor } from './Cell.types.js';

export interface SMUIDataTableHeadAccessor {
  readonly cells: SMUIDataTableCellAccessor[];
  readonly orderedCells: SMUIDataTableCellAccessor[];
  readonly checkbox: SMUICheckboxInputAccessor | undefined;
}
