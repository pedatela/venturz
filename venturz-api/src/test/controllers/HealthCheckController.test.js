const HealthCheckController = require('../../app/controllers/HealthCheckController');
const { mockRequest, mockResponse } = require('../util/interceptor');


describe("Check method \'HealthCheckController\' ", () => {
    test('should 200 and return correct value', async () => {
        const req = mockRequest();
        const res = mockResponse();

        await HealthCheckController.index(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
    });
  });