const htmlSpec = require('@markuplint/html-spec');

const { getAttrSpecs } = require('../../lib/specs/get-attr-specs');

describe('getSpec', () => {
	test('svg:image[x]', () => {
		const specs = getAttrSpecs('image', 'http://www.w3.org/2000/svg', htmlSpec);
		const x = specs?.find(spec => spec.name === 'x');
		expect(x).toStrictEqual({
			defaultValue: '0',
			name: 'x',
			type: ['<svg-length>', '<percentage>'],
			animatable: true,
		});
	});

	test('svg:foreignObject[x]', () => {
		const specs = getAttrSpecs('foreignObject', 'http://www.w3.org/2000/svg', htmlSpec);
		const x = specs?.find(spec => spec.name === 'x');
		expect(x).toStrictEqual({
			defaultValue: '0',
			description:
				'The x coordinate of the foreignObject. Value type: <length>|<percentage> ; Default value: 0; Animatable: yes',
			name: 'x',
			type: ['<svg-length>', '<percentage>'],
			animatable: true,
		});
	});

	test('svg:linearGradient[xlink:href]', () => {
		const specs = getAttrSpecs('linearGradient', 'http://www.w3.org/2000/svg', htmlSpec);
		const x = specs?.find(spec => spec.name === 'xlink:href');
		expect(x).toStrictEqual({
			description:
				'Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.An <IRI> reference to another <linearGradient> element that will be used as a template. Value type: <IRI> ; Default value: none; Animatable: yes',
			name: 'xlink:href',
			type: 'URL',
			deprecated: true,
		});
	});
});
