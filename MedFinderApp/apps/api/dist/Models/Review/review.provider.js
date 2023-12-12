"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewProvider = void 0;
const constants_1 = require("../../Utils/constants");
const review_entity_1 = require("./Entities/review.entity");
exports.ReviewProvider = [
    {
        provide: constants_1.REPO_NAMES.REVIEW,
        useFactory: (dataSource) => dataSource.getRepository(review_entity_1.Review),
        inject: [constants_1.REPO_NAMES.DATASOURCE]
    }
];
//# sourceMappingURL=review.provider.js.map