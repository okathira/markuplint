import { RuleConfigValue, Severity } from '@markuplint/ml-config';
import { MLRuleContext } from './ml-rule-context';

export interface MLRuleOptions<T extends RuleConfigValue, O = null> {
	name: string;
	defaultLevel?: Severity;
	defaultValue: T;
	defaultOptions: O;
	verify(context: MLRuleContext<T, O>): void | Promise<void>;
	fix?(context: MLRuleContext<T, O>): void | Promise<void>;
}
