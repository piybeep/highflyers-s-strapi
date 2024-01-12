module.exports = ({ env }) => ({
    'transformer': {
        config: {
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            }
        }
    }
});