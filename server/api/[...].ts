import { useBase, createRouter, defineEventHandler} from "h3";
import * as userCtrl from '~~/server/controllers/user';

const router = createRouter();

router.get('/users', defineEventHandler(userCtrl.read));
router.post('/users', defineEventHandler(userCtrl.create));
router.get('/users/:id', defineEventHandler(userCtrl.detail));
router.put('/users/:id', defineEventHandler(userCtrl.update));
router.delete('/users/:id', defineEventHandler(userCtrl.remove));

export default useBase('/api', router.handler)