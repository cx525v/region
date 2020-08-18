import { createAction, props } from '@ngrx/store';
import { Region } from 'src/app/shared/models/region.model';

export const saveRegion = createAction(
    '[Save] Save Region',
     props<{ val: Region[]}>()
  );
