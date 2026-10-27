import { HttpService } from "../../services/httpService";
import { config } from "../../config/config";

  describe('Standard Examples - Functional Tests', () => {
  
    it('POST /welcome - deve retornar status 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/welcome`);;
      expect(response.status).toBe(200);
    });

    it('POST /echo - deve retornar status 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/echo`);;
      expect(response.status).toBe(200);
    });

    it('GET /hello_world - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/hello_world`);;
      expect(response.status).toBe(200);
    });

    it('GET /hello_world - deve retornar status default', async () => {
      const response = await HttpService.get(`${config.baseURL}/hello_world`);;
      expect(response.status).toBe(default);
    });
  });
  
  describe('FIELD Check tests - Functional Tests', () => {
  
    it('GET /__health - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/__health`);;
      expect(response.status).toBe(200);
    });

    it('GET /test_getkey - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/test_getkey`);;
      expect(response.status).toBe(200);
    });

    it('GET /test_getkey - deve retornar status default', async () => {
      const response = await HttpService.get(`${config.baseURL}/test_getkey`);;
      expect(response.status).toBe(default);
    });
  });
  
  describe('Line function - Functional Tests', () => {
  
    it('GET /stages - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/stages`);;
      expect(response.status).toBe(200);
    });

    it('GET /stages - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/stages`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/line_functions - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/line_functions - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/line_functions - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/line_functions - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions`);;
      expect(response.status).toBe(403);
    });
  });
  
  describe('Profile - Functional Tests', () => {
  
    it('GET /profile - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/profile`);;
      expect(response.status).toBe(200);
    });

    it('GET /profile - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/profile`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Server Version - Functional Tests', () => {
  
    it('GET /version - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/version`);;
      expect(response.status).toBe(200);
    });
  });
  
  describe('Line Type - Functional Tests', () => {
  
    it('GET /line_types - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_types`);;
      expect(response.status).toBe(200);
    });

    it('GET /line_types - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_types`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Product Site - Functional Tests', () => {
  
    it('GET /products/{product_id}/sites - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/sites - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/sites - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/sites - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites`);;
      expect(response.status).toBe(403);
    });
  });
  
  describe('Product CM - Functional Tests', () => {
  
    it('GET /products/{product_id}/cms - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/cms - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/cms - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/cms - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms`);;
      expect(response.status).toBe(403);
    });
  });
  
  describe('Master data Stations - Functional Tests', () => {
  
    it('GET /products/{product_id}/cms/{manufacturer_id}/line_functions/{line_function_id}/mp_bom_stations - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions/example/mp_bom_stations?q=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/line_functions/{line_function_id}/mp_bom_stations - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions/example/mp_bom_stations?q=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/line_functions/{line_function_id}/mp_bom_stations - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions/example/mp_bom_stations?q=example`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/line_functions/{line_function_id}/mp_bom_stations - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions/example/mp_bom_stations?q=example`);;
      expect(response.status).toBe(403);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/line_functions/{line_function_id}/mp_bom_stations - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/line_functions/example/mp_bom_stations?q=example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations_delete - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations_delete?ids=example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations_delete - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations_delete?ids=example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations_delete - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations_delete?ids=example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations_delete - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations_delete?ids=example`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations_delete - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations_delete?ids=example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations_delete - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations_delete?ids=example`);;
      expect(response.status).toBe(409);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/stations - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations?line_function_id=example&version=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/stations - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations?line_function_id=example&version=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/stations - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations?line_function_id=example&version=example`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/stations - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations?line_function_id=example&version=example`);;
      expect(response.status).toBe(403);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/stations - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations?line_function_id=example&version=example`);;
      expect(response.status).toBe(404);
    });

    it('POST /products/{product_id}/cms/{manufacturer_id}/stations - deve retornar status 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/stations`);;
      expect(response.status).toBe(200);
    });

    it('POST /products/{product_id}/cms/{manufacturer_id}/stations - deve retornar status 400', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/stations`);;
      expect(response.status).toBe(400);
    });

    it('POST /products/{product_id}/cms/{manufacturer_id}/stations - deve retornar status 401', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/stations`);;
      expect(response.status).toBe(401);
    });

    it('POST /products/{product_id}/cms/{manufacturer_id}/stations - deve retornar status 403', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/stations`);;
      expect(response.status).toBe(403);
    });

    it('POST /products/{product_id}/cms/{manufacturer_id}/stations - deve retornar status 409', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/stations`);;
      expect(response.status).toBe(409);
    });

    it('POST /products/{product_id}/cms/{manufacturer_id}/station_uploads - deve retornar status 201', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/station_uploads`);;
      expect(response.status).toBe(201);
    });

    it('POST /products/{product_id}/cms/{manufacturer_id}/station_uploads - deve retornar status 400', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/station_uploads`);;
      expect(response.status).toBe(400);
    });

    it('POST /products/{product_id}/cms/{manufacturer_id}/station_uploads - deve retornar status 401', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/station_uploads`);;
      expect(response.status).toBe(401);
    });

    it('POST /products/{product_id}/cms/{manufacturer_id}/station_uploads - deve retornar status 403', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/station_uploads`);;
      expect(response.status).toBe(403);
    });

    it('POST /products/{product_id}/cms/{manufacturer_id}/station_uploads - deve retornar status 409', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/cms/example/station_uploads`);;
      expect(response.status).toBe(409);
    });

    it('POST /master/stations_cleanup - deve retornar status 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/master/stations_cleanup?num_max_records=example`);;
      expect(response.status).toBe(200);
    });

    it('DELETE /products/{product_id}/cms/{manufacturer_id}/stations/{id} - deve retornar status 200', async () => {
      const response = await HttpService.delete(`${config.baseURL}/products/example/cms/example/stations/example`);;
      expect(response.status).toBe(200);
    });

    it('DELETE /products/{product_id}/cms/{manufacturer_id}/stations/{id} - deve retornar status 400', async () => {
      const response = await HttpService.delete(`${config.baseURL}/products/example/cms/example/stations/example`);;
      expect(response.status).toBe(400);
    });

    it('DELETE /products/{product_id}/cms/{manufacturer_id}/stations/{id} - deve retornar status 401', async () => {
      const response = await HttpService.delete(`${config.baseURL}/products/example/cms/example/stations/example`);;
      expect(response.status).toBe(401);
    });

    it('DELETE /products/{product_id}/cms/{manufacturer_id}/stations/{id} - deve retornar status 404', async () => {
      const response = await HttpService.delete(`${config.baseURL}/products/example/cms/example/stations/example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/{id} - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/{id} - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/{id} - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/{id} - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/example`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/{id} - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/{id} - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/example`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Master page Sites with stations status - Functional Tests', () => {
  
    it('GET /products/{product_id}/cms/{manufacturer_id}/stations/sites/status - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations/sites/status`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/stations/sites/status - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations/sites/status`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/stations/sites/status - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations/sites/status`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/stations/sites/status - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/stations/sites/status`);;
      expect(response.status).toBe(403);
    });
  });
  
  describe('Master data Stations Sites - Functional Tests', () => {
  
    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/sites/link - deve retornar status 204', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/sites/link`);;
      expect(response.status).toBe(204);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/sites/link - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/sites/link`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/sites/link - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/sites/link`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/sites/link - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/sites/link`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/sites/link - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/sites/link`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /products/{product_id}/cms/{manufacturer_id}/stations/sites/link - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/cms/example/stations/sites/link`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Master data ECR - Functional Tests', () => {
  
    it('PATCH /master/{id}/ecrs/{ecr_id} - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/example/ecrs/example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /master/{id}/ecrs/{ecr_id} - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/example/ecrs/example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /master/{id}/ecrs/{ecr_id} - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/example/ecrs/example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /master/{id}/ecrs/{ecr_id} - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/example/ecrs/example`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /master/{id}/ecrs/{ecr_id} - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/example/ecrs/example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /master/{id}/ecrs/{ecr_id} - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/example/ecrs/example`);;
      expect(response.status).toBe(409);
    });

    it('PATCH /master/ecrs - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /master/ecrs - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /master/ecrs - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /master/ecrs - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /master/ecrs - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /master/ecrs - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/master/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(409);
    });

    it('GET /master/{id}/ecrs - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/example/ecrs?field_name=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /master/{id}/ecrs - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/example/ecrs?field_name=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /master/{id}/ecrs - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/example/ecrs?field_name=example`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Master Download Template - Functional Tests', () => {
  
    it('GET /master/{product_id}/cms/{manufacturer_id}/template - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/example/cms/example/template`);;
      expect(response.status).toBe(200);
    });

    it('GET /master/{product_id}/cms/{manufacturer_id}/template - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/example/cms/example/template`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Line data Line function - Functional Tests', () => {
  
    it('GET /products/{product_id}/sites/{site_id}/lines - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/lines?version=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/sites/{site_id}/lines - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/lines?version=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/sites/{site_id}/lines - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/lines?version=example`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/sites/{site_id}/lines - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/lines?version=example`);;
      expect(response.status).toBe(403);
    });

    it('GET /products/{product_id}/sites/{site_id}/lines - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/lines?version=example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/line_groups/{product_site_linegroup_id}/line_functions/{product_site_line_uid} - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example/line_functions/example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/line_groups/{product_site_linegroup_id}/line_functions/{product_site_line_uid} - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example/line_functions/example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/line_groups/{product_site_linegroup_id}/line_functions/{product_site_line_uid} - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example/line_functions/example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/line_groups/{product_site_linegroup_id}/line_functions/{product_site_line_uid} - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example/line_functions/example`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/line_groups/{product_site_linegroup_id}/line_functions/{product_site_line_uid} - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example/line_functions/example`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Line data Line Group - Functional Tests', () => {
  
    it('PATCH /products/{product_id}/sites/{site_id}/line_groups/{product_site_linegroup_id} - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/line_groups/{product_site_linegroup_id} - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/line_groups/{product_site_linegroup_id} - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/line_groups/{product_site_linegroup_id} - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/line_groups/example`);;
      expect(response.status).toBe(404);
    });
  });
  
  describe('Line data ECR - Functional Tests', () => {
  
    it('PATCH /line/{line_data_uid}/ecrs/{ecr_id} - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/example/ecrs/example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /line/{line_data_uid}/ecrs/{ecr_id} - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/example/ecrs/example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /line/{line_data_uid}/ecrs/{ecr_id} - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/example/ecrs/example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /line/{line_data_uid}/ecrs/{ecr_id} - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/example/ecrs/example`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /line/{line_data_uid}/ecrs/{ecr_id} - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/example/ecrs/example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /line/{line_data_uid}/ecrs/{ecr_id} - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/example/ecrs/example`);;
      expect(response.status).toBe(409);
    });

    it('PATCH /line/ecrs - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /line/ecrs - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /line/ecrs - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /line/ecrs - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /line/ecrs - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /line/ecrs - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(409);
    });

    it('GET /line/{line_data_uid}/ecrs - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/example/ecrs?field_name=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /line/{line_data_uid}/ecrs - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/example/ecrs?field_name=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /line/{line_data_uid}/ecrs - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/example/ecrs?field_name=example`);;
      expect(response.status).toBe(401);
    });

    it('GET /line/{line_data_uid}/ecrs - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/example/ecrs?field_name=example`);;
      expect(response.status).toBe(404);
    });
  });
  
  describe('Line data Scenario - Functional Tests', () => {
  
    it('POST /products/{product_id}/sites/{site_id}/line_types/{product_site_line_type_id}/scenario_num - deve retornar status 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/sites/example/line_types/example/scenario_num`);;
      expect(response.status).toBe(200);
    });

    it('POST /products/{product_id}/sites/{site_id}/line_types/{product_site_line_type_id}/scenario_num - deve retornar status 400', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/sites/example/line_types/example/scenario_num`);;
      expect(response.status).toBe(400);
    });

    it('POST /products/{product_id}/sites/{site_id}/line_types/{product_site_line_type_id}/scenario_num - deve retornar status 401', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/sites/example/line_types/example/scenario_num`);;
      expect(response.status).toBe(401);
    });

    it('POST /products/{product_id}/sites/{site_id}/line_types/{product_site_line_type_id}/scenario_num - deve retornar status 409', async () => {
      const response = await HttpService.post(`${config.baseURL}/products/example/sites/example/line_types/example/scenario_num`);;
      expect(response.status).toBe(409);
    });

    it('DELETE /products/{product_id}/sites/{site_id}/line_types/{product_site_line_type_id}/scenario_num - deve retornar status 200', async () => {
      const response = await HttpService.delete(`${config.baseURL}/products/example/sites/example/line_types/example/scenario_num`);;
      expect(response.status).toBe(200);
    });

    it('DELETE /products/{product_id}/sites/{site_id}/line_types/{product_site_line_type_id}/scenario_num - deve retornar status 400', async () => {
      const response = await HttpService.delete(`${config.baseURL}/products/example/sites/example/line_types/example/scenario_num`);;
      expect(response.status).toBe(400);
    });

    it('DELETE /products/{product_id}/sites/{site_id}/line_types/{product_site_line_type_id}/scenario_num - deve retornar status 401', async () => {
      const response = await HttpService.delete(`${config.baseURL}/products/example/sites/example/line_types/example/scenario_num`);;
      expect(response.status).toBe(401);
    });

    it('DELETE /products/{product_id}/sites/{site_id}/line_types/{product_site_line_type_id}/scenario_num - deve retornar status 409', async () => {
      const response = await HttpService.delete(`${config.baseURL}/products/example/sites/example/line_types/example/scenario_num`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Site station - Functional Tests', () => {
  
    it('GET /products/{product_id}/sites/{site_id}/stations - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations?version=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations?version=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations?version=example`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations?version=example`);;
      expect(response.status).toBe(403);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations?version=example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/{product_site_line_ts_uid} - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/{product_site_line_ts_uid} - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/{product_site_line_ts_uid} - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/{product_site_line_ts_uid} - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/example`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/{product_site_line_ts_uid} - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/{product_site_line_ts_uid} - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/example`);;
      expect(response.status).toBe(409);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/bulk - deve retornar status 204', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/bulk`);;
      expect(response.status).toBe(204);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/bulk - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/bulk`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/bulk - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/bulk`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/bulk - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/bulk`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/bulk - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/bulk`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /products/{product_id}/sites/{site_id}/stations/bulk - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/products/example/sites/example/stations/bulk`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Site station recalculation - Functional Tests', () => {
  
    it('GET /products/{product_id}/sites/{site_id}/stations/recalculation - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/recalculation?line_function_id=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations/recalculation - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/recalculation?line_function_id=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations/recalculation - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/recalculation?line_function_id=example`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations/recalculation - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/recalculation?line_function_id=example`);;
      expect(response.status).toBe(404);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations/recalculation - deve retornar status 409', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/recalculation?line_function_id=example`);;
      expect(response.status).toBe(409);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations/stationtargetuphrecalculation/{line_function_id} - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/stationtargetuphrecalculation/example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations/stationtargetuphrecalculation/{line_function_id} - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/stationtargetuphrecalculation/example`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations/stationtargetuphrecalculation/{line_function_id} - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/stationtargetuphrecalculation/example`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/sites/{site_id}/stations/stationtargetuphrecalculation/{line_function_id} - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/stations/stationtargetuphrecalculation/example`);;
      expect(response.status).toBe(404);
    });
  });
  
  describe('Site station ECR - Functional Tests', () => {
  
    it('PATCH /site/{scenario_ts_uid}/ecrs/{ecr_id} - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/example/ecrs/example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /site/{scenario_ts_uid}/ecrs/{ecr_id} - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/example/ecrs/example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /site/{scenario_ts_uid}/ecrs/{ecr_id} - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/example/ecrs/example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /site/{scenario_ts_uid}/ecrs/{ecr_id} - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/example/ecrs/example`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /site/{scenario_ts_uid}/ecrs/{ecr_id} - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/example/ecrs/example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /site/{scenario_ts_uid}/ecrs/{ecr_id} - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/example/ecrs/example`);;
      expect(response.status).toBe(409);
    });

    it('PATCH /site/ecrs - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /site/ecrs - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /site/ecrs - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /site/ecrs - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /site/ecrs - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /site/ecrs - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/site/ecrs?ecr_ids=example`);;
      expect(response.status).toBe(409);
    });

    it('GET /site/{scenario_ts_uid}/ecrs - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/example/ecrs?field_name=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /site/{scenario_ts_uid}/ecrs - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/example/ecrs?field_name=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /site/{scenario_ts_uid}/ecrs - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/example/ecrs?field_name=example`);;
      expect(response.status).toBe(401);
    });

    it('GET /site/{scenario_ts_uid}/ecrs - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/example/ecrs?field_name=example`);;
      expect(response.status).toBe(404);
    });
  });
  
  describe('ECR summary (Dashboard Activity) - Functional Tests', () => {
  
    it('GET /products/activity/approvals/mine - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity/approvals/mine`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/activity/approvals/mine - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity/approvals/mine`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/activity/approvals/mine - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity/approvals/mine`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/activity/approvals - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity/approvals?roles=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/activity/approvals - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity/approvals?roles=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/activity/approvals - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity/approvals?roles=example`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/activity - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity?user_id=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/activity - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/activity?user_id=example`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Generate revision - Functional Tests', () => {
  
    it('GET /revision/generate - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/revision/generate`);;
      expect(response.status).toBe(200);
    });

    it('GET /revision/generate - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/revision/generate`);;
      expect(response.status).toBe(404);
    });
  });
  
  describe('Versions data - Functional Tests', () => {
  
    it('GET /master/products/{product_id}/cms/{manufacturer_id}/station_versions - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/products/example/cms/example/station_versions`);;
      expect(response.status).toBe(200);
    });

    it('GET /master/products/{product_id}/cms/{manufacturer_id}/station_versions - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/products/example/cms/example/station_versions`);;
      expect(response.status).toBe(400);
    });

    it('GET /master/products/{product_id}/cms/{manufacturer_id}/station_versions - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/products/example/cms/example/station_versions`);;
      expect(response.status).toBe(401);
    });

    it('GET /master/products/{product_id}/cms/{manufacturer_id}/station_versions - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/products/example/cms/example/station_versions`);;
      expect(response.status).toBe(403);
    });

    it('GET /master/products/{product_id}/cms/{manufacturer_id}/station_versions - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/products/example/cms/example/station_versions`);;
      expect(response.status).toBe(404);
    });

    it('GET /line/products/{product_id}/sites/{site_id}/line_versions - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/products/example/sites/example/line_versions`);;
      expect(response.status).toBe(200);
    });

    it('GET /line/products/{product_id}/sites/{site_id}/line_versions - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/products/example/sites/example/line_versions`);;
      expect(response.status).toBe(400);
    });

    it('GET /line/products/{product_id}/sites/{site_id}/line_versions - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/products/example/sites/example/line_versions`);;
      expect(response.status).toBe(401);
    });

    it('GET /line/products/{product_id}/sites/{site_id}/line_versions - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/products/example/sites/example/line_versions`);;
      expect(response.status).toBe(403);
    });

    it('GET /line/products/{product_id}/sites/{site_id}/line_versions - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/line/products/example/sites/example/line_versions`);;
      expect(response.status).toBe(404);
    });

    it('GET /site/products/{product_id}/sites/{site_id}/site_versions - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/products/example/sites/example/site_versions`);;
      expect(response.status).toBe(200);
    });

    it('GET /site/products/{product_id}/sites/{site_id}/site_versions - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/products/example/sites/example/site_versions`);;
      expect(response.status).toBe(400);
    });

    it('GET /site/products/{product_id}/sites/{site_id}/site_versions - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/products/example/sites/example/site_versions`);;
      expect(response.status).toBe(401);
    });

    it('GET /site/products/{product_id}/sites/{site_id}/site_versions - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/products/example/sites/example/site_versions`);;
      expect(response.status).toBe(403);
    });

    it('GET /site/products/{product_id}/sites/{site_id}/site_versions - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/site/products/example/sites/example/site_versions`);;
      expect(response.status).toBe(404);
    });
  });
  
  describe('Changelog (ECR History) - Functional Tests', () => {
  
    it('GET /products/{product_id}/cms/{manufacturer_id}/changelog - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/changelog`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/changelog - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/changelog`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/changelog - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/changelog`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/changelog - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/changelog`);;
      expect(response.status).toBe(403);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/changelog - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/changelog`);;
      expect(response.status).toBe(404);
    });

    it('GET /products/{product_id}/sites/{site_id}/line_changelog - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_changelog`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/sites/{site_id}/line_changelog - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_changelog`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/sites/{site_id}/line_changelog - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_changelog`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/sites/{site_id}/line_changelog - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_changelog`);;
      expect(response.status).toBe(403);
    });

    it('GET /products/{product_id}/sites/{site_id}/line_changelog - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_changelog`);;
      expect(response.status).toBe(404);
    });

    it('GET /products/{product_id}/sites/{site_id}/site_changelog - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/site_changelog`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/sites/{site_id}/site_changelog - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/site_changelog`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/sites/{site_id}/site_changelog - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/site_changelog`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/sites/{site_id}/site_changelog - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/site_changelog`);;
      expect(response.status).toBe(403);
    });

    it('GET /products/{product_id}/sites/{site_id}/site_changelog - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/site_changelog`);;
      expect(response.status).toBe(404);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/master_uniq_stations - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/master_uniq_stations?line_function_id=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/master_uniq_stations - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/master_uniq_stations?line_function_id=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/cms/{manufacturer_id}/master_uniq_stations - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/cms/example/master_uniq_stations?line_function_id=example`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('SemTag - Functional Tests', () => {
  
    it('GET /app/fields/calculated/{page} - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/fields/calculated/example`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/fields/calculated/{page} - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/fields/calculated/example`);;
      expect(response.status).toBe(401);
    });

    it('GET /app/fields/calculated/{page} - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/fields/calculated/example`);;
      expect(response.status).toBe(404);
    });

    it('GET /app/user/stations/able-modify - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/user/stations/able-modify`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/user/lines/able-modify - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/user/lines/able-modify`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/user/sites/able-modify - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/user/sites/able-modify`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/dri/setting - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/dri/setting`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/dri/setting - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/dri/setting`);;
      expect(response.status).toBe(400);
    });

    it('GET /app/dri/setting - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/dri/setting`);;
      expect(response.status).toBe(401);
    });

    it('POST /app/dri/setting - deve retornar status 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/dri/setting`);;
      expect(response.status).toBe(200);
    });

    it('POST /app/dri/setting - deve retornar status 400', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/dri/setting`);;
      expect(response.status).toBe(400);
    });

    it('POST /app/dri/setting - deve retornar status 401', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/dri/setting`);;
      expect(response.status).toBe(401);
    });

    it('PUT /app/dri/setting - deve retornar status 201', async () => {
      const response = await HttpService.put(`${config.baseURL}/app/dri/setting`);;
      expect(response.status).toBe(201);
    });

    it('PUT /app/dri/setting - deve retornar status 400', async () => {
      const response = await HttpService.put(`${config.baseURL}/app/dri/setting`);;
      expect(response.status).toBe(400);
    });

    it('PUT /app/dri/setting - deve retornar status 401', async () => {
      const response = await HttpService.put(`${config.baseURL}/app/dri/setting`);;
      expect(response.status).toBe(401);
    });

    it('PUT /app/dri/setting/bulk/notification - deve retornar status 204', async () => {
      const response = await HttpService.put(`${config.baseURL}/app/dri/setting/bulk/notification`);;
      expect(response.status).toBe(204);
    });

    it('PUT /app/dri/setting/bulk/notification - deve retornar status 400', async () => {
      const response = await HttpService.put(`${config.baseURL}/app/dri/setting/bulk/notification`);;
      expect(response.status).toBe(400);
    });

    it('POST /app/stations/duplicate - deve retornar status 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/duplicate`);;
      expect(response.status).toBe(200);
    });

    it('POST /app/stations/duplicate - deve retornar status 400', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/duplicate`);;
      expect(response.status).toBe(400);
    });

    it('POST /app/stations/duplicate - deve retornar status 401', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/duplicate`);;
      expect(response.status).toBe(401);
    });

    it('POST /app/stations/duplicate - deve retornar status 403', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/duplicate`);;
      expect(response.status).toBe(403);
    });

    it('POST /app/stations/duplicate - deve retornar status 404', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/duplicate`);;
      expect(response.status).toBe(404);
    });

    it('POST /app/stations/duplicate - deve retornar status 409', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/duplicate`);;
      expect(response.status).toBe(409);
    });

    it('POST /app/stations/move - deve retornar status 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/move`);;
      expect(response.status).toBe(200);
    });

    it('POST /app/stations/move - deve retornar status 400', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/move`);;
      expect(response.status).toBe(400);
    });

    it('POST /app/stations/move - deve retornar status 401', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/move`);;
      expect(response.status).toBe(401);
    });

    it('POST /app/stations/move - deve retornar status 403', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/move`);;
      expect(response.status).toBe(403);
    });

    it('POST /app/stations/move - deve retornar status 409', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/stations/move`);;
      expect(response.status).toBe(409);
    });

    it('GET /master/products/{product_id}/cms/{manufacturer_id}/ecrs - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/products/{product_id}/cms/{manufacturer_id}/ecrs`);;
      expect(response.status).toBe(200);
    });

    it('GET /master/products/{product_id}/cms/{manufacturer_id}/ecrs - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/products/{product_id}/cms/{manufacturer_id}/ecrs`);;
      expect(response.status).toBe(403);
    });
  });
  
  describe('Delete dri settings bulk - Functional Tests', () => {
  
    it('DELETE /app/dri/setting/bulk - deve retornar status 200', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/dri/setting/bulk`);;
      expect(response.status).toBe(200);
    });

    it('DELETE /app/dri/setting/bulk - deve retornar status 400', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/dri/setting/bulk`);;
      expect(response.status).toBe(400);
    });

    it('DELETE /app/dri/setting/bulk - deve retornar status 401', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/dri/setting/bulk`);;
      expect(response.status).toBe(401);
    });

    it('DELETE /app/dri/setting/bulk - deve retornar status 404', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/dri/setting/bulk`);;
      expect(response.status).toBe(404);
    });
  });
  
  describe('Product - Functional Tests', () => {
  
    it('GET /app/products - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/products`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/products - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/products`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Department - Functional Tests', () => {
  
    it('GET /app/departments - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/departments`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/departments - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/departments`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Site - Functional Tests', () => {
  
    it('GET /app/sites - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/sites`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/sites - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/sites`);;
      expect(response.status).toBe(401);
    });

    it('GET /public/products/{product_id}/sites/{site_id} - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/public/products/example/sites/example?version=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /public/products/{product_id}/sites/{site_id} - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/public/products/example/sites/example?version=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /public/products/{product_id}/sites/{site_id} - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/public/products/example/sites/example?version=example`);;
      expect(response.status).toBe(401);
    });

    it('GET /public/products/{product_id}/sites/{site_id} - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/public/products/example/sites/example?version=example`);;
      expect(response.status).toBe(403);
    });

    it('GET /public/products/{product_id}/sites/{site_id} - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/public/products/example/sites/example?version=example`);;
      expect(response.status).toBe(404);
    });
  });
  
  describe('StageGroup - Functional Tests', () => {
  
    it('GET /app/stage_groups - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/stage_groups`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/stage_groups - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/stage_groups`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Line Levels - Functional Tests', () => {
  
    it('GET /app/line_level - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_level`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/line_level - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_level`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Next sort available to insert a new Line Function. - Functional Tests', () => {
  
    it('GET /app/line_function/next_sort - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function/next_sort`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/line_function/next_sort - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function/next_sort`);;
      expect(response.status).toBe(401);
    });

    it('GET /app/line_function/next_sort - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function/next_sort`);;
      expect(response.status).toBe(403);
    });
  });
  
  describe('Insert a new Line Function. - Functional Tests', () => {
  
    it('POST /app/line_function - deve retornar status 201', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/line_function`);;
      expect(response.status).toBe(201);
    });

    it('POST /app/line_function - deve retornar status 401', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/line_function`);;
      expect(response.status).toBe(401);
    });

    it('POST /app/line_function - deve retornar status 403', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/line_function`);;
      expect(response.status).toBe(403);
    });

    it('POST /app/line_function - deve retornar status 404', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/line_function`);;
      expect(response.status).toBe(404);
    });

    it('POST /app/line_function - deve retornar status 409', async () => {
      const response = await HttpService.post(`${config.baseURL}/app/line_function`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('List of Line Functions. - Functional Tests', () => {
  
    it('GET /app/line_function - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/line_function - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function`);;
      expect(response.status).toBe(401);
    });

    it('GET /app/line_function - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function`);;
      expect(response.status).toBe(403);
    });
  });
  
  describe('Get a specific Line Function. - Functional Tests', () => {
  
    it('GET /app/line_function/{line_function_id} - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/line_function/{line_function_id} - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(401);
    });

    it('GET /app/line_function/{line_function_id} - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(403);
    });

    it('GET /app/line_function/{line_function_id} - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(404);
    });

    it('GET /app/line_function/{line_function_id} - deve retornar status 409', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Partial update a Line Function. - Functional Tests', () => {
  
    it('PATCH /app/line_function/{line_function_id} - deve retornar status 200', async () => {
      const response = await HttpService.patch(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(200);
    });

    it('PATCH /app/line_function/{line_function_id} - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /app/line_function/{line_function_id} - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /app/line_function/{line_function_id} - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /app/line_function/{line_function_id} - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Remove a Line Function. - Functional Tests', () => {
  
    it('DELETE /app/line_function/{line_function_id} - deve retornar status 204', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(204);
    });

    it('DELETE /app/line_function/{line_function_id} - deve retornar status 401', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(401);
    });

    it('DELETE /app/line_function/{line_function_id} - deve retornar status 403', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(403);
    });

    it('DELETE /app/line_function/{line_function_id} - deve retornar status 404', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(404);
    });

    it('DELETE /app/line_function/{line_function_id} - deve retornar status 409', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/{line_function_id}`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Remove a list of Line Functions. - Functional Tests', () => {
  
    it('DELETE /app/line_function/bulk - deve retornar status 204', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/bulk`);;
      expect(response.status).toBe(204);
    });

    it('DELETE /app/line_function/bulk - deve retornar status 401', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/bulk`);;
      expect(response.status).toBe(401);
    });

    it('DELETE /app/line_function/bulk - deve retornar status 403', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/bulk`);;
      expect(response.status).toBe(403);
    });

    it('DELETE /app/line_function/bulk - deve retornar status 404', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/bulk`);;
      expect(response.status).toBe(404);
    });

    it('DELETE /app/line_function/bulk - deve retornar status 409', async () => {
      const response = await HttpService.delete(`${config.baseURL}/app/line_function/bulk`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Dri - Functional Tests', () => {
  
    it('GET /app/dris - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/dris`);;
      expect(response.status).toBe(200);
    });

    it('GET /app/dris - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/app/dris`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Station upload status - Functional Tests', () => {
  
    it('GET /station_uploads/status - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/station_uploads/status`);;
      expect(response.status).toBe(200);
    });
  });
  
  describe('Test authentication via token oauth - Functional Tests', () => {
  
    it('GET /authenticate/oauth - deve retornar status 204', async () => {
      const response = await HttpService.get(`${config.baseURL}/authenticate/oauth`);;
      expect(response.status).toBe(204);
    });

    it('GET /authenticate/oauth - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/authenticate/oauth`);;
      expect(response.status).toBe(401);
    });

    it('GET /authenticate/oauth - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/authenticate/oauth`);;
      expect(response.status).toBe(403);
    });
  });
  
  describe('Authentication via token oauth - Functional Tests', () => {
  
    it('POST /authenticate/oauth - deve retornar status 200', async () => {
      const response = await HttpService.post(`${config.baseURL}/authenticate/oauth`);;
      expect(response.status).toBe(200);
    });

    it('POST /authenticate/oauth - deve retornar status 400', async () => {
      const response = await HttpService.post(`${config.baseURL}/authenticate/oauth`);;
      expect(response.status).toBe(400);
    });

    it('POST /authenticate/oauth - deve retornar status 401', async () => {
      const response = await HttpService.post(`${config.baseURL}/authenticate/oauth`);;
      expect(response.status).toBe(401);
    });

    it('POST /authenticate/oauth - deve retornar status 403', async () => {
      const response = await HttpService.post(`${config.baseURL}/authenticate/oauth`);;
      expect(response.status).toBe(403);
    });

    it('POST /authenticate/oauth - deve retornar status 404', async () => {
      const response = await HttpService.post(`${config.baseURL}/authenticate/oauth`);;
      expect(response.status).toBe(404);
    });

    it('POST /authenticate/oauth - deve retornar status 409', async () => {
      const response = await HttpService.post(`${config.baseURL}/authenticate/oauth`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Master Download Template with Stations data - Functional Tests', () => {
  
    it('GET /master/{product_id}/cms/{manufacturer_id}/template_data - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/example/cms/example/template_data`);;
      expect(response.status).toBe(200);
    });

    it('GET /master/{product_id}/cms/{manufacturer_id}/template_data - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/master/example/cms/example/template_data`);;
      expect(response.status).toBe(401);
    });
  });
  
  describe('Line Config - Functional Tests', () => {
  
    it('GET /public/line_scenario/config_options - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/public/line_scenario/config_options`);;
      expect(response.status).toBe(200);
    });

    it('GET /public/line_scenario/config_options - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/public/line_scenario/config_options`);;
      expect(response.status).toBe(401);
    });

    it('GET /public/line_scenario/config_options - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/public/line_scenario/config_options`);;
      expect(response.status).toBe(403);
    });

    it('GET /line_scenario/config_options - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_scenario/config_options`);;
      expect(response.status).toBe(200);
    });

    it('GET /line_scenario/config_options - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_scenario/config_options`);;
      expect(response.status).toBe(401);
    });

    it('GET /line_scenario/config_options - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_scenario/config_options`);;
      expect(response.status).toBe(403);
    });
  });
  
  describe('Site station group - Functional Tests', () => {
  
    it('GET /products/{product_id}/site/{site_id}/scenario_station/{scenario_ts_uid}/group - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/site/example/scenario_station/example/group?filters=example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/site/{site_id}/scenario_station/{scenario_ts_uid}/group - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/site/example/scenario_station/example/group?filters=example`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/site/{site_id}/scenario_station/{scenario_ts_uid}/group - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/site/example/scenario_station/example/group?filters=example`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/site/{site_id}/scenario_station/{scenario_ts_uid}/group - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/site/example/scenario_station/example/group?filters=example`);;
      expect(response.status).toBe(403);
    });

    it('GET /products/{product_id}/site/{site_id}/scenario_station/{scenario_ts_uid}/group - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/site/example/scenario_station/example/group?filters=example`);;
      expect(response.status).toBe(404);
    });
  });
  
  describe('Line Scenarios by Line Function - Functional Tests', () => {
  
    it('GET /products/{product_id}/sites/{site_id}/line_function/{line_function_id} - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_function/example`);;
      expect(response.status).toBe(200);
    });

    it('GET /products/{product_id}/sites/{site_id}/line_function/{line_function_id} - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_function/example`);;
      expect(response.status).toBe(400);
    });

    it('GET /products/{product_id}/sites/{site_id}/line_function/{line_function_id} - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_function/example`);;
      expect(response.status).toBe(401);
    });

    it('GET /products/{product_id}/sites/{site_id}/line_function/{line_function_id} - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_function/example`);;
      expect(response.status).toBe(403);
    });

    it('GET /products/{product_id}/sites/{site_id}/line_function/{line_function_id} - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_function/example`);;
      expect(response.status).toBe(404);
    });

    it('GET /products/{product_id}/sites/{site_id}/line_function/{line_function_id} - deve retornar status 409', async () => {
      const response = await HttpService.get(`${config.baseURL}/products/example/sites/example/line_function/example`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Line floor config - Functional Tests', () => {
  
    it('GET /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(200);
    });

    it('GET /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(400);
    });

    it('GET /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(401);
    });

    it('GET /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(403);
    });

    it('GET /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(404);
    });
  });
  
  describe('Line Floor Config - Functional Tests', () => {
  
    it('PATCH /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 204', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(204);
    });

    it('PATCH /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /line_scenario/{line_scenario_uid}/floor_config - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Handle ECRs - Functional Tests', () => {
  
    it('PATCH /line_scenario/{line_scenario_uid}/floor_config/ecrs - deve retornar status 204', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config/ecrs`);;
      expect(response.status).toBe(204);
    });

    it('PATCH /line_scenario/{line_scenario_uid}/floor_config/ecrs - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config/ecrs`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /line_scenario/{line_scenario_uid}/floor_config/ecrs - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config/ecrs`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /line_scenario/{line_scenario_uid}/floor_config/ecrs - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config/ecrs`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /line_scenario/{line_scenario_uid}/floor_config/ecrs - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config/ecrs`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /line_scenario/{line_scenario_uid}/floor_config/ecrs - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/line_scenario/example/floor_config/ecrs`);;
      expect(response.status).toBe(409);
    });

    it('PATCH /scenario_test_station/{scenario_ts_uid}/floor_config/ecrs - deve retornar status 204', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config/ecrs`);;
      expect(response.status).toBe(204);
    });

    it('PATCH /scenario_test_station/{scenario_ts_uid}/floor_config/ecrs - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config/ecrs`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /scenario_test_station/{scenario_ts_uid}/floor_config/ecrs - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config/ecrs`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /scenario_test_station/{scenario_ts_uid}/floor_config/ecrs - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config/ecrs`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /scenario_test_station/{scenario_ts_uid}/floor_config/ecrs - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config/ecrs`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /scenario_test_station/{scenario_ts_uid}/floor_config/ecrs - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config/ecrs`);;
      expect(response.status).toBe(409);
    });
  });
  
  describe('Site floor config - Functional Tests', () => {
  
    it('GET /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 200', async () => {
      const response = await HttpService.get(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(200);
    });

    it('GET /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 400', async () => {
      const response = await HttpService.get(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(400);
    });

    it('GET /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 401', async () => {
      const response = await HttpService.get(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(401);
    });

    it('GET /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 403', async () => {
      const response = await HttpService.get(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(403);
    });

    it('GET /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 404', async () => {
      const response = await HttpService.get(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(404);
    });

    it('GET /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 409', async () => {
      const response = await HttpService.get(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(409);
    });

    it('PATCH /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 204', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(204);
    });

    it('PATCH /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 400', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(400);
    });

    it('PATCH /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 401', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(401);
    });

    it('PATCH /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 403', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(403);
    });

    it('PATCH /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 404', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(404);
    });

    it('PATCH /scenario_test_station/{line_scenario_test_station_uid}/floor_config - deve retornar status 409', async () => {
      const response = await HttpService.patch(`${config.baseURL}/scenario_test_station/example/floor_config`);;
      expect(response.status).toBe(409);
    });
  });