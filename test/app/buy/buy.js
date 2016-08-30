import 'buy/buy.scss';
import view from 'buy/buy.html';

export default {
    data: model,
    template: view,
};

function model() {
    console.log('-------> ' + this.$route.params.productId);
    return {
        productId: this.$route.params.productId || 'id não encontrado',
    }
}