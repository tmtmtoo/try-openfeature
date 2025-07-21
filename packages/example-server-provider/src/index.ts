import { InMemoryProvider, AnyProviderEvent, EvaluationContext, Hook, JsonValue, Logger, Provider, ProviderEventEmitter, ResolutionDetails, ErrorCode } from "@openfeature/server-sdk";

export class ExampleServerProvider implements Provider {
  public readonly runsOn = 'server';

  readonly metadata = {
    name: 'ExampleServerProvider',
  } as const;

  hooks?: Hook[];

  events?: ProviderEventEmitter<AnyProviderEvent, Record<string, unknown>>;

  flags: ConstructorParameters<typeof InMemoryProvider>[0]

  constructor(...args: ConstructorParameters<typeof InMemoryProvider>) {
    const [flags] = args;
    this.flags = flags
  }

  async resolveBooleanEvaluation(flagKey: string, defaultValue: boolean, context: EvaluationContext, logger: Logger): Promise<ResolutionDetails<boolean>> {
    logger.info("call resolveBooleanEvaluation")

    const flag = this.flags?.[flagKey];

    if (!flag) {
      return {
        value: defaultValue,
        reason: "TARGETING_MATCH",
        errorCode: ErrorCode.FLAG_NOT_FOUND,
        errorMessage: "flag not found."
      }
    }

    if (flag.disabled) {
      return {
        value: defaultValue,
        reason: "DISABLED",
        errorCode: ErrorCode.GENERAL,
        errorMessage: "flag disabled."
      }
    }

    const defaultVariantValue = flag.variants[flag.defaultVariant];

    if (typeof defaultVariantValue !== "boolean") {
      return {
        value: defaultValue,
        variant: flag.defaultVariant,
        reason: "ERROR",
        errorCode: ErrorCode.TYPE_MISMATCH,
        errorMessage: "flag is not boolean type."
      }
    }

    return {
      value: defaultVariantValue,
      variant: flag.defaultVariant,
    }
  }

  async resolveNumberEvaluation(flagKey: string, defaultValue: number, context: EvaluationContext, logger: Logger): Promise<ResolutionDetails<number>> {
    logger.info("call resolveNumberEvaluation")
    return { value: 0 }
  }

  async resolveStringEvaluation(flagKey: string, defaultValue: string, context: EvaluationContext, logger: Logger): Promise<ResolutionDetails<string>> {
    logger.info("call resolveStringEvaluation")
    return { value: "" }
  }

  async resolveObjectEvaluation<T extends JsonValue>(flagKey: string, defaultValue: T, context: EvaluationContext, logger: Logger): Promise<ResolutionDetails<T>> {
    logger.info("call resolveObjectEvaluation")
    return { value: {} as T }
  }

  async initialize(context?: EvaluationContext): Promise<void> { }

  async onClose(): Promise<void> { }
}
