<!-- <script lang="ts"> -->
<!-- import { apiService } from "../../services/apiService";
    import { sampleTunings } from '../../constants/tunings';
    import { getTuningNameAsString } from "../../services/noteUtils";

    async function writeTunings(): Promise<void> {
      // @ts-ignore
      const params: sampleTunings.map((tuning) => ({
        tuning,
        friendlyName: getTuningNameAsString(tuning),
        tags: []
      }));
      const res = await apiService.userTunings.createMany(params);
      const j = await res.json();
      console.log('RESP', j);
    } -->
<!-- </script> -->

<button> Write tunings </button>
