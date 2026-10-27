import { HttpService } from "../../services/httpService";
import { config } from "../../config/config";

  describe('Standard Examples - Health Check', () => {
  
    it('POST /welcome deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/welcome`);
      expect(response.status).toBe(200);
    });

    it('POST /echo deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/echo`);
      expect(response.status).toBe(200);
    });

    it('GET /hello_world deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/hello_world`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('SemTag - Health Check', () => {
  
    it('X-SWAGGER-ROUTER-CONTROLLER /__health deve retornar 200', async () => {
      const response = await HttpService.x-swagger-router-controller(`${config.baseURL}/__health`);
      expect(response.status).toBe(200);
    });

    it('GET /app/fields/calculated/example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/fields/calculated/example`);
      expect(response.status).toBe(200);
    });

    it('GET /app/user/stations/able-modify deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/user/stations/able-modify`);
      expect(response.status).toBe(200);
    });

    it('GET /app/user/lines/able-modify deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/user/lines/able-modify`);
      expect(response.status).toBe(200);
    });

    it('GET /app/user/sites/able-modify deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/user/sites/able-modify`);
      expect(response.status).toBe(200);
    });

    it('GET /app/dri/setting deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/dri/setting`);
      expect(response.status).toBe(200);
    });

    it('POST /app/dri/setting deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/dri/setting`);
      expect(response.status).toBe(200);
    });

    it('PUT /app/dri/setting deve retornar 200', async () => {
      const response = await HttpService.put(`${config.baseURL}/app/dri/setting`);
      expect(response.status).toBe(200);
    });

    it('PUT /app/dri/setting/bulk/notification deve retornar 200', async () => {
      const response = await HttpService.put(`${config.baseURL}/app/dri/setting/bulk/notification`);
      expect(response.status).toBe(200);
    });

    it('POST /app/stations/duplicate deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/duplicate`);
      expect(response.status).toBe(200);
    });

    it('POST /app/stations/move deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/move`);
      expect(response.status).toBe(200);
    });

    it('GET /master/products/{product_id}/cms/{manufacturer_id}/ecrs deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/products/{product_id}/cms/{manufacturer_id}/ecrs`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('FIELD Check tests - Health Check', () => {
  
    it('GET /__health deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/__health`);
      expect(response.status).toBe(200);
    });

    it('GET /test_getkey deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/test_getkey`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line function - Health Check', () => {
  
    it('GET /stages deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/stages`);
      expect(response.status).toBe(200);
    });

    it('GET /products/example/cms/example/line_functions deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Profile - Health Check', () => {
  
    it('GET /profile deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/profile`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Server Version - Health Check', () => {
  
    it('GET /version deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/version`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line Type - Health Check', () => {
  
    it('GET /line_types deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_types`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Product Site - Health Check', () => {
  
    it('GET /products/example/sites deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Product CM - Health Check', () => {
  
    it('GET /products/example/cms deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Master data Stations - Health Check', () => {
  
    it('GET /products/example/cms/example/line_functions/example/mp_bom_stations?q=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions/example/mp_bom_stations?q=example`);
      expect(response.status).toBe(200);
    });

    it('PATCH /products/example/cms/example/stations_delete?ids=example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations_delete?ids=example`);
      expect(response.status).toBe(200);
    });

    it('GET /products/example/cms/example/stations?line_function_id=example&version=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations?line_function_id=example&version=example`);
      expect(response.status).toBe(200);
    });

    it('POST /products/example/cms/example/stations deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/stations`);
      expect(response.status).toBe(200);
    });

    it('POST /products/example/cms/example/station_uploads deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/station_uploads`);
      expect(response.status).toBe(200);
    });

    it('POST /master/stations_cleanup?num_max_records=example deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/master/stations_cleanup?num_max_records=example`);
      expect(response.status).toBe(200);
    });

    it('DELETE /products/example/cms/example/stations/example deve retornar 200', async () => {
      const response = await HttpService.delete(`${config.baseURL}/products/example/cms/example/stations/example`);
      expect(response.status).toBe(200);
    });

    it('PATCH /products/example/cms/example/stations/example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Master page Sites with stations status - Health Check', () => {
  
    it('GET /products/example/cms/example/stations/sites/status deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations/sites/status`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Master data Stations Sites - Health Check', () => {
  
    it('PATCH /products/example/cms/example/stations/sites/link deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/sites/link`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Master data ECR - Health Check', () => {
  
    it('PATCH /master/example/ecrs/example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/example/ecrs/example`);
      expect(response.status).toBe(200);
    });

    it('PATCH /master/ecrs?ecr_ids=example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/ecrs?ecr_ids=example`);
      expect(response.status).toBe(200);
    });

    it('GET /master/example/ecrs?field_name=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/example/ecrs?field_name=example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Master Download Template - Health Check', () => {
  
    it('GET /master/example/cms/example/template deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/example/cms/example/template`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line data Line function - Health Check', () => {
  
    it('GET /products/example/sites/example/lines?version=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/lines?version=example`);
      expect(response.status).toBe(200);
    });

    it('PATCH /products/example/sites/example/line_groups/example/line_functions/example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example/line_functions/example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line data Line Group - Health Check', () => {
  
    it('PATCH /products/example/sites/example/line_groups/example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line data ECR - Health Check', () => {
  
    it('PATCH /line/example/ecrs/example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/example/ecrs/example`);
      expect(response.status).toBe(200);
    });

    it('PATCH /line/ecrs?ecr_ids=example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/ecrs?ecr_ids=example`);
      expect(response.status).toBe(200);
    });

    it('GET /line/example/ecrs?field_name=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/example/ecrs?field_name=example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line data Scenario - Health Check', () => {
  
    it('POST /products/example/sites/example/line_types/example/scenario_num deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/sites/example/line_types/example/scenario_num`);
      expect(response.status).toBe(200);
    });

    it('DELETE /products/example/sites/example/line_types/example/scenario_num deve retornar 200', async () => {
      const response = await HttpService.delete(`${config.baseURL}/products/example/sites/example/line_types/example/scenario_num`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Site station - Health Check', () => {
  
    it('GET /products/example/sites/example/stations?version=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations?version=example`);
      expect(response.status).toBe(200);
    });

    it('PATCH /products/example/sites/example/stations/example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/example`);
      expect(response.status).toBe(200);
    });

    it('PATCH /products/example/sites/example/stations/bulk deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/bulk`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Site station recalculation - Health Check', () => {
  
    it('GET /products/example/sites/example/stations/recalculation?line_function_id=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/recalculation?line_function_id=example`);
      expect(response.status).toBe(200);
    });

    it('GET /products/example/sites/example/stations/stationtargetuphrecalculation/example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/stationtargetuphrecalculation/example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Site station ECR - Health Check', () => {
  
    it('PATCH /site/example/ecrs/example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/example/ecrs/example`);
      expect(response.status).toBe(200);
    });

    it('PATCH /site/ecrs?ecr_ids=example deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/ecrs?ecr_ids=example`);
      expect(response.status).toBe(200);
    });

    it('GET /site/example/ecrs?field_name=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/example/ecrs?field_name=example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('ECR summary (Dashboard Activity) - Health Check', () => {
  
    it('GET /products/activity/approvals/mine deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity/approvals/mine`);
      expect(response.status).toBe(200);
    });

    it('GET /products/activity/approvals?roles=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity/approvals?roles=example`);
      expect(response.status).toBe(200);
    });

    it('GET /products/activity?user_id=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity?user_id=example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Generate revision - Health Check', () => {
  
    it('GET /revision/generate deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/revision/generate`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Versions data - Health Check', () => {
  
    it('GET /master/products/example/cms/example/station_versions deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/products/example/cms/example/station_versions`);
      expect(response.status).toBe(200);
    });

    it('GET /line/products/example/sites/example/line_versions deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/products/example/sites/example/line_versions`);
      expect(response.status).toBe(200);
    });

    it('GET /site/products/example/sites/example/site_versions deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/products/example/sites/example/site_versions`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Changelog (ECR History) - Health Check', () => {
  
    it('GET /products/example/cms/example/changelog deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/changelog`);
      expect(response.status).toBe(200);
    });

    it('GET /products/example/sites/example/line_changelog deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_changelog`);
      expect(response.status).toBe(200);
    });

    it('GET /products/example/sites/example/site_changelog deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/site_changelog`);
      expect(response.status).toBe(200);
    });

    it('GET /products/example/cms/example/master_uniq_stations?line_function_id=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/master_uniq_stations?line_function_id=example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Delete dri settings bulk - Health Check', () => {
  
    it('DELETE /app/dri/setting/bulk deve retornar 200', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/dri/setting/bulk`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Product - Health Check', () => {
  
    it('GET /app/products deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/products`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Department - Health Check', () => {
  
    it('GET /app/departments deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/departments`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Site - Health Check', () => {
  
    it('GET /app/sites deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/sites`);
      expect(response.status).toBe(200);
    });

    it('GET /public/products/example/sites/example?version=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/public/products/example/sites/example?version=example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('StageGroup - Health Check', () => {
  
    it('GET /app/stage_groups deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/stage_groups`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line Levels - Health Check', () => {
  
    it('GET /app/line_level deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_level`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Next sort available to insert a new Line Function. - Health Check', () => {
  
    it('GET /app/line_function/next_sort deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function/next_sort`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Insert a new Line Function. - Health Check', () => {
  
    it('POST /app/line_function deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/line_function`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('List of Line Functions. - Health Check', () => {
  
    it('GET /app/line_function deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Get a specific Line Function. - Health Check', () => {
  
    it('GET /app/line_function/{line_function_id} deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function/{line_function_id}`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Partial update a Line Function. - Health Check', () => {
  
    it('PATCH /app/line_function/{line_function_id} deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/app/line_function/{line_function_id}`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Remove a Line Function. - Health Check', () => {
  
    it('DELETE /app/line_function/{line_function_id} deve retornar 200', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/{line_function_id}`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Remove a list of Line Functions. - Health Check', () => {
  
    it('DELETE /app/line_function/bulk deve retornar 200', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/bulk`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Dri - Health Check', () => {
  
    it('GET /app/dris deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/dris`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Station upload status - Health Check', () => {
  
    it('GET /station_uploads/status deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/station_uploads/status`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Test authentication via token oauth - Health Check', () => {
  
    it('GET /authenticate/oauth deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/authenticate/oauth`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Authentication via token oauth - Health Check', () => {
  
    it('POST /authenticate/oauth deve retornar 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/authenticate/oauth`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Master Download Template with Stations data - Health Check', () => {
  
    it('GET /master/example/cms/example/template_data deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/example/cms/example/template_data`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line Config - Health Check', () => {
  
    it('GET /public/line_scenario/config_options deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/public/line_scenario/config_options`);
      expect(response.status).toBe(200);
    });

    it('GET /line_scenario/config_options deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_scenario/config_options`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Site station group - Health Check', () => {
  
    it('GET /products/example/site/example/scenario_station/example/group?filters=example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/site/example/scenario_station/example/group?filters=example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line Scenarios by Line Function - Health Check', () => {
  
    it('GET /products/example/sites/example/line_function/example deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_function/example`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line floor config - Health Check', () => {
  
    it('GET /line_scenario/example/floor_config deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_scenario/example/floor_config`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line Floor Config - Health Check', () => {
  
    it('PATCH /line_scenario/example/floor_config deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Handle ECRs - Health Check', () => {
  
    it('PATCH /line_scenario/example/floor_config/ecrs deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config/ecrs`);
      expect(response.status).toBe(200);
    });

    it('PATCH /scenario_test_station/example/floor_config/ecrs deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config/ecrs`);
      expect(response.status).toBe(200);
    });
  });
  
  describe('Site floor config - Health Check', () => {
  
    it('GET /scenario_test_station/example/floor_config deve retornar 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/scenario_test_station/example/floor_config`);
      expect(response.status).toBe(200);
    });

    it('PATCH /scenario_test_station/example/floor_config deve retornar 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config`);
      expect(response.status).toBe(200);
    });
  });